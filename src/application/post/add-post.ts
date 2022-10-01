import { Post } from '../../domain/entities';
import { makePost } from "../../domain/post";

interface PostDataBase {
  insert: (post: Post) => Promise<Post | Error>;
}

interface DB {
  postsDb: PostDataBase;
}

const makeAddPost = ({ postsDb }: DB) => async (postInfo: Post): Promise<Error | Post> => {
  const result = makePost(postInfo);

  if (result instanceof Error)
    return new Error('Error creating Post');

  return await postsDb.insert(result);
};

export { makeAddPost };