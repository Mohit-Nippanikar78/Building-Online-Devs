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
      },
      {
        id: 2,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
      },
      {
        id: 3,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
      },
      {
        id: 4,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
      },
      {
        id: 5,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
      },
      {
        id: 6,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
      },
      {
        id: 7,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
      },
      {
        id: 8,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
      },
      {
        id: 9,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
      },
      {
        id: 10,
        name: "Learning Gutenberg ",
        desc: "Lorem ipsum dolor sit amet consectetur. Congue lacus ...",
        price: 130.0,
      },
    ],
    loading: false,
  },
  reducers: {},
});

export default courseSlice.reducer;
