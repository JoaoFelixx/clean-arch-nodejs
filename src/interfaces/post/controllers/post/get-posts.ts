import { HttpRequest, HttpResponse, Post } from '../../../../domain/entities';

interface ID {
  id?: string;
}

interface FindPostMethod {
  findPosts: ({ _id }: Pick<Post, '_id'>) => Promise<Post[] | Post | Error>
}

export const makeGetPost = ({ findPosts }: FindPostMethod) =>
  async (httpRequest: HttpRequest, httpResponse: HttpResponse) => {
    try {
      const { id } = httpRequest.params as ID;

      const result = await findPosts({ _id: id });

      if (result instanceof Error)
        return httpResponse.status(400).json(result.message);

      httpResponse.json(result)
    } catch (error) {
      return httpResponse.sendStatus(400);
    }
  }