import { HttpRequest, HttpResponse, Post } from '../../../../domain/entities';

interface CreatePostMethod {
  addPost: (post: Post) => Promise<Error | Post>
}

export const makePostPost = ({ addPost }: CreatePostMethod) =>
  async (httpRequest: HttpRequest, httpResponse: HttpResponse) => {
    try {
      const post = httpRequest.body as Post;

      const result = await addPost(post);

      if (result instanceof Error)
        return httpResponse.status(400).json(result.message);

      httpResponse.status(201).json(result);

    } catch (error) {
      return httpResponse.sendStatus(400);
    }
  }