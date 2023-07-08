import { createSlice } from "@reduxjs/toolkit";

const NavbarSlice = createSlice({
  name: "navbar",
  initialState: {
    navbarHeight: 100,
    toggle: false,
    hoveredId: null,
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
      {
        id: 1,
        name: "Products",
        active: false,
      },
      {
        id: 2,
        name: "About Us",
        active: false,
      },
      {
        id: 3,
        name: "Consultations",
        active: false,
      },
      {
        id: 4,
        name: "Support",
        active: false,
      },
      {
        id: 5,
        name: "GBP",

        active: false,
        dropdown: {
          left: 0,
          top: 0,
          toggleDropdown: false,
          hovered: false,
        },
      },
      {
        id: 6,
        name: "Login",
        active: false,
      },
      {
        id: 7,
        name: "Register",
        active: false,
      },
      {
        id: 8,
        name: "Cart",

        active: false,
        last: true,
        dropdown: {
          right: 0,
          top: 0,
          toggleDropdown: false,
          hovered: false,
        },
      },
    ],
  },
  reducers: {
    setActiveId: (state, action) => {
      const GBPdropdownToggle = state.data[4].dropdown.toggleDropdown;
      const CartDropdownToggle = state.data[7].dropdown.toggleDropdown;
      const { id } = action.payload;
      state.activeId = action.payload;
      console.log(action.payload);
      if (GBPdropdownToggle && id == 5) {
        state.activeId.id = null;
        console.log(1);
        console.log(1);
      }
      if (id !== 5) {
        state.data[4].dropdown.toggleDropdown = false;
        console.log(2);
      }
      console.log(3);
      if (CartDropdownToggle && id == 8) {
        state.activeId.id = null;
      }
      if (id !== 8) {
        state.data[7].dropdown.toggleDropdown = false;
      }
    },
    setHovered: (state, action) => {
      state.hoveredId = action.payload.id;
    },
    setHoverSpan: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state.hoverSpan[key] = action.payload[key];
      });
    },
    setNavbarHeight: (state, action) => {
      state.navbarHeight = action.payload;
    },
    setGBPdropdown: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state.data[4].dropdown[key] = action.payload[key];
      });
    },
    setCartDropdown: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state.data[7].dropdown[key] = action.payload[key];
      });
    },
    setToggle: (state, action) => {
      //Toggling for mobile view
      state.toggle = action.payload;
      state.data[4].dropdown.toggleDropdown = false;
      state.data[7].dropdown.toggleDropdown = false;
    },
  },
});
export const {
  setActiveId,
  setHoverSpan,
  setNavbarHeight,
  setToggle,
  setGBPdropdown,
  setHovered,
  setCartDropdown,
} = NavbarSlice.actions;
export default NavbarSlice.reducer;
