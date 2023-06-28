import React from "react";
import { Provider } from "react-redux";
import { store } from "./features/store";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

const Root = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
    </Provider>
  );
};

export default Root;
