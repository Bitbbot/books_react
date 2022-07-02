import { createSlice } from "@reduxjs/toolkit";

const totalItemsSlice = createSlice({
  name: "totalItems",
  initialState: { totalItems: 0 },
  reducers: {
    setTotalItems: (state, action) => {
      state.totalItems = action.payload;
      console.log();
    },
  },
});

export const { setTotalItems } = totalItemsSlice.actions;
export default totalItemsSlice.reducer;
