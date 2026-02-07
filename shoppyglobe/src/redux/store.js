import { configureStore, createSlice } from "@reduxjs/toolkit";

// Temporary reducer 
const tempSlice = createSlice({
  name: "temp",
  initialState: {},
  reducers: {}
});

export const store = configureStore({
  reducer: {
    temp: tempSlice.reducer
  }
});
