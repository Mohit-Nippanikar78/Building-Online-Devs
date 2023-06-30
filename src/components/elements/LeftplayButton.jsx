import React, { useState } from 'react'

const LeftplayButton = ({ func ,dark}) => {
    const [leftBtnHover, setLeftBtnHover] = useState(false);

    return (
        <div
            onMouseOver={() => {
                setLeftBtnHover(true);
            }}
            onMouseOut={() => {
                setLeftBtnHover(false);
            }}
            onClick={func}
            className={` ${dark?"bg-[#3C3C3C]":"bg-[#9B9B9B]"} select-none mr-4 rounded-sm cursor-pointer w-8 h-8 flex justify-center items-center hover:bg-lime transition-all duration-1000`}
        >
            {leftBtnHover ? (
                <img src="./images/homepage-card-left-hover.png" alt="" />
            ) : (
                <img src="./images/homepage-card-left.png" alt="" />
            )}
        </div>
    )
}
LeftplayButton.defaultProps = {
    dark: false,
}

export default LeftplayButton