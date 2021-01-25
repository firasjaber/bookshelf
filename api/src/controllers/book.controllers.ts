import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Book from '../models/Book';
import IBook from '../interfaces/book';
import logging from './../config/logging';

const NAMESPACE = ' Items Controllers';

export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logging.info(NAMESPACE, 'get all items route called.');
  return res.status(200).json({ success: true });
};
