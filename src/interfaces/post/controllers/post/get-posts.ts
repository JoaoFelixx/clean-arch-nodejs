import { HttpRequest, HttpResponse, Post } from '../../../../domain/entities';

interface FindPostMethod {
  findPosts: ({ _id }: Pick<Post, '_id'>) => Promise<Post[] | Post | Error>
}

export const makeGetPost = ({ findPosts }: FindPostMethod) =>
  async (httpRequest: HttpRequest, httpResponse: HttpResponse) => {
    try {
      const { _id } = httpRequest.params as Pick<Post, '_id'>;

      const result = await findPosts({ _id });

      if (result instanceof Error)
        return httpResponse.status(400).json(result.message);

      if (!result) 
        return httpResponse.sendStatus(204);
        
      httpResponse.json(result)
    } catch (error) {
      return httpResponse.sendStatus(400);
    }
  }