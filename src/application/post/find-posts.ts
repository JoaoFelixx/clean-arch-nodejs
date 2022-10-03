interface ID {
  _id?: string;
}

interface Post {
  _id: string;
  tags: string[];
  title: string;
  description: string;
}

interface PostDataBase {
  get: ({ _id }: ID) => Promise<Post[] | Post | Error>;
}

interface DB {
  postsDb: PostDataBase;
}

export const makeFindPost = ({ postsDb }: DB) =>
  async ({ _id }: ID): Promise<Error | Post[] | Post> => {
    return await postsDb.get({ _id });
  };