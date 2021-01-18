import React from 'react';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SearchPage from './pages/SearchPage';
import BookPage from './pages/BookPage';
import BooksPage from './pages/BooksPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import AuthState from './contexts/AuthContext/AuthState';
import ProtectedRoute from './pages/ProtectedRoute';
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
                <ProtectedRoute path="/book/:bookId" component={BookPage} />

                <Route path="/books" component={BooksPage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />

                <ProtectedRoute path="/" component={HomePage} />
              </Switch>
            </Container>
          </Router>
        </QueryClientProvider>
      </ChakraProvider>
    </AuthState>
  );
}

export default App;
