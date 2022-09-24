interface Post {
  id: string;
  tags: string;
  title: string;
  image: string;
  description: string;
}

interface CreatePost {
  Id: {
    makeId: () => string;
  }
  validator(type: Post): { error?: string }
}

interface PostMethods {
  getId: () => string,
  getTags: () => string,
  getImage: () => string,
  getTitle: () => string,
  getDescription: () => string,
}

const buildMakePost = ({ Id, validator }: CreatePost) => ({
  id = Id.makeId(),
  tags,
  image,
  title,
  description,
}: Post): PostMethods | Error => {
  try {
    const { error } = validator({
      id, tags, image, title, description
    })

    if (error)
      throw new Error(error);

    return Object.freeze({
      getId: () => id,
      getTags: () => tags,
      getImage: () => image,
      getTitle: () => title,
      getDescription: () => description,
    });

  } catch (error) {
    return new Error(error + '');
  }
};

export { buildMakePost };