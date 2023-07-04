import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setActiveId, setCartDropdown, setGBPdropdown, setToggle } from "../../features/Navbar";

const NavbarOptions = () => {
    const { data, navbarHeight, toggle } = useSelector((state) => state.navbar);
    const ulRef = useRef();

    return (

        <ul ref={ulRef} className="rounded-b-lg absolute bg-navy overflow-hidden transition-all duration-1000   font-poppins text-15px text-white"
            style={{ top: navbarHeight, right: toggle ? "0" : "-60%" }}>
            {data.map((item, index) => {
                return <NavbarButton item={item} key={index} />;
            })}
        </ul>

    )
}
const NavbarButton = ({ item }) => {
    let dispatch = useDispatch();
    const { activeId, data } = useSelector((state) => state.navbar);
    let { id, name } = item;
    let listRef = useRef();
    return (
        <>
            <li
                ref={listRef}
                onClick={() => {
                    if (id === 5) {

                        dispatch(setGBPdropdown({ toggleDropdown: !data[4].dropdown.toggleDropdown }))
                        dispatch(setGBPdropdown({ left: listRef.current.getBoundingClientRect().left + 30, top: listRef.current.getBoundingClientRect().top + 40 }))
                    } else if (id == 8) {
                        dispatch(setCartDropdown({ toggleDropdown: !data[7].dropdown.toggleDropdown }))
                    } else {

                        dispatch(setActiveId({ id }));
                    }
                }}
                className={`relative max-w-[200px] z-30 p-6 flex justify-center items-center     cursor-pointer hover:text-[#3c3c3c] ${id == activeId.id && "text-[#3c3c3c]"}`}
                style={{
                    background: activeId.id == id && "linear-gradient(94deg, #dae988 8.73%, #d4f229 49.92%)"
                }}
            >
                {name}
                {item?.dropdown && <svg fill="none" className={`ml-1 ${data[4].dropdown.toggleDropdown ? "rotate-0" : "rotate-180"} duration-1000 transition-transform`} width="10" height="6" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg">
                    <path fill={data[4].dropdown.toggleDropdown ? "#000" : "#ffffff"} d="M8.08579 5.25C8.97669 5.25 9.42286 4.17286 8.79289 3.54289L5.70711 0.457108C5.31658 0.0665832 4.68342 0.0665828 4.29289 0.457107L1.20711 3.54289C0.577143 4.17286 1.02331 5.25 1.91421 5.25L8.08579 5.25Z" />
                </svg>}
                {!item?.last && (
                    <img
                        className=" z-50 absolute right-[46%] -bottom-1"
                        src="./images/dot.png"
                        alt=""
                    />
                )}
            </li>
        </>
    );
};



export default NavbarOptions