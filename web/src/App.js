import React from 'react';
import { ChakraProvider, theme, Container } from '@chakra-ui/react';
import Header from './ui/Header';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="3xl" py="2">
        <Header />
        <Home />
      </Container>
    </ChakraProvider>
  );
}

export default App;
