import { configureStore } from "@reduxjs/toolkit";
import NavbarReducer from "./Navbar";
export const store = configureStore({
  reducer: { navbar: NavbarReducer },
});
