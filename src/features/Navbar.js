import { createSlice } from "@reduxjs/toolkit";
import { checkLocalUser, setUser } from "./User";
import { store } from "./store";

export const NavbarSlice = createSlice({
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
      id: 0,
      left: 0,
      width: 0,
    },
    data: [
      {
        id: 1,
        name: "Products",
        link: "/products",
        left: 0,
        width: 0,
      },
      {
        id: 2,
        name: "About Us",
        link: "/about",
        left: 0,
        width: 0,
      },
      {
        id: 3,
        name: "Consultations",
        link: "/consultations",
        left: 0,
        width: 0,
      },
      {
        id: 4,
        name: "Support",
        link: "/support",
        left: 0,
        width: 0,
      },
      {
        id: 5,
        name: "GBP",
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
        link: "/login",
        left: 0,
        width: 0,
      },
      {
        id: 7,
        name: "Register",
        link: "/register",
        left: 0,
        width: 0,
      },
      {
        id: 8,
        name: "Cart",
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
    setOrientation: (state, action) => {
      let { id, left, width } = action.payload;
      state.data.find((item) => item.id == id).left = left;
      state.data.find((item) => item.id == id).width = width;
    },
    setActiveId: (state, action) => {
      const GBPdropdownToggle = state.data[4].dropdown.toggleDropdown;
      const CartDropdownToggle = state.data[7].dropdown.toggleDropdown;
      const { id } = action.payload;
      state.activeId.id = id;
      state.hoverSpan = {
        left: state.data.find((item) => item.id == id).left,
        width: state.data.find((item) => item.id == id).width,
      };
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
      console.log("called bhai");
      console.log(action.payload);
      let { id } = action.payload;
      if (id == 0 || id == null) {
        state.hoverSpan = {
          left: 0,
          width: 0,
        };
      } else {
        state.hoverSpan = {
          left: state.data.find((item) => item.id == id).left,
          width: state.data.find((item) => item.id == id).width,
        };
      }
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
    // setLoginNavbar: (state, action) => {
    //   console.log("mohit called",action);
    //   // let loginobj = state.data.find((item) => item.id == 6);
    //   // loginobj = { ...loginobj, name: "Account", link: "/account" };
    //   // let registerobj = state.data.find((item) => item.id == 6);
    //   // loginobj = { ...registerobj, name: "Logout", link: "/logout" };
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(checkLocalUser.fulfilled, (state, action) => {
      if (action.payload !== null) {
        state.data.find((item) => item.id == 6).name = "Account";
        state.data.find((item) => item.id == 6).link = "/account";
        state.data.find((item) => item.id == 7).name = "Logout";
        state.data.find((item) => item.id == 7).link = "/logout";
      }
    });
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
  setOrientation,
} = NavbarSlice.actions;
export default NavbarSlice.reducer;
