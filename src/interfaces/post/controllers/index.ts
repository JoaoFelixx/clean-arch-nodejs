import { postService } from '../../../application/post';
import { makePostPost } from './post-post';

const postPost = makePostPost({ addPost: postService.addPost });

const postController = Object.freeze({ postPost });

export { postController };