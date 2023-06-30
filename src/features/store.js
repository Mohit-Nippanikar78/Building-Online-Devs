import { configureStore } from "@reduxjs/toolkit";
import NavbarReducer from "./Navbar";
import HomecardsReducer from "./Homecards";
export const store = configureStore({
  reducer: { navbar: NavbarReducer, homecards: HomecardsReducer },
});
