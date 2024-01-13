import { createSlice } from '@reduxjs/toolkit';

// Slice containing the reducer and actions
const searchSlice = createSlice({
  name: 'search', // The name of the slice
  initialState: '', // Initial state is an empty string
  reducers: {
    setSearchField: (state, action) => {
      return action.payload; // Update state with the payload (new search field value)
    },
  },
});

// Export the reducer and actions
export const { reducer: searchReducer, actions } = searchSlice;
export const { setSearchField } = actions;
