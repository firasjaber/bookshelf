import React from 'react';
import {
  Heading,
  Text,
  Box,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { BiSearchAlt } from 'react-icons/bi';

const SearchPage = () => {
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
        <InputGroup size="lg" maxW="380px" mt="20px">
          <Input type="bookSearch" placeholder="Book name..." />
          <InputRightElement width="4.5rem" mr="-11px">
            <IconButton
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
      </Flex>
    </Box>
  );
};

export default SearchPage;
