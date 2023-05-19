import { Hotel, HotelBrand } from "../components/home/hotel_list";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface HotelModalProps extends ModalProps {
  data: Hotel;
}

export interface HotelBrandModalProps extends ModalProps {
  data: HotelBrand;
}