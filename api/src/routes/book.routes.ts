import express from 'express';
import auth from '../middleware/auth';
import { getAllBooks } from './../controllers/book.controllers';

const router = express.Router();

router.get('/get/all', getAllBooks);

export = router;
