interface Post {
  id: string;
  tags: string;
  title: string;
  image: string;
  description: string;
}

export function validator(post: Post): { error?: string } {
  return { error: 'Erro' }
}