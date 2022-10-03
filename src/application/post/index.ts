import { postsDb } from "../../interfaces/post/data-access";
import { makeAddPost } from "./add-post";
import { makeFindPost } from './find-posts';
import { makeEditPost } from './edit-post';
import { makeRemovePost } from './remove-post';

const addPost = makeAddPost({ postsDb });
const editPost = makeEditPost({ postsDb })
const findPosts = makeFindPost({ postsDb });
const deletePost = makeRemovePost({ postsDb });

const postService = Object.freeze({ addPost, editPost, findPosts, deletePost });

export { postService };