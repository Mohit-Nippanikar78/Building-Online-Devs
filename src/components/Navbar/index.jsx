import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { setActiveId, setHoverSpan, setNavbarHeight, setToggle } from "../../features/Navbar";
import NavbarOptions from "./NavbarOptions";

const Navbar = () => {
  let dispatch = useDispatch();
  const ulRef = useRef();
  const navbarRef = useRef();
  const [windowScrollY, setWindowScrollY] = useState(0);
  const { data, hoverSpan, activeId, toggle } = useSelector((state) => state.navbar);
  useEffect(() => {
    const handleScroll = (event) => {
      setWindowScrollY(window.scrollY);
    };
    dispatch(setNavbarHeight(navbarRef.current.getBoundingClientRect().height))

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className=" flex bg-navy lg:bg-inherit  z-40 px-4 lg:px-0 py-4 justify-between lg:justify-around w-full fixed top-0 left-0"
      style={{
        backdropFilter: windowScrollY > 50 && "blur(50px)",
        boxShadow:
          windowScrollY > 50 && " rgba(99, 99, 99, 0.2) 0px 1px 1px 0px",
      }}
      ref={navbarRef}
    >
      <img src="./images/logo.png" className="w-36" alt="" />
      <button className={`lg:hidden rounded-md border-[#3c3c3c] p-1 my-auto border-2 border-solid ${toggle ? "bg-lime" : "bg-transparent"}`}
        onClick={() => { dispatch(setToggle(!toggle)) }}>
        {toggle ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.46585 8.01314L15.6959 1.78287C16.1014 1.37762 16.1014 0.722377 15.6959 0.317124C15.2907 -0.0881298 14.6354 -0.0881298 14.2302 0.317124L7.99992 6.5474L1.76983 0.317124C1.36439 -0.0881298 0.709336 -0.0881298 0.304083 0.317124C-0.101361 0.722377 -0.101361 1.37762 0.304083 1.78287L6.53417 8.01314L0.304083 14.2434C-0.101361 14.6487 -0.101361 15.3039 0.304083 15.7092C0.506045 15.9113 0.771595 16.0129 1.03696 16.0129C1.30232 16.0129 1.56768 15.9113 1.76983 15.7092L7.99992 9.47889L14.2302 15.7092C14.4323 15.9113 14.6977 16.0129 14.9631 16.0129C15.2284 16.0129 15.4938 15.9113 15.6959 15.7092C16.1014 15.3039 16.1014 14.6487 15.6959 14.2434L9.46585 8.01314Z" fill="#3C3C3C" />
          </svg>) : (
          <svg width="18" height="17" viewBox="0 0 18 17" fill="#3c3c3c" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1.5C0 0.947715 0.447715 0.5 1 0.5H17C17.5523 0.5 18 0.947715 18 1.5C18 2.05228 17.5523 2.5 17 2.5H1C0.447716 2.5 0 2.05228 0 1.5ZM0 8.5C0 7.94772 0.447715 7.5 1 7.5H17C17.5523 7.5 18 7.94772 18 8.5C18 9.05229 17.5523 9.5 17 9.5H1C0.447716 9.5 0 9.05229 0 8.5ZM0 15.5C0 14.9477 0.447715 14.5 1 14.5H17C17.5523 14.5 18 14.9477 18 15.5C18 16.0523 17.5523 16.5 17 16.5H1C0.447716 16.5 0 16.0523 0 15.5Z" fill="white" />
          </svg>
        )
        }
      </button>
      <NavbarOptions />
      <ul
        onMouseOut={() => {
          if (activeId.id) {
            dispatch(
              setHoverSpan({ left: activeId.left, width: activeId.width })
            );
          } else {
            dispatch(setHoverSpan({ width: 0 }));
          }
        }}
        ref={ulRef}
        className="hidden  relative lg:flex overflow-hidden items-center  font-poppins text-15px text-white rounded-[8px] border-[2px] "
      >
        {data.map((item, index) => {
          return <NavbarButton item={item} key={index} parentRef={ulRef} />;
        })}

        <span className="z-[-1]  nav-ul-span" style={hoverSpan}></span>
      </ul>
    </div>
  );
};
const NavbarButton = ({ item, parentRef }) => {
  let dispatch = useDispatch();
  const { activeId } = useSelector((state) => state.navbar);
  const listRef = useRef();
  let { name } = item;
  return (
    <>
      <li
        ref={listRef}
        onMouseOver={() => {
          dispatch(
            setHoverSpan({
              left: Math.round(
                listRef.current.getBoundingClientRect().left -
                parentRef.current.getBoundingClientRect().left -
                2
              ),
              width: listRef.current.getBoundingClientRect().width,
            })
          );
        }}
        onClick={() => {
          dispatch(
            setActiveId({
              id: item.id,
              left: Math.round(
                listRef.current.getBoundingClientRect().left -
                parentRef.current.getBoundingClientRect().left -
                2
              ),
              width: listRef.current.getBoundingClientRect().width,
            })
          );
        }}
        className={`relative px-4  cursor-pointer hover:text-[#3c3c3c] ${item.id == activeId.id && "text-[#3c3c3c]"
          }`}
      >
        {name}
        {!item?.last && (
          <img
            className="absolute top-1.5 -right-1"
            src="./images/dot.png"
            alt=""
          />
        )}
      </li>
    </>
  );
};

export default Navbar;
