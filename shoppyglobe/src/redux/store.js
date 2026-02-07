import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import currencyReducer from "./currencySlice";



import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";
import themeReducer from "./themeSlice";
import wishlistReducer from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    theme: themeReducer,
    wishlist: wishlistReducer,
    filter: filterReducer,
    currency: currencyReducer


  }
});
