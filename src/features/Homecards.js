import { createSlice } from "@reduxjs/toolkit";

const HomecardsSlice = createSlice({
  name: "Homecards",
  initialState: {
    activeId: 1,
    data: [
      {
        id: 1,
        title: "Discover our indepth resources",
        content:
          "Lorem ipsum dolor sit amet consectetur. Laoreet cum etiam libero non amet. Nunc facilisi erat viverra in turpis. Risus ac eu molestie libero lobortis sed.",
        buttonText: "Explore Products",
        buttonLink: "/products",
      },
      {
        id: 2,
        title: `complete order with secure payments`,
        content:
          "Lorem ipsum dolor sit amet consectetur. Laoreet cum etiam libero non amet. Nunc facilisi erat viverra in turpis. Risus ac eu molestie libero lobortis sed.",
        buttonText: "Contact Us",
        buttonLink: "/",
      },
      {
        id: 3,
        title: "level up your dev knowledge anywhere",
        content:
          "Lorem ipsum dolor sit amet consectetur. Laoreet cum etiam libero non amet. Nunc facilisi erat viverra in turpis. Risus ac eu molestie libero lobortis sed.",
        buttonText: "Access Your Account",
        buttonLink: "/",
      },
    ],
  },
  reducers: {
    nextCard: (state) => {
      if (state.activeId < state.data.length) {
        state.activeId += 1;
      } else {
        state.activeId = 1;
      }
    },
    prevCard: (state) => {
      if (state.activeId > 1) {
        state.activeId -= 1;
      } else {
        state.activeId = state.data.length;
      }
    },
  },
});
export const { nextCard, prevCard } = HomecardsSlice.actions;
export default HomecardsSlice.reducer;
