import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '../features/ProductSlice';
import cartProductReducer from '../features/cartProductSlice';
import filterReducer from '../features/filterReducer';

export const store = configureStore({
  reducer: {
    Product: ProductSlice,
    cart: cartProductReducer,
    filter: filterReducer,
  },
});
