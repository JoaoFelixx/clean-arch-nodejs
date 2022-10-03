import { HttpRequest, HttpResponse, Post } from '../../../../domain/entities';

interface DeletePostMethod {
  deletePost: ({ _id }) => Promise<void | Error>
}

export const makeDeletePost = ({ deletePost }: DeletePostMethod) =>
  async (httpRequest: HttpRequest, httpResponse: HttpResponse) => {
    try {
      const { _id } = httpRequest.params as Pick<Post, '_id'>;

      const result = await deletePost({ _id });

      if (result instanceof Error)
        return httpResponse.status(400).json(result.message);

      httpResponse.sendStatus(204);

    } catch (error) {
      return httpResponse.sendStatus(400);
    }
  }