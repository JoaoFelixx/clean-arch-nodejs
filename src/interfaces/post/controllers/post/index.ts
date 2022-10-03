import { postService } from '../../../../application/post';
import { makeGetPost } from './get-posts';
import { makePostPost } from './post-post';
import { makeDeletePost } from './delete-post';

const postPost = makePostPost({ addPost: postService.addPost });
const getPosts = makeGetPost({ findPosts: postService.findPosts });
const deletePost = makeDeletePost({ deletePost: postService.deletePost });

const postController = Object.freeze({
  postPost, getPosts, deletePost, 
});

export { postController };