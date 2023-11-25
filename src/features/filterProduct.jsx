import { createSlice } from '@reduxjs/toolkit';

const filterProduct = createSlice({
  name: 'filter',
  initialState: {
    sort: '',
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: '',
  },
  reducers: {
    SORT_PRICE:(state,action) => {
      state.sort = action.payload;
    },
    FILTER_BY_STOCK: (state, action) => {
      state.byStock = action.payload;
    },
    FILTER_BY_DELIVERY: (state, action) => {
      state.byFastDelivery = action.payload;
    },
    FILTER_BY_RATING: (state, action) => {
      state.byRating = action.payload;
    },
    FILTER_BY_SEARCH: (state, action) => {
      state.searchQuery = action.payload;
    },
    CLEAR_FILTER: () => ({
      sort: '',
      byStock: false,
      byFastDelivery: false,
      byRating: 0,
      searchQuery: '',
    }),
  },
});

export const { SORT_PRICE,FILTER_BY_STOCK, FILTER_BY_DELIVERY, FILTER_BY_RATING, FILTER_BY_SEARCH, CLEAR_FILTER } =
  filterProduct.actions;

export default filterProduct.reducer;
