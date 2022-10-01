import { Post } from '../../domain/entities';

type ErrorValidator = { error?: string }

export function validator(post: Post): ErrorValidator {
  return {  }
}