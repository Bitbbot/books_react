import { createSlice } from "@reduxjs/toolkit";

const startIndexSlice = createSlice({
  name: "index",
  initialState: 0,
  reducers: {
    setStartIndex: (state, action) => {
      state.startIndex = action.payload;
      console.log();
    },
  },
});

export const { setStartIndex } = startIndexSlice.actions;
export default startIndexSlice.reducer;
