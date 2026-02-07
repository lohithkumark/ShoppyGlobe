import { createSlice } from "@reduxjs/toolkit";

const rates = {
  USD: 1,
  INR: 83,
  EUR: 0.9
};

const initialState = {
  currency: "USD",
  rate: 1
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency(state, action) {
      const code = action.payload;
      state.currency = code;
      state.rate = rates[code] || 1;
    }
  }
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
