import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",

  initialState: {
    category: "all",
    maxPrice: 200,
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
      state.maxPrice = 200;
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
