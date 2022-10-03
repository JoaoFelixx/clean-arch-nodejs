export interface Post {
  _id: string;
  tags: string[];
  title: string;
  description: string;
}

export interface HttpResponse {
  status: (status: number) => {
    json(data: any)
  }
  json(data: any);
  sendStatus(status: number);
}

export interface HttpRequest {
  ip: string;
  body: unknown;
  params: unknown;
  headers: {
    'user-agent'?: string;
    referer?: string;
  },
}