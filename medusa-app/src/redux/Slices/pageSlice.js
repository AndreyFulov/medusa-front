import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    changeActivePage: (state, action) => {
      state.page = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeActivePage } = pageSlice.actions;

export default pageSlice.reducer;
