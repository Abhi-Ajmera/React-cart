import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '../features/ProductSlice';
import cartProductReducer from '../features/cartProductSlice';
import filterProduct from '../features/filterProduct';

export const store = configureStore({
  reducer: {
    Product: ProductSlice,
    cart: cartProductReducer,
    filter: filterProduct,
  },
});
