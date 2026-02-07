import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: "USD",
  rate: 1
};

const currencySlice = createSlice({
  name: "currency",

  initialState,

  reducers: {
    setCurrency(state, action) {
      state.code = action.payload.code;
      state.rate = action.payload.rate;
    }
  }
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
