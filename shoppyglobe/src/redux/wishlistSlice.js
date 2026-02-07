import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: [],

  reducers: {
    toggleWish(state, action) {
      const id = action.payload.id;

      const found = state.find(item => item.id === id);

      if (found) {
        return state.filter(item => item.id !== id);
      }

      state.push(action.payload);
    }
  }
});

export const { toggleWish } = wishlistSlice.actions;

export default wishlistSlice.reducer;
