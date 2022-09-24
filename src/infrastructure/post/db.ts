interface Post {
  id: string;
  tags: string;
  title: string;
  image: string;
  description: string;
}

interface DataBaseMethods {
  insertOne: (post: Post) => Promise<Post>;
}

interface DataBase {
  collection: (collection: string) => DataBaseMethods;
}

const OptionsDataBase: DataBase = {
  collection(collection) {
    return {
      async insertOne(post) {
        return post
      },
    }
  },
}

const makeDb = async () => await OptionsDataBase;

export { makeDb }