import { makePost } from "../../domain/post";

interface Post {
  id: string;
  tags: string;
  title: string;
  image: string;
  description: string;
}

interface PostDataBase {
  insert: (post: Post) => Promise<Post>;
}

interface DB {
  postsDb: PostDataBase;
}

const makeAddPost = ({ postsDb }: DB) => async (postInfo: Post): Promise<Error | Post> => {
  const result = makePost(postInfo);

  if (result instanceof Error)
    return new Error('Error creating Post');

  return postsDb.insert({
    id: result.getId(),
    tags: result.getTags(),
    image: result.getImage(),
    title: result.getTitle(),
    description: result.getDescription(),
  });
};

export { makeAddPost };