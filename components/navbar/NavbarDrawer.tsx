import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Icon, useDisclosure, VStack } from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import CustomLink from '../reusables/CustomLink';
import { NavbarDrawerProps } from '../../types/components/reusables/navbar';

const NavbarDrawer: FC<NavbarDrawerProps> = ({ openAddHotel, ...props}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const hamburgerRef = useRef<SVGSVGElement>(null);

  const handleAddHotel = () => {
    onClose();
    openAddHotel();
  }

  return (
    <Box {...props}>
      <Icon as={Bars3Icon} color='brand.lime.700' fontSize='200%' display={{lg: 'none'}}
        _hover={{bgColor: 'brand.lime.50'}} ref={hamburgerRef}
        onClick={onOpen}
      />

      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={hamburgerRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton as={XMarkIcon} color='brand.lime.700' _hover={{bgColor: 'brand.lime.50'}} />
          <DrawerBody px={9} pb={9} pt='75px'>
            <VStack spacing={10} align='start'>
              <CustomLink href='/brands' color='brand.lime.500'>Hotel Brands</CustomLink>
              <Button w='full' onClick={handleAddHotel}>Add hotel</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default NavbarDrawer;