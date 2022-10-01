import { Post } from "../../domain/entities";
import { model } from "mongoose";
import '../database/schemas/Post';

const Posts = model<Post>('posts');

type Models = 'posts';

const makeDb = (modelSelected: Models) => ({
  'posts': Posts,
}[modelSelected])

export { makeDb }