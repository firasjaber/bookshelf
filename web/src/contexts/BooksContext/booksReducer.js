import { GET_BOOKS, POST_BOOK, BOOKS_ERROR, CLEAR_BOOKS_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case BOOKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_BOOKS_ERROR:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};
