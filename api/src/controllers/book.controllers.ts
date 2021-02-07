import { Request, Response, NextFunction } from 'express';
import mongoose, { Error } from 'mongoose';
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
  
  try {
    const userId = res.locals.user._id;
    const books = await Book.find({addedBy: userId});
    return res.status(200).json({ success: true , books});
  } catch (error) {
    logging.error(NAMESPACE, `INTERNAL ERROR ${error.message}`, error);
    return res.status(500).json({
      message: error.message,
      success: false,
      error,
    });
  }
};

export const postBook = async (req: Request, res: Response) => {
  logging.info(NAMESPACE, 'post book route called.');
  try {
    const bookBody = req.body;
    bookBody.addedBy = res.locals.user._id;
    const exBook = await Book.findOne({
      googleId: bookBody.googleId,
      addedBy: bookBody.addedBy,
    });
    if (exBook) {
      return res.status(403).json({
        message: 'Book Already Exists in your list.',
        success: false,
      });
    }
    const book = new Book(bookBody);
    await book.save();
    return res.status(201).json({
      message: 'Book created successfully.',
      data: bookBody,
      success: true,
    });
  } catch (error) {
    logging.error(NAMESPACE, `INTERNAL ERROR ${error.message}`, error);
    return res.status(500).json({
      message: error.message,
      success: false,
      error,
    });
  }
};
