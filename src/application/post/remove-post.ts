interface ID {
  _id?: string;
}

interface PostDataBase {
  remove: ({ _id }: ID) => Promise<void | Error>;
}

interface DB {
  postsDb: PostDataBase;
}

export const makeRemovePost = ({ postsDb }: DB) =>
  async ({ _id }: ID): Promise<Error | void> => {
    return await postsDb.remove({ _id });
  };