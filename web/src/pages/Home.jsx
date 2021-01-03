import React from 'react';
import { Box, Text, Heading, Grid, SimpleGrid } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box px="4" py="2">
      <Heading as="h2" size="lg" mb="4">
        Your Books
      </Heading>
      <SimpleGrid minChildWidth="170px" spacing="20px">
        <Box w="100%" h="400px" bg="blue.500" />
        <Box w="100%" h="400px" bg="blue.500" />
        <Box w="100%" h="400px" bg="blue.500" />
        <Box w="100%" h="400px" bg="blue.500" />
        <Box w="100%" h="400px" bg="blue.500" />
      </SimpleGrid>
    </Box>
  );
};

export default Home;
