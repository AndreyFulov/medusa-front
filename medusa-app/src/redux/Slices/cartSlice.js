import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
        if (findItem.amount > 0) {
          findItem.amount--;
        } else {
          state.items = state.items.filter((obj) => obj.id !== action.payload.id);
        }
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
