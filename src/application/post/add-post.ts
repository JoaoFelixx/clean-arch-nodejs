import { makePost } from "../../domain/post";

interface Post {
  id: string;
  tags: string;
  title: string;
  image: string;
  description: string;
}

interface PostDataBase {
  insert<T>(type: T): void;
}

interface DB {
  postsDb: PostDataBase;
}

const makeAddPost = ({ postsDb }: DB) => (postInfo: Post) => {
  const result = makePost(postInfo);

  if (result instanceof Error)
    return false;

  return postsDb.insert({
    id: result.getId(),
    tags: result.getTags(),
    image: result.getImage(),
    title: result.getTitle(),
    description: result.getDescription(),
  });
};

export { makeAddPost };