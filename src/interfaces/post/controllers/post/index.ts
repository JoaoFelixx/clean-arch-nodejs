import { postService } from '../../../../application/post';
import { makeGetPost } from './get-posts';
import { makePutPost } from './put-post';
import { makePostPost } from './post-post';
import { makeDeletePost } from './delete-post';

const editPost = makePutPost({ editPosts: postService.editPost });
const getPosts = makeGetPost({ findPosts: postService.findPosts });
const postPost = makePostPost({ addPost: postService.addPost });
const deletePost = makeDeletePost({ deletePost: postService.deletePost });

const postController = Object.freeze({
  editPost, postPost, getPosts, deletePost,
});

export { postController };