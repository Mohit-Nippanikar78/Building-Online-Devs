import { configureStore } from "@reduxjs/toolkit";
import NavbarReducer from "./Navbar";
import HomecardsReducer from "./Homecards";
import CoursesReducer from "./Courses";
import CatalogueReducers from "./Catalogue";
import CartReducer from "./Cart";
import UserReducer from "./User";
export const store = configureStore({
  reducer: {
    navbar: NavbarReducer,
    homecards: HomecardsReducer,
    courses: CoursesReducer,
    catalogue: CatalogueReducers,
    cart: CartReducer,
    user: UserReducer,
  },
});
