import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  searchQuery: '',
};
export const filterReducer = createSlice({
  name: 'filter',
  initialState,
  reducer: {
    SORT_BY_PRICE: () => {},
    FILTER_BY_STOCK: () => {},
    FILTER_BY_DELIVERY: () => {},
    FILTER_BY_RATING: () => {},
    FILTER_BY_SEARCH: () => {},
    CLEAR_FILTER: () => {},
  },
});
