import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { setActiveId, setCartDropdown, setGBPdropdown, setHoverSpan, setHovered, setNavbarHeight, setOrientation, setToggle } from "../../features/Navbar";
import NavbarOptions from "./NavbarOptions";
import { calcNavbarHoverSpan, useOutsideClick } from "../elements/hooks";
import CartDropdownPage from "./CartDropdownPage.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let dispatch = useDispatch();
  const ulRef = useRef();
  let navigate = useNavigate();
  const navbarRef = useRef();
  const [windowScrollY, setWindowScrollY] = useState(0);
  const { data, hoverSpan, activeId, toggle } = useSelector((state) => state.navbar);
  useOutsideClick(navbarRef, () => { dispatch(setToggle(false)); });
  const handleScroll = () => {
    setWindowScrollY(window.scrollY);
  };
  useEffect(() => {
    setTimeout(() => { dispatch(setNavbarHeight(navbarRef.current.getBoundingClientRect().height)) }, 500);
    window.addEventListener("scroll", handleScroll);
    return () => { window.removeEventListener("scroll", handleScroll); };
  }, []);

  return (
    <div
      className="fixed  flex bg-navy lg:bg-inherit  z-40 px-4 lg:px-0 py-4 justify-between lg:justify-around w-full  top-0 left-0"
      style={{
        backdropFilter: windowScrollY > 50 && "blur(50px)",
        boxShadow:
          windowScrollY > 50 && " rgba(99, 99, 99, 0.2) 0px 1px 1px 0px",
      }}
      ref={navbarRef}
    >
      <img src="/images/logo.png" className="w-36 cursor-pointer" alt="" onClick={() => { navigate("/") }} />
      {window.innerWidth < 1024 ? (<>
        <NavbarOptions />
        {window.innerWidth < 1024 && <CartDropdownPage />}
        <button className={`lg:hidden rounded-md border-[#3c3c3c] p-1 my-auto border-2 border-solid ${toggle ? "bg-lime" : "bg-transparent"}`}
          onClick={() => { dispatch(setToggle(!toggle)); }}>
          {toggle ? (
            <svg width="16" height="16D" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.46585 8.01314L15.6959 1.78287C16.1014 1.37762 16.1014 0.722377 15.6959 0.317124C15.2907 -0.0881298 14.6354 -0.0881298 14.2302 0.317124L7.99992 6.5474L1.76983 0.317124C1.36439 -0.0881298 0.709336 -0.0881298 0.304083 0.317124C-0.101361 0.722377 -0.101361 1.37762 0.304083 1.78287L6.53417 8.01314L0.304083 14.2434C-0.101361 14.6487 -0.101361 15.3039 0.304083 15.7092C0.506045 15.9113 0.771595 16.0129 1.03696 16.0129C1.30232 16.0129 1.56768 15.9113 1.76983 15.7092L7.99992 9.47889L14.2302 15.7092C14.4323 15.9113 14.6977 16.0129 14.9631 16.0129C15.2284 16.0129 15.4938 15.9113 15.6959 15.7092C16.1014 15.3039 16.1014 14.6487 15.6959 14.2434L9.46585 8.01314Z" fill="#3C3C3C" />
            </svg>) : (
            <svg width="18" height="17" viewBox="0 0 18 17" fill="#3c3c3c" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H17C17.5523 0.5 18 0.947715 18 1.5C18 2.05228 17.5523 2.5 17 2.5H1C0.447716 2.5 0 2.05228 0 1.5ZM0 8.5C0 7.94772 0.447715 7.5 1 7.5H17C17.5523 7.5 18 7.94772 18 8.5C18 9.05229 17.5523 9.5 17 9.5H1C0.447716 9.5 0 9.05229 0 8.5ZM0 15.5C0 14.9477 0.447715 14.5 1 14.5H17C17.5523 14.5 18 14.9477 18 15.5C18 16.0523 17.5523 16.5 17 16.5H1C0.447716 16.5 0 16.0523 0 15.5Z" fill="white" />
            </svg>
          )
          }
        </button>
      </>) : (
        <ul
          onMouseOut={() => {
            if (activeId.id) {
              dispatch(setHoverSpan({ id: activeId.id }));
            } else {
              dispatch(setHoverSpan({ id: 0 }));
            }
          }}
          ref={ulRef}
          className="  relative lg:flex overflow-hidden items-center  font-poppins text-15px text-white rounded-[8px] border-[2px] "
        >
          {data.map((item, index) => {
            return <NavbarButtons item={item} key={index} parentRef={ulRef} />;
          })}

          <span className="z-[-1]  nav-ul-span" style={hoverSpan}></span>
        </ul>
      )}
    </div>
  );
};
const NavbarButtons = ({ item, parentRef }) => {
  let dispatch = useDispatch();
  const listRef = useRef();
  const { activeId, data, hoveredId } = useSelector((state) => state.navbar);
  let { name, id } = item;


  if (window.innerWidth > 768) {
    //Desktop view with dropdowns
    if ([5, 8].includes(id)) {
      return <NavbarDropdownButton item={item} parentRef={parentRef} />;
    } else {
      //Desktop view but no dropdown menus 
      return <NavbarSimpleButton item={item} parentRef={parentRef} />
    }
  } else {
    return (
      <li
        ref={listRef}
        onClick={() => {
          id == 4 && dispatch(setHovered({ id }))
          dispatch(
            setActiveId({ id: item.id, }));
        }}
        className={`lg:hidden relative px-4 flex items-center overflow-visible  cursor-pointer hover:text-[#3c3c3c] ${item.id == activeId.id && "text-[#3c3c3c]"
          }`}
      >
        {name}
        {item?.dropdown && <svg fill="none" className={`ml-1 ${hoveredId == id ? "rotate-0" : "rotate-180"}  delay-500 duration-1000 transition-transform`} width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
          <path fill={hoveredId == id ? "#000" : "#ffffff"} d="M8.08579 5.25C8.97669 5.25 9.42286 4.17286 8.79289 3.54289L5.70711 0.457108C5.31658 0.0665832 4.68342 0.0665828 4.29289 0.457107L1.20711 3.54289C0.577143 4.17286 1.02331 5.25 1.91421 5.25L8.08579 5.25Z" />
        </svg>}

        {!item?.last && (
          <img
            className="absolute top-1.5 -right-1"
            src="/images/dot.png"
            alt=""
          />
        )}
      </li >
    )
  }

};
const NavbarSimpleButton = ({ item, parentRef }) => {
  let dispatch = useDispatch();
  let navigate = useNavigate()
  const listRef = useRef();
  const { activeId } = useSelector((state) => state.navbar);
  let { name, id, link } = item;
  const [mohit, setMohit] = useState()
  useEffect(() => {
    setTimeout(() => {
      let tempHoverspan = calcNavbarHoverSpan(listRef, parentRef)
      dispatch(setOrientation({ id, ...tempHoverspan }))
    }, 1000);
  }, [])
  return (
    <li
      ref={listRef}
      onMouseOver={() => {
        dispatch(setHoverSpan({ id }));
      }}
      onMouseOut={() => { console.log(activeId.id, id); activeId.id !== id && setHoverSpan({ id: 0 }) }}
      onClick={() => {
        dispatch(
          setActiveId({ id })
        );
        navigate(link)
      }}
      className={`hidden relative px-4 lg:flex items-center overflow-visible  cursor-pointer hover:text-[#3c3c3c] ${item.id == activeId.id && "text-[#3c3c3c]"
        }`}
    >
      {name}
      {!item?.last && (
        <img
          className="absolute top-1.5 -right-1"
          src="/images/dot.png"
          alt=""
        />
      )}
    </li >


  )
}
const NavbarDropdownButton = ({ item, parentRef }) => {
  const listRef = useRef();

  const { activeId, data, hoveredId } = useSelector((state) => state.navbar);
  let dispatch = useDispatch();
  let { name, id } = item;
  useEffect(() => {
    id == 5 && dispatch(setGBPdropdown({ left: listRef.current.getBoundingClientRect().left, top: listRef.current.getBoundingClientRect().top }))
    id == 8 && dispatch(setCartDropdown({ right: window.innerWidth - listRef.current.getBoundingClientRect().right, top: listRef.current.getBoundingClientRect().top }))
    setTimeout(() => {
      let tempHoverspan = calcNavbarHoverSpan(listRef, parentRef)
      dispatch(setOrientation({ id, ...tempHoverspan }))
    }, 1000);
  }, []);
  return (
    <li
      ref={listRef}
      onMouseOver={() => { dispatch(setHoverSpan({ id })); }}
      onMouseOut={() => { console.log(activeId.id, id); activeId.id !== id && setHoverSpan({ id: 0 }) }}
      onClick={() => {
        id == 5 && dispatch(setGBPdropdown({ toggleDropdown: !item.dropdown.toggleDropdown }))
        id == 8 && dispatch(setCartDropdown({ toggleDropdown: !item.dropdown.toggleDropdown }))
        dispatch(setActiveId({ id }));
      }}
      className={`hidden relative px-4 lg:flex items-center overflow-visible  cursor-pointer hover:text-[#3c3c3c] ${item.id == activeId.id && "text-[#3c3c3c]"}`}
    >
      {name}
      {item?.dropdown && <svg fill="none" className={`ml-1 ${data[id - 1].dropdown.toggleDropdown ? "rotate-0" : "rotate-180"}  duration-500 transition-transform`} width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
        <path fill={hoveredId === id ? "#000" : "#ffffff"} d="M8.08579 5.25C8.97669 5.25 9.42286 4.17286 8.79289 3.54289L5.70711 0.457108C5.31658 0.0665832 4.68342 0.0665828 4.29289 0.457107L1.20711 3.54289C0.577143 4.17286 1.02331 5.25 1.91421 5.25L8.08579 5.25Z" />
      </svg>}
      {!item?.last && (
        <img
          className="absolute top-1.5 -right-1"
          src="/images/dot.png"
          alt=""
        />
      )}
    </li >)
}
export default Navbar;
