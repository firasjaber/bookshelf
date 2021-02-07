import express from 'express';
import { isRegularExpressionLiteral } from 'typescript';
import auth from '../middleware/auth';
import { getAllBooks, postBook } from './../controllers/book.controllers';

const router = express.Router();

router.get('/',auth, getAllBooks);
router.post('/', auth, postBook);

export = router;
