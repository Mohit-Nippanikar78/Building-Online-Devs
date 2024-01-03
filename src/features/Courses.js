import { createSlice } from "@reduxjs/toolkit";
import { initialCourses } from "../utils";

let courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: initialCourses,
    loading: false,
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let { quantity, id } = action.payload;
      let tempCourse = state.courses.find((course) => course.id === id);
      cart.push({ ...tempCourse, quantity });
    },
    removeFromCart: (state, action) => {
      state.courses[action.payload.id].cart = false;
    },
  },
});
export const { addToCart, removeFromCart } = courseSlice.actions;
export default courseSlice.reducer;
