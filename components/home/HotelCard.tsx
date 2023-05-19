import React, { FC } from "react";
import Image from "next/image";
import { Box, VStack, HStack, Text, Icon, Button, useDisclosure } from "@chakra-ui/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlinedStarIcon } from "@heroicons/react/24/outline";
import { HotelCardProps } from "../../types/components/home/hotel_card";
import placeholder_image from "../../public/placeholder_image.svg";
import ViewDetails from "../reusables/ViewDetails";
import AddHotel from "./AddHotel";
import DeleteHotel from "./DeleteHotel";

const HotelCard: FC<HotelCardProps> = ({ data }: HotelCardProps ) => {
  const { img, name, address, city, country, rating } = data;
  const { isOpen: isHotelDetailsOpen, onOpen: openHotelDetails, onClose: closeHotelDetails } = useDisclosure();
  const { isOpen: isEditModalOpen, onOpen: openEditModal, onClose: closeEditModal } = useDisclosure();
  const { isOpen: isDeleteDialogOpen, onOpen: openDeleteDialog, onClose: closeDeleteDialog } = useDisclosure();

  const openAddHotelModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    openEditModal();
  }

  const openDeleteHotelDialog = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    openDeleteDialog();
  }

  return (
    <>
      <VStack spacing={0} maxW="432px" bg="white" flexBasis="30%" pos="relative" boxShadow="0px 4px 50px 24px rgba(0, 0, 0, 0.08)"
        cursor='pointer' onClick={openHotelDetails}
      >
        <Box maxH="180px" fontSize={0} flexBasis="26%">
          <Image src={img ? img : placeholder_image} alt={name} width='432px' height='180px' objectFit="cover" />
        </Box>
        <VStack spacing={4} p={4} w="full" align="start" justify="space-between" flexBasis="74%">
          <Text as="h3" color="brand.lime.700" lineHeight="120%" fontWeight="extrabold" textTransform="uppercase">
            {name}
          </Text>
          <Box w="full">
            <Text noOfLines={3} color="brand.lime.700" fontSize={14} lineHeight="144%">{address}</Text>
            <HStack spacing={1.5} align="center" justify="space-between"  mt={1.5} color="rgba(35, 61, 44, 0.63)" fontSize={12}>
              <Text>{city}, {country}</Text>
              <Box>
                {[...Array(5)].map((item, index) => (
                  <Icon key={index+1} as={index+1 <= rating ? StarIcon : OutlinedStarIcon} color='brand.yellow' verticalAlign='middle' />
                ))}
              </Box>
            </HStack>
          </Box>
          <Box w="full" display='flex' justifyContent='space-between'>
            <Button variant='unstyled' color='brand.lime.500' fontSize={14} minW='max-content' h='max-content' onClick={openAddHotelModal}>
              Edit
            </Button>
            <Button variant='unstyled' color='brand.red' fontSize={14} minW='max-content' h='max-content' onClick={openDeleteHotelDialog}>
              Delete
            </Button>
          </Box>
        </VStack>
      </VStack>

      <ViewDetails data={data} isOpen={isHotelDetailsOpen} onClose={closeHotelDetails} />
      <AddHotel data={data} isOpen={isEditModalOpen} onClose={closeEditModal} />
      <DeleteHotel data={data} isOpen={isDeleteDialogOpen} onClose={closeDeleteDialog} />
    </>
  )
}

export default HotelCard;