import React, { useState } from 'react';
import axios from 'axios';
import {
  Heading,
  Text,
  Box,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  FormControl,
  SimpleGrid,
  IconButton,
  Button,
  FormErrorMessage,
  Spinner,
} from '@chakra-ui/react';
import Header from './../ui/Header';

import { BiSearchAlt } from 'react-icons/bi';
import BookCard from '../ui/BookCard';

const SearchPage = () => {
  const [bookQuery, setBookQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [moreLoading, setMoreLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const axiosInstance = axios.create();
  delete axiosInstance.defaults.headers.authorization;
  const onChange = e => setBookQuery(e.target.value);
  const submitHandler = e => {
    e.preventDefault();
    getData();
  };
  const getData = async () => {
    if (!bookQuery) {
      setSearchLoading(false);
      setErrorMessage('Please enter a valid name');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } else {
      setSearchLoading(true);
      const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
      const MAX_ITEMS = '&maxResults=9';
      try {
        const res = await axiosInstance.get(URL + bookQuery + MAX_ITEMS);
        setBooks(res.data.items);
        setTotalItems(res.data.totalItems);
        setSearchLoading(false);
      } catch (error) {
        setSearchLoading(false);
        setErrorMessage(error.message);
        setTimeout(() => {
          setErrorMessage('');
        }, 3000);
      }
    }
  };
  const getMore = async () => {
    setMoreLoading(true);
    const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    const MAX_ITEMS = '&maxResults=9';
    const START_INDEX = '&startIndex=' + books.length;
    const res = await axiosInstance.get(
      URL + bookQuery + START_INDEX + MAX_ITEMS
    );
    if (!res.data.items) {
      setHasMore(false);
    } else {
      setBooks([...books, ...res.data.items]);
    }
    setMoreLoading(false);
  };

  return (
    <>
      <Header />
      <Box px="4" py="2" textAlign="center">
        <Flex flexDirection="column" alignItems="center">
          <Heading as="h2" size="lg" mb="4" mt="20">
            Search for your next book
          </Heading>
          <Text maxW="350px" textAlign="center" mt="-7px">
            Search the world's most comprehensive index of full-text books
            provided by Google Books API.
          </Text>
          <FormControl
            as="form"
            onSubmit={submitHandler}
            width="300px"
            isInvalid={errorMessage}
          >
            <InputGroup size="lg" w="100%" maxW="380px" mt="20px">
              <Input
                type="text"
                name="bookQuery"
                placeholder="Book name..."
                value={bookQuery}
                onChange={onChange}
              />
              <InputRightElement width="4.5rem" mr="-11px">
                <IconButton
                  type="submit"
                  borderBottomLeftRadius="0"
                  borderTopLeftRadius="0"
                  size="lg"
                  fontSize="2xl"
                  aria-label="Logout"
                  colorScheme="green"
                  color="current"
                  icon={<BiSearchAlt />}
                />
              </InputRightElement>
            </InputGroup>
            {errorMessage && (
              <Text
                mt="5px"
                fontweigh="500"
                color="tomato"
                textAlign="left"
                pl="10px"
              >
                {errorMessage}
              </Text>
            )}
          </FormControl>
        </Flex>
        {searchLoading ? (
          <Spinner mt="40px" textAlign="center" size="xl" />
        ) : (
          books &&
          books.length !== 0 && (
            <Box>
              <Heading
                as="h4"
                size="sm"
                fontWeight="600"
                textAlign="left"
                mt="30px"
              >
                Search Results :
              </Heading>
              <SimpleGrid minChildWidth="170px" spacing="20px" mt="20px">
                {books &&
                  books.map(book => <BookCard key={book.id} book={book} />)}
              </SimpleGrid>
              {totalItems > books.length && hasMore && (
                <Button isLoading={moreLoading} my="20px" onClick={getMore}>
                  Show More
                </Button>
              )}
              {!hasMore && (
                <Text textAlign="center" my="20px">
                  Oops , no more results...
                </Text>
              )}
            </Box>
          )
        )}
      </Box>
    </>
  );
};

export default SearchPage;
