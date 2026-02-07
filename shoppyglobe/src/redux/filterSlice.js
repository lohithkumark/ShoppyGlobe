import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",

  initialState: {
    category: "all",
    maxPrice: 100,
    sort: "default"
  },

  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },

    setMaxPrice(state, action) {
      state.maxPrice = action.payload;
    },

    setSort(state, action) {
      state.sort = action.payload;
    },

    resetFilter(state) {
      state.category = "all";
      state.maxPrice = 100;
      state.sort = "default";
    }
  }
});

export const {
  setCategory,
  setMaxPrice,
  setSort,
  resetFilter
} = filterSlice.actions;

export default filterSlice.reducer;
