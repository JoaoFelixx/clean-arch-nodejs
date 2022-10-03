import { Router } from 'express';
import { postController } from '../../interfaces/post/controllers';

const routes = Router();

routes.get('/post/:_id?', postController.getPosts);
routes.post('/post', postController.postPost);
routes.put('/post/:_id', postController.editPost);
routes.delete('/post/:_id', postController.deletePost);

export { routes };