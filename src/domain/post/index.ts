import { validator } from "../../infrastructure/post/validator";
import { buildMakePost } from "./post";

const makePost = buildMakePost({ validator });

export { makePost };