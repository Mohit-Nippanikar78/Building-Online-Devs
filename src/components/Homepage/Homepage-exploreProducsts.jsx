import React, { useRef, useState } from "react";
import CustomButton from "../elements/CustomButton";
import { useSelector } from "react-redux";
import ProductCard from "../elements/ProductCard";
import { motion } from "framer-motion";
import LeftplayButton from "../elements/LeftplayButton";
import RightplayButton from "../elements/RightplayButton";

const HomepageExploreProducts = () => {
    const [coursesX, setCoursesX] = useState(0);
    const { courses } = useSelector((state) => state.courses);
    let coursesRef = useRef();
    const leftCards = () => {
        if (
            coursesRef.current.scrollWidth -
            coursesRef.current.getBoundingClientRect().width -
            coursesRef.current.getBoundingClientRect().right >
            -300
        ) {
            setCoursesX((x) => x + 300);
        }
    };
    const rightCards = () => {
        if (
            coursesRef.current.scrollWidth -
            coursesRef.current.getBoundingClientRect().width -
            coursesRef.current.getBoundingClientRect().left * -1 >
            0
        ) {
            setCoursesX((x) => x - 300);
        }
    };
    return (
        <div className="bg-white">
            <div
                className="flex items-center flex-col justify-center "
                style={{
                    background: "url('./images/homepage/explore-products-bg.png')",
                }}
            >
                <div className="max-w-lg mt-12 text-center font-semiboldD relative z-10  ">
                    <div className="capitalize text-2xl font-bold">
                        explore some of our best resources
                    </div>
                    <div className="font-normal py-2 lg:py-6 text-sm">
                        Lorem ipsum sit amet consectetur. Feugiat massa in bibendum urna
                        risus massa tellus malesuada. Sagittis mus augue amet mattis. Lorem
                    </div>
                </div>
                <motion.div
                    transition={{ duration: 1 }}
                    animate={{ x: coursesX }}
                    initial={{ x: 0 }}
                    ref={coursesRef}
                    className="hidden lg:block flex p-12 snap-x  pb-6 w-screen homepage-exploreProducts-cards"
                >
                    {courses.map((course, index) => {
                        return <ProductCard key={index} course={course} />;
                    })}
                </motion.div>
                <div
                    className=" lg:hidden flex p-12 pb-2 snap-x overflow-x-scroll w-screen homepage-exploreProducts-cards"
                >
                    {courses.map((course, index) => {
                        return <ProductCard key={index} course={course} />;
                    })}
                </div>
                <div className="pb-6 ">
                    <div className=" select-none flex justify-evenly items-center  my-4 ">
                        <LeftplayButton
                            func={leftCards}
                            dark={true}
                        />
                        <CustomButton text="view all " dark={true} />
                        <RightplayButton
                            func={rightCards}
                            dark={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomepageExploreProducts;
