import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    currentBook: null,
  },
  reducers: {
    setCurrentBook: (state, action) => {
      state.currentBook = action.payload;
      console.log();
    },
  },
});

export const { setCurrentBook } = bookSlice.actions;
export default bookSlice.reducer;
