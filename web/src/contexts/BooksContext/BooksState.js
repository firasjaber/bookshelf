import React, { useReducer } from 'react';
import { createContext } from 'react';
import booksReducer from './booksReducer';
import axios from 'axios';
import { API_URL } from './../../configs/config';
import { BOOKS_ERROR, CLEAR_BOOKS_ERROR, GET_BOOKS, POST_BOOK } from '../types';

export const BooksContext = createContext();

const BooksState = props => {
  const initialState = {
    books: [],
    loading: false,
    error: '',
  };

  const [state, dispatch] = useReducer(booksReducer, initialState);

  // get all books
  const getAllBooks = async () => {
    try {
      const URL = API_URL + '/books/';
      const res = await axios.get(URL);
      console.log(res.data.books)
      dispatch({
        type: GET_BOOKS,
        payload: res.data.books,
      });
    } catch (error) {
      dispatch({
        type: BOOKS_ERROR,
        payload: error.response.data.message,
      });
    }
  };
  const postBook = async book => {
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    try {
      const URL = API_URL + '/books/';
      const res = await axios.post(URL, book, config);
      dispatch({
        type: POST_BOOK,
        payload: res.data.data
      })
      //DISPATCH
    } catch (error) {
      console.log(error)
      dispatch({
        type: BOOKS_ERROR,
        payload: error.response.data.message
      })
    }
  };

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_BOOKS_ERROR });

  return (
    <BooksContext.Provider
      value={{
        books: state.books,
        loading: state.loading,
        error: state.error,
        clearErrors,
        getAllBooks,
        postBook,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksState;
