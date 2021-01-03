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
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

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
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <Text>texxxt</Text>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default SidebarToggler;
