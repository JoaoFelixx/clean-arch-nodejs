import { Post } from '../../../domain/entities';
import { model, Schema } from 'mongoose';

const Posts = new Schema<Post>({
  _id: {
    type: String,
    required: true,
  },
  tags: [{
    type: String,
    required: true,

  }],
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
}, { timestamps: true })

model<Post>('posts', Posts);