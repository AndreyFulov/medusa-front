import { configureStore } from '@reduxjs/toolkit';
import pageSlice from './Slices/pageSlice';
import cartSlice from './Slices/cartSlice';

export const store = configureStore({
  reducer: { page: pageSlice, cart: cartSlice },
});
