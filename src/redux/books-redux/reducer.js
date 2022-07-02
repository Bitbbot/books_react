// import { createSlice } from "@reduxjs/toolkit";

// const booksSlice = createSlice({
//   name: "books",
//   initialState: { booksArray: [] },
//   reducers: {
//     setBooks: (state, action) => {
//       state.books.push(action.payload);
//     },
//     deleteBooks: (state, action) => {
//       state.books = state.books.filter((book) => book.id !== action.payload);
//     },
//   },
// });

// export const { setBooks, deleteBooks } = booksSlice.actions;
// export default booksSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    booksArray: [
      {
        authors: undefined,
        categories: ["Computers"],
        description: undefined,
        id: "puWhbet6IiQC",
        img: "http://books.google.com/books/content?id=puWhbet6IiQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        title: "JavaScript. Учебник начального уровня.",
      },
    ],
  },
  reducers: {
    setBooks: (state, action) => {
      state.booksArray = action.payload;
      // console.log(action.payload);
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
