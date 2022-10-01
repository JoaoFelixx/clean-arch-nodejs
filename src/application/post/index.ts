import { makeAddPost } from "./add-post";
import { postsDb } from "../../interfaces/post/data-access";

const addPost = makeAddPost({ postsDb });

const postService = Object.freeze({ addPost });

export { postService };