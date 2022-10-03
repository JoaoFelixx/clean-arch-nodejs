import { Post } from '../../domain/entities';
import { makeEdit } from '../../domain/post';

interface PostDataBase {
  edit: (post: Post) => Promise<Post | Error>
}

interface DB {
  postsDb: PostDataBase;
}

const makeEditPost = ({ postsDb }: DB) => async (post: Post): Promise<Error | Post> => {
  try {
    const result = makeEdit(post);

    if (result instanceof Error)
      return new Error('Error editing post');

    return await postsDb.edit(result);
    
  } catch (error) {
    return new Error('Error building edit post');
  }
}

export { makeEditPost }