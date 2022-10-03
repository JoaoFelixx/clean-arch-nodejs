import { HttpRequest, HttpResponse, Post } from '../../../../domain/entities';

interface EditPostMethod {
  editPosts: (post: Post) => Promise<Post | Error>
}

export const makePutPost = ({ editPosts }: EditPostMethod) =>
  async (httpRequest: HttpRequest, httpResponse: HttpResponse) => {
    try {
      const { _id } = httpRequest.params as Pick<Post, '_id'>;
      const post = httpRequest.body as Post;

      const result = await editPosts({ ...post, _id });

      if (result instanceof Error)
        return httpResponse.status(400).json(result.message);

      httpResponse.status(202).json(result);

    } catch (error) {
      return httpResponse.sendStatus(400);
    }
  }