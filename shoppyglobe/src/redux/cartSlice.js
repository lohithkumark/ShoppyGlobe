import { createSlice } from "@reduxjs/toolkit";

let saved = [];

try {
  const data = localStorage.getItem("cart");
  if (data) {
    saved = JSON.parse(data);
  }
} catch (err) {
  saved = [];
}

const cartSlice = createSlice({
  name: "cart",

  initialState: saved,

  reducers: {
    addToCart(state, action) {
      const item = state.find(
        p => p.id === action.payload.id
      );

      if (item) {
        item.qty = item.qty + 1;
      } else {
        state.push({
          ...action.payload,
          qty: 1
        });
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeFromCart(state, action) {
      const newCart = state.filter(
        i => i.id !== action.payload
      );

      localStorage.setItem("cart", JSON.stringify(newCart));

      return newCart;
    },

    increaseQty(state, action) {
      const item = state.find(
        i => i.id === action.payload
      );

      if (item) {
        item.qty = item.qty + 1;
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    decreaseQty(state, action) {
      const item = state.find(
        i => i.id === action.payload
      );

      if (item && item.qty > 1) {
        item.qty = item.qty - 1;
      }

      localStorage.setItem("cart", JSON.stringify(state));
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
