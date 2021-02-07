import React, {useContext, useEffect} from 'react';
import Header from './../ui/Header';
import Footer from './../ui/Footer';
import {BooksContext} from './../contexts/BooksContext/BooksState';

const BooksPage = () => {
  const { getAllBooks } = useContext(BooksContext);
  useEffect(() => {
    getAllBooks();
  }, [])
  return (
    <>
      <Header />
      <div>my books </div>
      <Footer />
    </>
  );
};

export default BooksPage;
