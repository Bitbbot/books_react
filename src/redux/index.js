import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books-redux/reducer";
import bookReducer from "./book-redux/reducer";
import startIndexReducer from "./start-index/reducer";
import totalItemsReducer from "./total-items/reducer";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    book: bookReducer,
    startIndex: startIndexReducer,
    totalItems: totalItemsReducer,
  },
});
