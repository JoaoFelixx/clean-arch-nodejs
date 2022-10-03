interface Post {
  _id: string;
  tags: string[];
  title: string;
  description: string;
}

interface BuildMethods {
  validator(type: Post): { error?: string }
  makeId: () => string;
}

class PostEntity implements Partial<Post> {
  public readonly _id: string;

  constructor(
    public tags: string[],
    public title: string,
    makeId: BuildMethods['makeId'],
    public description: string,
  ) {
    this._id = makeId();
  }
}

const buildMakePost = ({ validator, makeId }: BuildMethods) =>
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

const buildMakeEdit = ({ validator }: Pick<BuildMethods, 'validator'>) =>
  (post: Post): Post | Error => {
    try {
      const { error } = validator(post);

      if (error)
        return new Error(error);

      return Object.freeze(post);

    } catch (error) {
      return new Error('Error editing post');
    }
  }

export { buildMakeEdit, buildMakePost };