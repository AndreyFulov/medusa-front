import { configureStore } from '@reduxjs/toolkit';
import pageSlice from './Slices/pageSlice';

export const store = configureStore({
  reducer: { page: pageSlice },
});
