import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  country: "US",
  symbol: "$",
  rate: 1
};

const currencySlice = createSlice({
  name: "currency",

  initialState,

  reducers: {
    setCountry(state, action) {
      const country = action.payload;

      if (country === "US") {
        state.country = "US";
        state.symbol = "$";
        state.rate = 1;
      }

      if (country === "IN") {
        state.country = "IN";
        state.symbol = "₹";
        state.rate = 83;
      }

      if (country === "EU") {
        state.country = "EU";
        state.symbol = "€";
        state.rate = 0.9;
      }
    }
  }
});

export const { setCountry } = currencySlice.actions;

export default currencySlice.reducer;
