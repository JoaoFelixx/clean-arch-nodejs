import { HttpRequest, HttpResponse, Post } from '../../../domain/entities';

interface ID {
  _id?: string;
}

interface FindPostMethod {
  findPosts: ({ _id }: ID) => Promise<Post[] | Post | Error>
}

export const makeGetPost = ({ findPosts }: FindPostMethod) =>
  async (httpRequest: HttpRequest, httpResponse: HttpResponse) => {
    try {
      const { _id } = httpRequest.params as Pick<Post, '_id'>;

      const result = await findPosts({ _id });

      if (result instanceof Error)
        return httpResponse.status(400).json(result.message);

      httpResponse.json(result)
    } catch (error) {
      return httpResponse.sendStatus(400);
    }
  }