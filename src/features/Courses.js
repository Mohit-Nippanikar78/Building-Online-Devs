import { createSlice } from "@reduxjs/toolkit";

let courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [
      {
        id: 1,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
        cart: false,
      },
      {
        id: 2,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
        cart: false,
      },
      {
        id: 3,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
        cart: false,
      },
      {
        id: 4,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
        cart: false,
      },
      {
        id: 5,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
        cart: false,
      },
      {
        id: 6,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
        cart: false,
      },
      {
        id: 7,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
        cart: false,
      },
      {
        id: 8,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
        cart: false,
      },
      {
        id: 9,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
        cart: false,
      },
      {
        id: 10,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
        cart: false,
      },
    ],
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
