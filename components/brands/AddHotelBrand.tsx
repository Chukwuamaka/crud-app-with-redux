import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, Button } from "@chakra-ui/react";
import { FC, useState } from "react";
import { HotelBrand } from "../../types/components/home/hotel_list";
import { HotelBrandModalProps } from "../../types/generics/modal";
import { generateUniqueId } from "../../utils";
import TextInput from "../reusables/TextInput";
import { useAppDispatch } from "../../redux/hooks";
import { hotelBrandActions } from "../../redux/slices/hotel_brand_slice";

const AddHotelBrand: FC<HotelBrandModalProps> = ({ isOpen, onClose, data }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<HotelBrand>(data);

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const clearFormData = () => {
    setFormData(data);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (data.id) {
      dispatch(hotelBrandActions.editHotelBrand({ newData: formData, replace_id: data.id }))
    } else {
      const newHotelBrand = { ...formData, id: generateUniqueId(), hotels: [] };
      dispatch(hotelBrandActions.addHotelBrand(newHotelBrand));
    }

    clearFormData();
    onClose();
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered scrollBehavior='inside'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader px={5} pt={6} pb={0}>Add/Edit Hotel Brand</ModalHeader>
        <ModalCloseButton mt={3} />
        <ModalBody px={7} pt='45px' pb={5}>
          <form onSubmit={handleSubmit}>
            <VStack spacing={8} align='center'>
              <TextInput required={true} id="name" value={formData.name} label="Name of Brand" changeHandler={handleChange} />
              <Button type='submit' px={12} fontSize={14} fontWeight='normal'>Save</Button>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AddHotelBrand;