import { randomUUID as makeId } from 'crypto';
import { validator } from "../../infrastructure/post/validator";
import { buildMakePost, buildMakeEdit } from "./post";

const makeEdit = buildMakeEdit({ validator });
const makePost = buildMakePost({ validator, makeId });

export { makePost, makeEdit };