import { createSlice } from "@reduxjs/toolkit";

const catalogueSlice = createSlice({
  name: "catalogue",
  initialState: {
    filterOption: false,
    clearOptions: false,
    productDropdown: false,
    contentDropdown: false,
    productTypes: [
      {
        id: 1,
        name: "Accounting",
        count: 3,
        selected: false,
      },
      {
        id: 2,
        name: "Accounting",
        count: 3,
        selected: false,
      },
      {
        id: 3,
        name: "Business",
        count: 89,
        selected: false,
      },
      {
        id: 4,
        name: "Business",
        count: 89,
        selected: false,
      },
      {
        id: 5,
        name: "Accounting",
        count: 3,
        selected: false,
      },
    ],
    contentTypes: [
      {
        id: 1,
        name: "Audiobook",
        count: 3,
        selected: false,
      },
      {
        id: 2,
        name: "Video",
        count: 3,
        selected: false,
      },
      {
        id: 3,
        name: "Audiobook",
        count: 3,
        selected: false,
      },
      {
        id: 4,
        name: "Video",
        count: 3,
        selected: false,
      },
      {
        id: 5,
        name: "Audiobook",
        count: 3,
        selected: false,
      },
    ],
    pages: [
      { pageNo: 1, data: [] },
      { pageNo: 2, data: [] },
      { pageNo: 3, data: [] },
      { pageNo: 4, data: [] },
      { pageNo: 5, data: [] },
      { pageNo: 6, data: [] },
      { pageNo: 7, data: [] },
    ],
  },
  reducers: {
    setFilterOption: (state, action) => {
      if (action.payload === true) {
        let i = 0;
        while (i < state.productTypes.length) {
          if (state.productTypes[i].selected) {
            state.clearOptions = true;
            break;
          }
          i++;
        }
        i = 0;
        while (i < state.contentTypes.length) {
          if (state.contentTypes[i].selected) {
            state.clearOptions = true;
            break;
          }
          i++;
        }
      } else {
        state.clearOptions = false;
      }
      state.filterOption = action.payload;
    },
    setProductDropdown: (state, action) => {
      state.productDropdown = action.payload;
    },
    setContentDropdown: (state, action) => {
      state.contentDropdown = action.payload;
    },
    setProductSelected: (state, action) => {
      state.productTypes.forEach((product) => {
        if (product.id === action.payload.id) {
          product.selected = action.payload.selected;
          action.payload.selected && (state.clearOptions = true);
        }
      });
    },
    setContentSelected: (state, action) => {
      state.contentTypes.forEach((content) => {
        if (content.id === action.payload.id) {
          content.selected = action.payload.selected;
          action.payload.selected && (state.clearOptions = true);
        }
      });
    },
    clearAllFilters: (state) => {
      state.productTypes.forEach((product) => {
        product.selected = false;
      });
      state.contentTypes.forEach((content) => {
        content.selected = false;
      });
    },
  },
});
export const {
  setFilterOption,
  setContentDropdown,
  setProductDropdown,
  setContentSelected,
  setProductSelected,
  clearAllFilters,
} = catalogueSlice.actions;

export default catalogueSlice.reducer;
