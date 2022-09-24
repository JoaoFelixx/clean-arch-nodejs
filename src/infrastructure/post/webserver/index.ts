import express from 'express';
import { routes } from './routes';

const application = express();

application.use(express.json());
application.use(express.urlencoded({ extended: true }));

application.use(routes);

export { application };