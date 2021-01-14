import React, { useRef } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Text,
  Box,
  useDisclosure,
  List,
  Link,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BrowserRouter as NavLink } from 'react-router-dom';

function SidebarToggler() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Box mr="3">
        <AiOutlineMenu ref={btnRef} onClick={onOpen} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <Menu onClose={onClose} />
      </Drawer>
    </>
  );
}

const Menu = ({ onClose }) => {
  const links = [
    { pathName: 'Home', pathLink: '/' },
    { pathName: 'Search', pathLink: '/search' },
    { pathName: 'My Books', pathLink: '/books' },
    { pathName: 'Logout', pathLink: '/' },
  ];
  return (
    <DrawerOverlay>
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <List>
            {links.map(({ pathName, pathLink }) => (
              <MenuItem
                pathName={pathName}
                pathLink={pathLink}
                onClose={onClose}
              />
            ))}
          </List>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  );
};

const MenuItem = ({ pathName, pathLink, onClose }) => {
  const mode = useColorModeValue('dark', 'light');
  const color = mode === 'dark' ? 'gray.200' : 'gray.800';
  return (
    <ListItem
      px="4"
      py="2"
      _hover={{
        backgroundColor: color,
        transition: '0.3s ease all',
      }}
    >
      <Link
        fontWeight="500"
        width="100%"
        as={NavLink}
        to={pathLink}
        onClick={onClose}
      >
        {pathName}
      </Link>
    </ListItem>
  );
};

export default SidebarToggler;
