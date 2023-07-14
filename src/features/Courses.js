import { createSlice } from "@reduxjs/toolkit";
import { initialCourses } from "../utils";

let courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: initialCourses,
    loading: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.courses[action.payload.id].cart = true;
    },
    removeFromCart: (state, action) => {
      state.courses[action.payload.id].cart = false;
    },
  },
});
export const { addToCart, removeFromCart } = courseSlice.actions;
export default courseSlice.reducer;
