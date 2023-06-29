import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { setActiveId, setHoverSpan } from "../../features/Navbar";

const Navbar = () => {
  let dispatch = useDispatch();
  const ulRef = useRef();
  const [windowScrollY, setWindowScrollY] = useState(0);
  const { data, hoverSpan, activeId } = useSelector((state) => state.navbar);
  useEffect(() => {
    const handleScroll = (event) => {
      setWindowScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="flex  z-40 py-4 justify-around w-full fixed top-0 left-0"
      style={{
        backdropFilter: windowScrollY > 50 && "blur(50px)",
        boxShadow:
          windowScrollY > 50 && " rgba(99, 99, 99, 0.2) 0px 1px 1px 0px",
      }}
    >
      <img src="./images/logo.png" alt="" />
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
        className="relative hidden lg:flex overflow-hidden items-center  font-poppins text-15px text-white rounded-[8px] border-[2px] "
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
        className={`relative px-4 cursor-pointer hover:text-[#3c3c3c] ${
          item.id == activeId.id && "text-[#3c3c3c]"
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
