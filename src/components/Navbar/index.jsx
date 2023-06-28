import React, { useRef } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { setActiveId, setHoverSpan } from "../../features/Navbar";

const Navbar = () => {
  let dispatch = useDispatch();
  const ulRef = useRef();
  const { data, hoverSpan, activeId } = useSelector((state) => state.navbar);
  return (
    <div className="flex z-40 py-4 justify-around w-full fixed top-0 left-0">
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
        className="relative flex overflow-hidden items-center  font-poppins text-15px text-white rounded-[8px] border-[2px] "
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
        className={`relative px-4 cursor-pointer ${
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
