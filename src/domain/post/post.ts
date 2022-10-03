interface Post {
  _id: string;
  tags: string[];
  title: string;
  description: string;
}

interface CreatePost {
  validator(type: Post): { error?: string }
  makeId: () => string;
}

class PostEntity implements Partial<Post> {
  public readonly _id: string;

  constructor(
    public tags: string[],
    public title: string,
    makeId: CreatePost['makeId'],
    public description: string,
  ) {
    this._id = makeId();
  }
}

const buildMakePost = ({ validator, makeId }: CreatePost) =>
  ({ tags, title, description }: Omit<Post, '_id'>): Post | Error => {
    try {
      const postCreated = new PostEntity(
        tags, title, makeId, description
      );

      const { error } = validator(postCreated);

      if (error)
        return new Error(error);

      return Object.freeze(postCreated);

    } catch (error) {
      return new Error('Error building post');
    }
  };

export { buildMakePost };