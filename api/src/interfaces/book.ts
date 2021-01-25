import { Document } from 'mongoose';

export default interface IBook extends Document {
  title: string;
  subtitle: string;
  authors: Array<number>;
  publisher: string;
  publishedDate: string;
  pageCount: number;
  categories: Array<number>;
}
