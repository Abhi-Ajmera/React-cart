import { createSlice } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';

faker.seed(99);

const initialState = [...Array(20)].map(() => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.url(),
  inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
}));

export const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {},
});

export default ProductSlice.reducer;
