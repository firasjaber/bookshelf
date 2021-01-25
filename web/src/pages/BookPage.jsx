import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Image,
  Spinner,
  Button,
  Text,
  Link,
} from '@chakra-ui/react';
import Header from './../ui/Header';
import Footer from './../ui/Footer';

const BookPage = () => {
  const [loading, setLoading] = useState(true);
  const [bookData, setBookData] = useState({});
  const axiosInstance = axios.create();
  delete axiosInstance.defaults.headers.authorization;
  const { bookId } = useParams();
  console.log(bookId);
  useEffect(() => {
    const getBookData = async () => {
      const URL = 'https://www.googleapis.com/books/v1/volumes/';
      const res = await axiosInstance.get(URL + bookId);
      return res.data;
    };
    getBookData().then(data => setBookData(data.volumeInfo));
    setLoading(false);
  }, []);
  if (!bookData.title) {
    return (
      <>
        <Header />
        <Flex direction="column" alignItems="center" justifyItems="center">
          <Box>
            <Spinner display="block" size="xl" mt="40px" />
          </Box>
        </Flex>
        <Footer />
      </>
    );
  }
  if (bookData)
    return (
      <>
        <Header />
        <Box p="20px">
          <Flex>
            <Box>
              <Image src={bookData?.imageLinks?.thumbnail} />
            </Box>
            <Box pl="20px">
              <Heading as="h3" size="lg">
                {bookData.title}
              </Heading>
              <Heading as="h4" size="md" opacity="0.5">
                {bookData.subtitle}
              </Heading>
              <Text mt="8px" fontWeight="600">
                By {bookData.authors && bookData?.authors[0]}
              </Text>
              <Text mt="-3px" opacity="0.5">
                Published at : {bookData?.publishedDate} , by{' '}
                {bookData?.publisher}
              </Text>
              <Text mt="-3px" opacity="0.5">
                Catagories :{' '}
                {bookData.categories &&
                  bookData.categories.map((cat, ind) => {
                    if (bookData?.categories[ind + 1]) return cat + ' ,';
                    return cat;
                  })}{' '}
              </Text>
              <Text mt="-3px" opacity="0.5">
                Paperback. {bookData.pageCount} pages.
              </Text>
              <Flex mt="10px" alignItems="center">
                <Button size="sm" mr="10px" variant="outline">
                  Add to your list
                </Button>
                <Link ml="10px" href={bookData.previewLink} isExternal>
                  <Text fontSize="sm">Preview</Text>
                </Link>
              </Flex>
            </Box>
          </Flex>
          <Box mt="20px">
            <Heading as="h4" size="sm" fontWeight="500" opacity="0.5">
              Description :
            </Heading>
            <Text mt="10px">{bookData.description}</Text>
          </Box>
        </Box>
        <Footer />
      </>
    );
};

export default BookPage;
