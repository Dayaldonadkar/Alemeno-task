import { configureStore } from "@reduxjs/toolkit";
import detailSlice from "./Slices/detailSlice";
import studentsSlice from "./Slices/studentsSlice";

export const store = configureStore({
  reducer: {
    details: detailSlice,
    enrolledStudents: studentsSlice,
  },
});
