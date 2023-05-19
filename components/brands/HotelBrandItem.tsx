import { Tr, Td, HStack, Button, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { HotelBrand } from "../../types/components/home/hotel_list";
import AddHotelBrand from "./AddHotelBrand";
import DeleteHotelBrand from "./DeleteHotelBrand";

export interface HotelBrandItemProps {
  brand: HotelBrand;
}

const HotelBrandItem: FC<HotelBrandItemProps> = ({ brand }) => {
  const { isOpen: isEditModalOpen, onOpen: openEditModal, onClose: closeEditModal } = useDisclosure();
  const { isOpen: isDeleteDialogOpen, onOpen: openDeleteDialog, onClose: closeDeleteDialog } = useDisclosure();

  return (
    <>
      <Tr>
        <Td color='brand.gray.400' fontWeight='medium' borderBottom='0.5px solid #BABABA' borderColor='brand.gray.100'>{brand.name}</Td>
        <Td color='brand.gray.400' fontWeight='medium' borderBottom='0.5px solid #BABABA' borderColor='brand.gray.100'>{brand.id}</Td>
        <Td color='brand.gray.400' fontWeight='medium' borderBottom='0.5px solid #BABABA' borderColor='brand.gray.100'>{brand.hotels.length}</Td>
        <Td color='brand.gray.400' fontWeight='medium' borderBottom='0.5px solid #BABABA' borderColor='brand.gray.100'>
          <HStack spacing={3.5}>
            <Button variant='unstyled' color='brand.lime.500' fontSize={14} minW='max-content' h='max-content' onClick={openEditModal}>
              Edit
            </Button>
            <Button variant='unstyled' color='brand.red' fontSize={14} minW='max-content' h='max-content' onClick={openDeleteDialog}>
              Delete
            </Button>  
          </HStack>  
        </Td>
      </Tr>
      <AddHotelBrand data={brand} isOpen={isEditModalOpen} onClose={closeEditModal} />
      <DeleteHotelBrand data={brand} isOpen={isDeleteDialogOpen} onClose={closeDeleteDialog} />
    </>
  )
}

export default HotelBrandItem;