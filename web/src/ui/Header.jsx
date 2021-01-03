import React from 'react';
import { Box, Text, Flex, Heading, IconButton } from '@chakra-ui/react';
import SidebarToggler from './SidebarToggler';
import { FiLogOut } from 'react-icons/fi';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Header = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
    >
      <Flex align="center" mr={5}>
        <SidebarToggler />
        <Heading as="h3" size="md" letterSpacing={'-.1rem'}>
          BookShelf
        </Heading>
      </Flex>

      <Flex alignItems="center">
        <Heading size="sm" mr="2">
          Firas
        </Heading>
        <IconButton
          size="md"
          fontSize="md"
          aria-label="Logout"
          variant="ghost"
          color="current"
          icon={<FiLogOut />}
        />
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
};

export default Header;
