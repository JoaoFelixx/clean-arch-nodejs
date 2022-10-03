import { randomUUID as makeId } from 'crypto';
import { validator } from "../../infrastructure/post/validator";
import { buildMakePost } from "./post";

const makePost = buildMakePost({ validator, makeId });

export { makePost };