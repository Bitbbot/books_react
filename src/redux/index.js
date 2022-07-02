import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books-redux/reducer";
import bookReducer from "./book-redux/reducer";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    book: bookReducer,
  },
});
