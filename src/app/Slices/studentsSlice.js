import { createSlice } from "@reduxjs/toolkit";
import studentsenroll from "/Users/dayaldonadkar/task-alemeno/src/Students..json";

export const studentsSlice = createSlice({
  name: "student",
  initialState: { studentsenroll },
  reducers: {
    students: (state, action) => {
      state.initailState.push(action.payload);
      console.log(action.payload, "action");
    },
  },
});

export default studentsSlice.reducer;
