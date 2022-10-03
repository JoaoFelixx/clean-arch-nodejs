import { Post } from "../../domain/entities";
import { model } from "mongoose";
import '../database/schemas/Post';

const Posts = model<Post>('posts');

const makeDb = () => Posts;

export { makeDb }