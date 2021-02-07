import { Document, SchemaTypes } from 'mongoose';

export default interface IBook extends Document {
  googleId: string;
  title: string;
  subtitle: string;
  authors: Array<number>;
  publisher: string;
  publishedDate: string;
  pageCount: number;
  categories: Array<number>;
  state: string;
  addedBy: string;
}
