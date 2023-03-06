import React from 'react';
import {
  Drawer,
  DrawerBody,
  
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {

  const {isOpen, onClose,onOpen} = useDisclosure()
  return (
    <>
      <Button
        pos={'fixed'}
      zIndex={'10'}

        top={'4'}
        left={'4'}
        colorScheme={'purple'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
  
  {/* Documentation refer kro ,isopen ,onopen etc sb clear ho jaega
  syntax likha h sb */}

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton/>
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              {/* Vyese to align ites by default centre hota h chakra me 
              but hum use change kr skte h jo kiya h */}
              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/'}>Home</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>

            <HStack
            pos={'absolute'}
            bottom={'10'}
            left={'0'}
            w={'full'}
            justifyContent={'space-evenly'}>
            <Button onClick={onClose}   colorScheme={'purple'}>
                <Link to={"/login"} >Log In</Link>
              </Button>
              <Button onClick={onClose} variant={'outline'} colorScheme={'purple'}>
                <Link to={"/signup"} >Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
        
      </Drawer>
    </>
  );
};

export default Header;
