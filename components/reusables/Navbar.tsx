import { FC } from 'react';
import { Box, Button, HStack, Icon, Text, useDisclosure } from '@chakra-ui/react';
import { HomeModernIcon } from '@heroicons/react/24/solid';
import CustomLink from './CustomLink';
import AddHotel from '../home/AddHotel';
import NavbarDrawer from '../navbar/NavbarDrawer';

const intialModalData = {
  id: '',
  img: '',
  name: '',
  address: '',
  city: '',
  country: '',
  rating: 0,
  brand: ''
}

const Navbar: FC = () => {
  const { isOpen: isAddModalOpen, onOpen: openAddModal, onClose: closeAddModal } = useDisclosure();

  return (
    <>
      <Box as='nav' borderBottom='1px solid #F7B71D' py={7} px={[5, 10, 10, 20]}>
        <Box display='flex' justifyContent='space-between' className='responsive_1440px'>
          <CustomLink href='/' color='brand.lime.700' display='inline-flex' alignItems='center' fontSize='140%' fontWeight='bold'
            _hover={{textDecor: 'none'}}
          >
            <Icon as={HomeModernIcon} />
            <Text as='h1' ml={1.5}>Hotel Ranking</Text>
          </CustomLink>

          {/* Desktop navigation */}
          <HStack spacing={8} display={['none', 'block']}>
            <CustomLink href='/brands' color='brand.lime.500'>Hotel Brands</CustomLink>
            <Button onClick={openAddModal}>Add hotel</Button>
          </HStack>

          {/* Mobile Navigation */}
          <NavbarDrawer openAddHotel={openAddModal} display={['block', 'none']} />
        </Box>
      </Box>

      <AddHotel isOpen={isAddModalOpen} onClose={closeAddModal} data={intialModalData} />
    </>
  )
}

export default Navbar;