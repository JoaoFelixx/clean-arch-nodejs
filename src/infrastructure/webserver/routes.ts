import { Router } from 'express';
import { postController } from '../../interfaces/post/controllers';

const routes = Router();

routes.post('/post', postController.postPost);
routes.get('/post/:_id?', postController.getPosts);
routes.delete('/post/:_id', postController.deletePost);

export { routes };