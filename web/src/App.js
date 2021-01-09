import React from 'react';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import Header from './ui/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="3xl" py="2">
        <Header />
        <Router>
          <Switch>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route>
              <HomePage path="/" />
            </Route>
          </Switch>
        </Router>
      </Container>
    </ChakraProvider>
  );
}

export default App;
