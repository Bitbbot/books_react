import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    booksArray: [],
  },
  reducers: {
    setBooks: (state, action) => {
      state.booksArray = action.payload;
      console.log();
    },
    deleteBooks: (state, action) => {
      state.booksArray = state.booksArray.filter(
        (book) => book.id !== action.payload
      );
    },
  },
});

export const { setBooks, deleteBooks } = booksSlice.actions;
export default booksSlice.reducer;
