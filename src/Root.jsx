import React from "react";
import { Provider, useSelector } from "react-redux";
import { store } from "./features/store";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components";
import CartDropdown from "./components/Navbar/CartDropdown";
import GBP from "./components/Navbar/GBP";

const Root = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Overlays />
      <Outlet />
    </Provider>
  );
};

const Overlays = () => {
  const { data, activeId } = useSelector(state => state.navbar)
  return (
    <>
      {data[4].dropdown.toggleDropdown && <GBP />}
      {data[7].dropdown.toggleDropdown && <CartDropdown />}
    </>
  )
}
export default Root;
