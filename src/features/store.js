import { configureStore } from "@reduxjs/toolkit";
import NavbarReducer from "./Navbar";
import HomecardsReducer from "./Homecards";
import CoursesReducer from "./Courses";
export const store = configureStore({
  reducer: { navbar: NavbarReducer, homecards: HomecardsReducer , courses: CoursesReducer},
});
