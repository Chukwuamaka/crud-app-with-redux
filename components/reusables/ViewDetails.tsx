import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, List, ListItem, Text } from "@chakra-ui/react";
import { FC } from "react";
import { HotelModalProps } from "../../types/generics/modal";

const ViewDetails: FC<HotelModalProps> = ({ isOpen, onClose, data }) => {
  const { name, img, ...otherDetails } = data;

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered scrollBehavior='inside'>
      <ModalOverlay />
      <ModalContent maxW='471px'>
        <ModalHeader px='30px' pt='30px' pb={3}>
          {name}
        </ModalHeader>
        <ModalCloseButton mt={4} />
        <ModalBody px='30px' pt={3} pb='30px'>
          <List spacing={6}>
            {Object.entries(otherDetails).map(([key, value]) => (
              <ListItem key={key} px={3} py={2} borderRadius={8} border='0.5px solid #BABABA'>
                <Text color='brand.gray.300' fontSize={12} letterSpacing={0.4} textTransform='capitalize'>
                  {key.replace(/_/g, ' ')}
                </Text>
                <Text color='brand.gray.400' fontWeight='medium' mt={3} textTransform='capitalize'>
                  {value}
                </Text>
              </ListItem>
            ))}
          </List>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ViewDetails;