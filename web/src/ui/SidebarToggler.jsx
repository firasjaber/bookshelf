import React, { useContext, useRef } from 'react';
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
import { Link as NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext/AuthState';

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
  const { logout } = useContext(AuthContext);
  const links = [
    { ind: 0, pathName: 'Home', pathLink: '/' },
    { ind: 1, pathName: 'Search', pathLink: '/search' },
    { ind: 2, pathName: 'My Books', pathLink: '/books' },
    { ind: 3, pathName: 'Logout', pathLink: '/' },
  ];
  return (
    <DrawerOverlay>
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <List>
            {links.map(({ ind, pathName, pathLink }) => (
              <MenuItem
                key={ind}
                pathName={pathName}
                pathLink={pathLink}
                onClose={onClose}
                logout={logout}
              />
            ))}
          </List>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  );
};

const MenuItem = ({ pathName, pathLink, onClose, logout }) => {
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
        onClick={pathName === 'Logout' ? logout : onClose}
      >
        {pathName}
      </Link>
    </ListItem>
  );
};

export default SidebarToggler;
