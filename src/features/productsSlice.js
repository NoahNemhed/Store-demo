import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// https://jsonplaceholder.typicode.com/users 
// Async action using createAsyncThunk
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  const products = data.products
  return products;
});



// Slice containing the reducer and actions
const productsSlice = createSlice({
  name: 'products', // The name of the slice
  initialState: { products: [], status: 'idle', error: null }, // Initial state
  reducers: {}, // No additional reducers for now
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'; // Update state when the fetchRobots async action is pending
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Update state when the fetchRobots async action is fulfilled
        state.products = action.payload; // Update state with the fetched data
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'; // Update state when the fetchRobots async action is rejected
        state.error = action.error.message; // Update state with the error message
      });
  },
});

// Export the reducer and actions
export const { reducer: productsReducer } = productsSlice;
