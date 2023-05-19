import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hotel } from "../../types/components/home/hotel_list";
import { hotelBrandActions } from './hotel_brand_slice';
import store from "../store";

// [{"id":"11565","name":"Radisson Blu","hotels":[]}]
// [{"id":"15789","img":"","name":"Hilton","address":"Hilton","city":"Ilupeju","country":"Nigeria","rating":"4","brand":"none"}]
interface EditHotelPayload {
	replace_id: string;
	newData: Hotel;
}

const initialState: Hotel[] = [];

export const hotelSlice = createSlice({
  name: "hotels",
	initialState: initialState,
	reducers: {
		addHotel(state, action: PayloadAction<Hotel>) {
      return [...state, action.payload];
		},
		editHotel(state, action: PayloadAction<EditHotelPayload>) {
			const { replace_id, newData } = action.payload;
			const newList = state.map(hotel => {
				if (hotel.id === replace_id) {
					// dispatch(hotelBrandActions.updateHotelBrand({ hotel: formData, prevBrand: hotel.brand }));
					return newData;
				}
				return hotel;
			});
			return newList;
		},
		deleteHotel(state, action: PayloadAction<string>) {
			return state.filter(item => item.id !== action.payload);
		}
	}
})

export const hotelActions = hotelSlice.actions;
export default hotelSlice.reducer;