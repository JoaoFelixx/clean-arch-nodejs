import { makeDb } from '../../../infrastructure/post/db';
import { makePostsDb } from './posts-db';

const postsDb = makePostsDb({ makeDb });

export { postsDb };