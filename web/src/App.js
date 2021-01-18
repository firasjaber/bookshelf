import React from 'react';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';
import Header from './ui/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SearchPage from './pages/SearchPage';
import BookPage from './pages/BookPage';
import BooksPage from './pages/BooksPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import Footer from './ui/Footer';
import AuthState from './contexts/AuthContext/AuthState';
const queryClient = new QueryClient();

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  return (
    <AuthState>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Container maxW="3xl" py="2">
              <Switch>
                <Route path="/book/:bookId">
                  <Header />
                  <BookPage />
                  <Footer />
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
                  <Footer />
                </Route>
              </Switch>
            </Container>
          </Router>
        </QueryClientProvider>
      </ChakraProvider>
    </AuthState>
  );
}

export default App;
