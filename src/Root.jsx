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
  const { data } = useSelector(state => state.navbar)
  const titleDocument = () => {
    if (window.location.pathname == "/") {
      document.title = `Building Online Devs`
    } else {
      document.title = `BOD - ${data.find(item => { return item?.link === `/${window.location.pathname.split("/")[1]}` }).name}`
    }
  }
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkLocalUser())
    setTimeout(() => {
      dispatch(setActiveId({ id: data.find(item => { return item?.link === `/${window.location.pathname.split("/")[1]}` }).id }));
    }, 1000);
    window.addEventListener("click", titleDocument, false);
    return () => {
      window.removeEventListener("hashchange", () => {
        document.title = `Building Online Devs- ${window.location.pathname.split("/")[1]}`
      });
    }
  }, [])

  return (
    <>
      {data[4].dropdown.toggleDropdown && <GBP />}
      {window.innerWidth >= 1024 && data[7].dropdown.toggleDropdown && <CartDropdown />}
    </>
  )
}
export default Root;
