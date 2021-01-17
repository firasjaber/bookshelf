import React from 'react';
import {
  Image,
  Heading,
  Text,
  Box,
  useColorModeValue,
  Tooltip,
} from '@chakra-ui/react';

const BookCard = ({ book }) => {
  const {
    volumeInfo: { authors, imageLinks, title },
  } = book;
  console.log(imageLinks.thumbnail);
  const r = imageLinks.thumbnail.replace('&zoom=1', '$zoom=2');
  console.log(r);

  const bg = useColorModeValue('gray.100', 'gray.700');
  return (
    <Box w="100%" h="395px" bg={bg} rounded="md" boxShadow="base">
      <Image
        roundedTop="md"
        boxSize="300px"
        objectFit="cover"
        src={imageLinks && imageLinks.thumbnail}
        alt={title}
      />
      <Box padding="3" marginTop="0.5">
        <Tooltip label={title} aria-label="book title">
          <Heading as="h4" size="md" noOfLines="2" alt={title}>
            {title}
          </Heading>
        </Tooltip>
        <Text size="sm" noOfLines="1">
          {authors && authors[0]}
        </Text>
      </Box>
    </Box>
  );
};

export default BookCard;
