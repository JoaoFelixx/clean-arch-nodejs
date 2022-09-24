import { makeId } from "../../infrastructure/Id";
import { validator } from "../../infrastructure/post/validator";
import { buildMakePost } from "./post";

const makePost = buildMakePost({ 
  Id: { makeId }, validator 
});

export { makePost };