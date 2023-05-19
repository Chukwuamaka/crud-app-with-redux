import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button, ButtonGroup } from "@chakra-ui/react";
import { FC, useRef } from "react";
import { HotelModalProps } from "../../types/generics/modal";
import { useAppDispatch } from "../../redux/hooks";
import { hotelActions } from "../../redux/slices/hotel_slice";
import { hotelBrandActions } from "../../redux/slices/hotel_brand_slice";

const DeleteHotel: FC<HotelModalProps> = ({ isOpen, onClose, data }) => {
  const dispatch = useAppDispatch();
  const cancelRef = useRef(null);

  const deleteHotel = () => {
    dispatch(hotelActions.deleteHotel(data.id));
    dispatch(hotelBrandActions.removeHotelFromBrand(data.brand));
    onClose();
  }

  return (
    <AlertDialog isOpen={isOpen} isCentered leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader color='brand.lime.700' fontSize='lg' fontWeight='bold'>
            Delete Hotel
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can&apos;t undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <ButtonGroup spacing={3}>
              <Button ref={cancelRef} onClick={onClose}>Cancel</Button>
              <Button colorScheme='red' onClick={deleteHotel}>Delete</Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default DeleteHotel;