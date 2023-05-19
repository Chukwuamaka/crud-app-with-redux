import { Box, BoxProps, Button, Flex, Input, Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr, Text, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import useSearch from "../../hooks/useSearch";
import { HotelBrand } from "../../types/components/home/hotel_list";
import AddHotelBrand from "./AddHotelBrand";
import HotelBrandItem from "./HotelBrandItem";
import { useAppSelector } from "../../redux/hooks";

const initialModalData: HotelBrand = {
  id: '',
  name: '',
  hotels: []
}

const BrandsList: FC<Pick<BoxProps, 'className'>> = ({ ...props }) => {
  const hotelBrands = useAppSelector(state => state.hotel_brands);
  const { searchQuery, updateSearchQuery } = useSearch();
  const { isOpen: isAddModalOpen, onOpen: openAddModal, onClose: closeAddModal } = useDisclosure();

  return (
    <Box bg='white' py={9} px={{base: 4, md: '30px'}} mt={9} borderRadius={10} boxShadow='0px 2px 15px rgba(0, 0, 0, 0.02)' {...props}>
      <Flex justify='space-between' mb={8}>
        <Input type='search' placeholder='Search hotel brand' maxW='40%' onChange={(e) => updateSearchQuery(e.target.value)} />
        <Button variant='outline' fontSize={14} fontWeight='normal' onClick={openAddModal}>Add Brand</Button>
      </Flex>
      {hotelBrands.length === 0 ? 
        <Text color='brand.gray.400' fontWeight='medium' textAlign='center'>
          You have not added any hotel brands to your directory yet. Add a brand to see it here
        </Text>
      :
        <TableContainer>
          <Table>
            <TableCaption className='sr-only'>List of Hotel Brands</TableCaption>
            <Thead>
              <Tr>
                <Th color='brand.gray.300' borderColor='brand.gray.100' borderY='0.5px solid #BABABA' fontSize={14} fontWeight='normal' textTransform='none'>Brand Name</Th>
                <Th color='brand.gray.300' borderColor='brand.gray.100' borderY='0.5px solid #BABABA' fontSize={14} fontWeight='normal' textTransform='none'>ID</Th>
                <Th color='brand.gray.300' borderColor='brand.gray.100' borderY='0.5px solid #BABABA' fontSize={14} fontWeight='normal' textTransform='none'>No. of Hotels</Th>
                <Th color='brand.gray.300' borderColor='brand.gray.100' borderY='0.5px solid #BABABA' fontSize={14} fontWeight='normal' textTransform='none'>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {hotelBrands.filter(brand => brand.name.toLowerCase().includes(searchQuery.toLowerCase()))
              .map(brand => (
                <HotelBrandItem key={brand.id} brand={brand} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      }

      <AddHotelBrand data={initialModalData} isOpen={isAddModalOpen} onClose={closeAddModal} />
    </Box>
  )
}

export default BrandsList;