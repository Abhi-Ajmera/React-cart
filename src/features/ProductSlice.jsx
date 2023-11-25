import { createSlice } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';

faker.seed(99);

const initialState = [...Array(20)].map(() => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.url(),
  inStock: faker.helpers.arrayElement([0, 7, 3, 6, 5]),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
}));

export const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {
    SORT_BY_PRICE: (state, action) => {
      state.sort((a, b) => (action.payload === 'lowToHigh' ? a.price - b.price : b.price - a.price));
    },
    CLEAR_PRICE: () => initialState,
  },
});

export const { SORT_BY_PRICE, CLEAR_PRICE } = ProductSlice.actions;
export default ProductSlice.reducer;
