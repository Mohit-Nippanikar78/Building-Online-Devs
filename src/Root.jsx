import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./features/store";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components";
import CartDropdown from "./components/Navbar/CartDropdown";
import GBP from "./components/Navbar/GBP";
import { setActiveId } from "./features/Navbar";
import { checkLocalUser } from "./features/User";

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
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkLocalUser())
    setTimeout(() => {
      dispatch(setActiveId({ id: data.find(item => { return item?.link === `/${window.location.pathname.split("/")[1]}` }).id }));
    }, 1000);
  }, [])

  return (
    <>
      {data[4].dropdown.toggleDropdown && <GBP />}
      {window.innerWidth >= 1024 && data[7].dropdown.toggleDropdown && <CartDropdown />}
    </>
  )
}
export default Root;
