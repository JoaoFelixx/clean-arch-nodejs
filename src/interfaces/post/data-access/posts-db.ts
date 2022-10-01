import { Post } from '../../../domain/entities';
import { Model } from 'mongoose';

interface BuildConnection {
  makeDb: (model: 'posts') => Model<Post>;
}

const makePostsDb = ({ makeDb }: BuildConnection) => {
  const db = makeDb('posts');

  async function insert({ _id, ...post }): Promise<Post | Error> {
    try {
      const result = await db.create({ _id, ...post })

      return result;

    } catch (error) {
      console.log(error)
      return new Error('Error creating Post');
    }
  }

  async function remove({ _id }: Pick<Post, '_id'>) {
    try {
      await db.deleteOne({ _id });

      return true;
    } catch (error) {
      return new Error('Error removing Post')
    }
  }

  return Object.freeze({ insert, remove });
};

export { makePostsDb };