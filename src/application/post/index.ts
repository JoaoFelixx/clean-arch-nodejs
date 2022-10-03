import { postsDb } from "../../interfaces/post/data-access";
import { makeAddPost } from "./add-post";
import { makeFindPost } from './find-posts';
import { makeRemovePost } from './remove-post';

const addPost = makeAddPost({ postsDb });
const findPosts = makeFindPost({ postsDb });
const deletePost = makeRemovePost({ postsDb });

const postService = Object.freeze({ addPost, findPosts, deletePost });

export { postService };