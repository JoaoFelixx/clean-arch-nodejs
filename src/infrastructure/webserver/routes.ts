import { Router } from 'express';
import { postController } from '../../interfaces/post/controllers';

const routes = Router();

routes.get('/post/:id?', postController.getPosts);
routes.post('/post', postController.postPost);

export { routes };