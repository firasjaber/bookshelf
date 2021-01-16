import React from 'react';
import { Image, Heading, Text, Box, useColorModeValue } from '@chakra-ui/react';

const BookCard = ({ title, authorName, srcImage }) => {
  const bg = useColorModeValue('gray.100', 'gray.700');
  return (
    <Box w="100%" h="395px" bg={bg} rounded="md" boxShadow="base">
      <Image
        roundedTop="md"
        boxSize="300px"
        objectFit="cover"
        src={srcImage}
        alt={title}
      />
      <Box padding="3" marginTop="0.5">
        <Heading as="h4" size="md">
          {title}
        </Heading>
        <Text size="sm">{authorName}</Text>
      </Box>
    </Box>
  );
};

export default BookCard;
