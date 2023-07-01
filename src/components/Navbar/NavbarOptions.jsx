import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setActiveId } from "../../features/Navbar";

const NavbarOptions = () => {
    const { data, navbarHeight, toggle } = useSelector((state) => state.navbar);
    const ulRef = useRef();


    return (
        <ul ref={ulRef} className="fixed bg-navy overflow-hidden transition-all duration-1000   font-poppins text-15px text-white"
            style={{ top: navbarHeight, height: window.innerHeight - navbarHeight, right: toggle ? "0" : "-60%" }}>
            {data.map((item, index) => {
                return <NavbarButton item={item} key={index} />;
            })}

        </ul>

    )
}
const NavbarButton = ({ item }) => {
    let dispatch = useDispatch();
    const { activeId } = useSelector((state) => state.navbar);
    let { id, name } = item;
    return (
        <>
            <li
                onClick={() => {
                    dispatch(setActiveId({ id }));
                }}
                className={`relative max-w-[200px] z-30 p-6 flex justify-center items-center     cursor-pointer hover:text-[#3c3c3c] ${id == activeId.id && "text-[#3c3c3c]"
                    }`}
                style={{
                    background: activeId.id == id && "linear-gradient(94deg, #dae988 8.73%, #d4f229 49.92%)"
                }}
            >
                {name}
                {!item?.last && (
                    <img
                        className=" z-10 absolute right-[46%] -bottom-1"
                        src="./images/dot.png"
                        alt=""
                    />
                )}
            </li>
        </>
    );
};



export default NavbarOptions