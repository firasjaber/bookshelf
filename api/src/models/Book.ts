import { Schema, model, SchemaTypes } from 'mongoose';
import IBook from './../interfaces/book';

const BookSchema: Schema = new Schema(
  {
    googleId: {
      type: String,
      required: true,
      index: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    authors: {
      type: Array,
      required: false,
    },
    publisher: {
      type: String,
      required: false,
    },
    publishedDate: {
      type: String,
      required: false,
    },
    pageCount: {
      type: Number,
      required: false,
    },
    categories: {
      type: Array,
      required: false,
    },
    addedBy: {
      type: SchemaTypes.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IBook>('Book', BookSchema);
