import { randomUUID as uuid } from 'crypto';

interface CreatePost {
  validator(type: Post): { error?: string }
}

export interface Post {
  _id: string;
  tags: string[];
  title: string;
  description: string;
}

export class PostEntity implements Partial<Post> {
  public _id: string;

  constructor(
    public tags: string[],
    public title: string,
    public description: string,
  ) {
    this._id = uuid();
  }
}

const buildMakePost = ({ validator }: CreatePost) =>
  ({ tags, title, description }: Omit<Post, '_id'>): Post | Error => {
    try {
      const postCreated = new PostEntity(
        tags, title, description
      );

      const { error } = validator(postCreated);

      if (error)
        throw new Error(error);

      return Object.freeze(postCreated);

    } catch (error) {
      return new Error(error + '');
    }
  };

export { buildMakePost };