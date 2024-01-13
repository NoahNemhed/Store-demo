import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from '../features/productsSlice';
import { searchReducer } from '../features/searchSlice';

const store = configureStore({
  reducer: {
    products: productsReducer, // use .reducer to get the reducer from the slice
    search: searchReducer,
  },
});

export default store;