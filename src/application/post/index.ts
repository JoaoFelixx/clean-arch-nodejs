import { makeAddPost } from "./add-post";
import { makeFindPost } from './find-posts';
import { postsDb } from "../../interfaces/post/data-access";

const addPost = makeAddPost({ postsDb });
const findPosts = makeFindPost({ postsDb });

const postService = Object.freeze({ addPost, findPosts });

export { postService };