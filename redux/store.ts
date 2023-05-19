import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./slices/hotel_slice";
import hotelBrandReducer from "./slices/hotel_brand_slice";

const store = configureStore({
  reducer: {
    hotels: hotelReducer,
    hotel_brands: hotelBrandReducer,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;