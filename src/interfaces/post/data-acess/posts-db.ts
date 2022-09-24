import { makeId } from '../../../infrastructure/Id';

interface Post {
  id: string;
  tags: string;
  title: string;
  image: string;
  description: string;
}

interface DataBaseMethods {
  insertOne<T> (type: T): Promise<Post>;
}

interface DataBase {
  collection:(collection: string) => DataBaseMethods;
}

interface buildConnection {
  makeDb: () => Promise<DataBase>  
}

const makePostsDb = ({ makeDb }: buildConnection) => {
  async function insert({ id: _id = makeId(), ...commentInfo }) {
    const db = await makeDb();

    const result = await db
      .collection('posts')
      .insertOne({ _id, ...commentInfo });

    return result
  }

  return Object.freeze({ insert });
};

export { makePostsDb };