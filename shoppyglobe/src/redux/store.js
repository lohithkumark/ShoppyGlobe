import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice";
import filterReducer from "./filterSlice";
import searchReducer from "./searchSlice";
import themeReducer from "./themeSlice";
import wishlistReducer from "./wishlistSlice";
import currencyReducer from "./currencySlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    search: searchReducer,
    theme: themeReducer,     
    wishlist: wishlistReducer,
    currency: currencyReducer
  }
});

export default store;
