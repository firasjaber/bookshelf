import React from 'react';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import Header from './ui/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SearchPage from './pages/SearchPage';
import BookPage from './pages/BookPage';
import BooksPage from './pages/BooksPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Container maxW="3xl" py="2">
          <Switch>
            <Route path="/book/:bookid">
              <Header />
              <BookPage />
            </Route>
            <Route path="/books">
              <Header />
              <BooksPage />
            </Route>
            <Route path="/search">
              <Header />
              <SearchPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
            <Route>
              <Header />
              <HomePage path="/" />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;
