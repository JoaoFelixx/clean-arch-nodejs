import { postService } from '../../../../application/post';
import { makeGetPost } from './get-posts';
import { makePostPost } from './post-post';

const postPost = makePostPost({ addPost: postService.addPost });
const getPosts = makeGetPost({ findPosts: postService.findPosts });

const postController = Object.freeze({ 
  postPost, getPosts, 
});

export { postController };