import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart"));

const initialState = savedCart || [];

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart(state, action) {
      const item = state.find(
        p => p.id === action.payload.id
      );

      if (item) {
        item.qty += 1;
      } else {
        state.push({
          ...action.payload,
          qty: 1
        });
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(state)
      );
    },

    removeFromCart(state, action) {
      const updated = state.filter(
        item => item.id !== action.payload
      );

      localStorage.setItem(
        "cart",
        JSON.stringify(updated)
      );

      return updated;
    },

    increaseQty(state, action) {
      const item = state.find(
        i => i.id === action.payload
      );

      if (item) {
        item.qty += 1;
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(state)
      );
    },

    decreaseQty(state, action) {
      const item = state.find(
        i => i.id === action.payload
      );

      if (item && item.qty > 1) {
        item.qty -= 1;
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(state)
      );
    },

    clearCart() {
      localStorage.removeItem("cart");
      return [];
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
