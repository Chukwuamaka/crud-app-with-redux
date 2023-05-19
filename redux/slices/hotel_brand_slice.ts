import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Hotel, HotelBrand } from "../../types/components/home/hotel_list";

interface UpdateHotelBrandPayload {
	hotel: Hotel;
	prevBrand: string;
}

interface EditHotelBrandPayload {
	newData: HotelBrand;
	replace_id: string;
}

const initialState: HotelBrand[] = [];

export const hotelBrandSlice = createSlice({
  name: "hotel_brands",
	initialState: initialState,
	reducers: {
		addHotelBrand(state, action: PayloadAction<HotelBrand>) {
      return [...state, action.payload];
		},

		editHotelBrand(state, action: PayloadAction<EditHotelBrandPayload>) {
			const { replace_id, newData } = action.payload;
			const newList = state.map(item => {
				if (item.id === replace_id) {
					return newData;
				}
				return item;
			});
			return newList;
		},

		addHotelToBrand(state, action: PayloadAction<Hotel>) {
			const newList = state.map(brand => {
				// Add a hotel to a brand
				if (brand.id === action.payload.brand) {
					return { ...brand, hotels: [...brand.hotels, action.payload] }
				}
				return brand;
			})
			return newList;
		},

		removeHotelFromBrand(state, action: PayloadAction<string>) {
			const newList = state.map(brand => {
				// Remove a hotel from a brand
				if (brand.id === action.payload) {
					return { ...brand, hotels: brand.hotels.filter(item => item.brand !== action.payload) }
				}
				return brand;
			})
			return newList;
		},

		updateHotelBrands(state, action: PayloadAction<UpdateHotelBrandPayload>) {
			const { hotel, prevBrand } = action.payload;
			const newList = state.map(brand => {
				// Change the brand of a pre-existing hotel by performing both a removal and an addition operation
				if (brand.id === prevBrand) {
					return { ...brand, hotels: brand.hotels.filter(item => item.brand !== prevBrand) }
					// return { ...brand, hotels: brand.hotels.filter(item => item.brand !== prevBrand) }
				}
				if (brand.id === hotel.brand) {
					return { ...brand, hotels: [...brand.hotels, hotel] };
				}
				return brand;
			})
			return newList;
		},

		deleteHotelBrand(state, action: PayloadAction<string>) {
			return state.filter(item => item.id !== action.payload);
		}
	}
})

export const hotelBrandActions = hotelBrandSlice.actions;
export default hotelBrandSlice.reducer;