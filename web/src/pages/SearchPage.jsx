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
} from '@chakra-ui/react';
import { BiSearchAlt } from 'react-icons/bi';
import BookCard from '../ui/BookCard';

const SearchPage = () => {
  const [bookQuery, setBookQuery] = useState('');
  const [books, setBooks] = useState([]);
  const onChange = e => setBookQuery(e.target.value);
  const submitHandler = e => {
    e.preventDefault();
    getData();
  };
  const getData = async () => {
    const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    const res = await axios.get(URL + bookQuery);
    setBooks(res.data.items);
    console.log(res);
  };
  return (
    <Box px="4" py="2" textAlign="center">
      <Flex flexDirection="column" alignItems="center">
        <Heading as="h2" size="lg" mb="4" mt="20">
          Search for your next book
        </Heading>
        <Text maxW="350px" textAlign="center" mt="-7px">
          Search the world's most comprehensive index of full-text books
          provided by Google Books API.
        </Text>
        <FormControl as="form" onSubmit={submitHandler} width="300px">
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
        </FormControl>
      </Flex>
      <SimpleGrid minChildWidth="170px" spacing="20px">
        {books &&
          books.map(book => {
            console.log(book.authors);
            const { title, authors, imageLinks } = book;
            return (
              <BookCard
                title={title}
                authorName={authors}
                srcImage={imageLinks.tumbnail}
              />
            );
          })}
      </SimpleGrid>
    </Box>
  );
};

export default SearchPage;
