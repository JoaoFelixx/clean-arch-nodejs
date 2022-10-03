import { Post } from '../../../domain/entities';
import { Model } from 'mongoose';

interface BuildConnection {
  makeDb: () => Model<Post>;
}

const makePostsDb = ({ makeDb }: BuildConnection) => {
  const db = makeDb();

  async function insert({ _id, ...post }): Promise<Post | Error> {
    try {
      const result = await db.create({ _id, ...post })

      return result;

    } catch (error) {
      return new Error('Error creating Post');
    }
  }

  async function get({ _id }: Partial<Pick<Post, '_id'>>): Promise<Post[] | Post | Error> {
    try {
      if (!_id) {
        const posts = await db.find<Post>();

        return posts;
      }

      const post = await db.findOne<Post>({ _id });

      return post;
    } catch (error) {
      return new Error('Error getting posts');
    }
  }

  async function edit({ _id, ...post }: Post): Promise<Post | Error> {
    try {
      const oldPost = await db.findOne({ _id })

      const newPost = Object.assign(oldPost, post);

      await newPost.save();

      return newPost;

    } catch (error) {
      return new Error('Error editing post');
    }
  }

  async function remove({ _id }: Pick<Post, '_id'>): Promise<void | Error> {
    try {
      await db.deleteOne({ _id });
    } catch (error) {
      return new Error('Error removing Post')
    }
  }

  return Object.freeze({ get, edit, insert, remove });
};

export { makePostsDb };