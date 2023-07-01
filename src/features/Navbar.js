import { createSlice } from "@reduxjs/toolkit";

const NavbarSlice = createSlice({
  name: "navbar",
  initialState: {
    navbarHeight: 100,
    toggle: false,

    hoverSpan: {
      left: 0,
      width: 0,
    },
    activeId: {
      id: null,
      left: 0,
      width: 0,
    },
    data: [
      { id: 1, name: "Products", hovered: false, active: false },
      { id: 2, name: "About Us", hovered: false, active: false },
      { id: 3, name: "Consultations", hovered: false, active: false },
      { id: 4, name: "Support", hovered: false, active: false },
      { id: 5, name: "GBP", hovered: false, active: false },
      { id: 6, name: "Login", hovered: false, active: false },
      { id: 7, name: "Register", hovered: false, active: false },
      { id: 8, name: "Cart", hovered: false, active: false, last: true },
    ],
  },
  reducers: {
    setActiveId: (state, action) => {
      const { id, left, width } = action.payload;

      state.activeId = action.payload;
    },
    setHoverSpan: (state, action) => {
      state.hoverSpan = action.payload;
    },
    setNavbarHeight: (state, action) => {
      state.navbarHeight = action.payload;
    },
    setToggle: (state, action) => {
      state.toggle = action.payload;
    },
  },
});
export const { setActiveId, setHoverSpan, setNavbarHeight, setToggle } =
  NavbarSlice.actions;
export default NavbarSlice.reducer;
