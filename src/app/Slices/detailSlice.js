import { createSlice } from "@reduxjs/toolkit";
import course from "/Users/dayaldonadkar/task-alemeno/src/Course.json";

export const detailSlice = createSlice({
  name: "detail",

  initialState: { course },
  reducers: {
    details: (state, action) => {
      state.initailState.push(action.payload);
    },
  },
});

export default detailSlice.reducer;
