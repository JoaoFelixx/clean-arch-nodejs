interface Post {
  _id: string;
  tags: string[];
  title: string;
  description: string;
}

interface PostMethods {
  addPost: (post: Post) => Promise<Error | Post>
}

interface HttpResponse {
  status: (status: number) => {
    json(data: any)
  }
  json(data: any);
  sendStatus(status: number);
}

interface HttpRequest {
  body: unknown;
  ip: string;
  headers: {
    'user-agent'?: string;
    referer?: string;
  },
}

const makePostPost = ({ addPost }: PostMethods) =>
  async (httpRequest: HttpRequest, httpResponse: HttpResponse) => {
    try { 
      const post = httpRequest.body as Post;

      const result = await addPost(post);

      if (result instanceof Error) {
        throw new Error(result.message);
      }

      return httpResponse.status(201).json(result);

    } catch (error) {
      return httpResponse.sendStatus(400);
    }
  }

export { makePostPost };