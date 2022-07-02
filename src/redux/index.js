import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books-redux/reducer";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
