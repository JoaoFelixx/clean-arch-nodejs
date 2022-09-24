interface Post {
  id: string;
  tags: string;
  title: string;
  image: string;
  description: string;
  modifiedOn?: string;
}

interface PostMethods {
  addPost: (post: Post) => Promise<Error | Post>
}

interface HttpRequest {
  body: Post & {
    source: {
      ip: string;
      browser: string;
      referrer: string;
    }
  },
  ip: string;
  headers: {
    'user-agent'?: string;
    referer?: string;
  },
}



const makePostPost = ({ addPost }: PostMethods) => async (httpRequest: HttpRequest) => {
  try {
    const { source, ...commentInfo } = httpRequest.body;

    source.ip = httpRequest.ip;
    source.browser = httpRequest.headers['user-agent'];
    if (httpRequest.headers.referer) {
      source.referrer = httpRequest.headers.referer;
    }
    const posted = await addPost({
      ...commentInfo,
    });

    if (posted instanceof Error)
      throw new Error();

    return {
      headers: {
        'Content-Type': 'application/json',
        'Last-Modified': new Date(posted.modifiedOn).toUTCString(),
      },
      statusCode: 201,
      body: { posted },
    };

  } catch (error) {
    return {
      headers: {
        'Content-Type': 'application/json',
      },
      statusCode: 400,
      body: {
        error: error.message,
      },
    };
  }
}

export { makePostPost };