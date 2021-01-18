import React from 'react';
import {
  Image,
  Heading,
  Text,
  Box,
  useColorModeValue,
  Tooltip,
  Link,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { ArrowRightIcon } from '@chakra-ui/icons';

const BookCard = ({ book }) => {
  const {
    volumeInfo: { authors, imageLinks, title },
    id,
  } = book;
  const bg = useColorModeValue('gray.100', 'gray.700');
  return (
    <Box w="100%" bg={bg} rounded="md" boxShadow="base">
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
        <Link
          as={NavLink}
          to={`/book/${id}`}
          _hover={{ fontWeight: '500', textDecoration: 'underline' }}
        >
          <HStack
            pt="5px"
            alignItems="center"
            justifyContent="center"
            spacing="5px"
          >
            <Box mt="-2px" fontWeight="600">
              More
            </Box>{' '}
            <ArrowRightIcon w={3} h={3} />
          </HStack>
        </Link>
      </Box>
    </Box>
  );
};

export default BookCard;
