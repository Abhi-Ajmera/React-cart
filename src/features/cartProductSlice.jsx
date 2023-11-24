import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

export const cartProductSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_TO_CART: () => {},
    REMOVE_FROM_CART: () => {},
    CHANGE_CART_QTY: () => {},
  },
});

export const { ADD_TO_CART, REMOVE_FROM_CART, CHANGE_CART_QTY } = cartProductSlice.actions;
export default cartProductSlice.reducer;
