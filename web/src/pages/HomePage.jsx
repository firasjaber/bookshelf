import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import Header from './../ui/Header';
import Footer from './../ui/Footer';

const HomePage = () => {
  const bg = useColorModeValue('gray.100', 'gray.700');
  return (
    <>
      <Header />
      <Box px="4" py="2">
        <Heading as="h2" size="lg" mb="4">
          Your Books
        </Heading>
        <SimpleGrid minChildWidth="170px" spacing="20px">
          <Box w="100%" h="395px" bg={bg} rounded="md" boxShadow="base">
            <Image
              roundedTop="md"
              boxSize="300px"
              objectFit="cover"
              src="https://books.google.com/books/content?id=trakSLk9qt0C&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api"
              alt="Gay Science"
            />
            <Box padding="3" marginTop="0.5">
              <Heading as="h4" size="md">
                The Gay Science
              </Heading>
              <Text size="sm">Friedrich Nietzshe</Text>
            </Box>
          </Box>
          <Box w="100%" h="395px" bg={bg} rounded="md" boxShadow="base">
            <Image
              roundedTop="md"
              boxSize="300px"
              objectFit="cover"
              src="https://books.google.com/books/content?id=trakSLk9qt0C&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api"
              alt="Gay Science"
            />
            <Box padding="3" marginTop="0.5">
              <Heading as="h4" size="md">
                The Gay Science
              </Heading>
              <Text size="sm">Friedrich Nietzshe</Text>
            </Box>
          </Box>{' '}
          <Box w="100%" h="395px" bg={bg} rounded="md" boxShadow="base">
            <Image
              roundedTop="md"
              boxSize="300px"
              objectFit="cover"
              src="https://books.google.com/books/content?id=trakSLk9qt0C&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api"
              alt="Gay Science"
            />
            <Box padding="3" marginTop="0.5">
              <Heading as="h4" size="md">
                The Gay Science
              </Heading>
              <Text size="sm">Friedrich Nietzshe</Text>
            </Box>
          </Box>{' '}
          <Box w="100%" h="395px" bg={bg} rounded="md" boxShadow="base">
            <Image
              roundedTop="md"
              boxSize="300px"
              objectFit="cover"
              src="https://books.google.com/books/content?id=trakSLk9qt0C&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api"
              alt="Gay Science"
            />
            <Box padding="3" marginTop="0.5">
              <Heading as="h4" size="md">
                The Gay Science
              </Heading>
              <Text size="sm">Friedrich Nietzshe</Text>
            </Box>
          </Box>{' '}
          <Box w="100%" h="395px" bg={bg} rounded="md" boxShadow="base">
            <Image
              roundedTop="md"
              boxSize="300px"
              objectFit="cover"
              src="https://books.google.com/books/content?id=trakSLk9qt0C&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api"
              alt="Gay Science"
            />
            <Box padding="3" marginTop="0.5">
              <Heading as="h4" size="md">
                The Gay Science
              </Heading>
              <Text size="sm">Friedrich Nietzshe</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
