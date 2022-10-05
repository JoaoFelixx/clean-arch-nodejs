import { Router } from 'express';
import { postController } from '../../interfaces/post/controllers';
import { makeCallBack } from '../../interfaces/post/express-callback';

const routes = Router();

routes.post('/post', makeCallBack(postController.postPost));
routes.put('/post/:_id', makeCallBack(postController.editPost));
routes.get('/post/:_id?', makeCallBack(postController.getPosts));
routes.delete('/post/:_id', makeCallBack(postController.deletePost));

export { routes };