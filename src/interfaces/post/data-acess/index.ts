interface PostDataBase {
  insert<T>(type: T): void;
}

const postsDb: PostDataBase = {
  insert(type) {

  },
}

export { postsDb }