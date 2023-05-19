import { AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Button, ButtonGroup } from "@chakra-ui/react";
import { FC, useRef } from "react";
import { HotelBrandModalProps } from "../../types/generics/modal";
import { useAppDispatch } from "../../redux/hooks";
import { hotelBrandActions } from "../../redux/slices/hotel_brand_slice";

const DeleteHotelBrand: FC<HotelBrandModalProps> = ({ isOpen, onClose, data }) => {
  const dispatch = useAppDispatch();
  const cancelRef = useRef(null);

  const deleteHotelBrand = () => {
    dispatch(hotelBrandActions.deleteHotelBrand(data.id))
    onClose();
  }

  return (
    <AlertDialog isOpen={isOpen} isCentered leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader color='brand.lime.700' fontSize='lg' fontWeight='bold'>
            Delete Hotel Brand
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can&apos;t undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <ButtonGroup spacing={3}>
              <Button ref={cancelRef} onClick={onClose}>Cancel</Button>
              <Button colorScheme='red' onClick={deleteHotelBrand}>Delete</Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default DeleteHotelBrand;