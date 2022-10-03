import { Post } from '../../domain/entities';

type ErrorValidator = { error?: string }

export function validator(post: Post): ErrorValidator {
  const keys = Object.keys(post);

  const invalidProperties = keys
    .filter(key => !post[key])
    .map(key => `${key} is invalid`);

  return {
    error: invalidProperties ? invalidProperties.join(', ') : undefined
  }
}