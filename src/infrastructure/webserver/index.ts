import 'dotenv/config';
import '../database';
import cors from 'cors';
import express from 'express';
import { routes } from './routes';

const application = express();

application.use(cors());
application.use(express.json());
application.use(express.urlencoded({ extended: true }));

application.use(routes);

export { application };