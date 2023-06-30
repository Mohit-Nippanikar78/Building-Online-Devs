import React, { useState } from 'react'

const RightplayButton = ({func,dark}) => {
  const [rightBtnHover, setRightBtnHover] = useState(false);

    return (
        <div
            onMouseOver={() => {
                setRightBtnHover(true);
            }}
            onMouseOut={() => {
                setRightBtnHover(false);
            }}
            className={` ${dark?"bg-[#3C3C3C]":"bg-[#9B9B9B]"} select-none ml-4 rounded-sm cursor-pointer w-8 h-8 flex justify-center items-center hover:bg-lime transition-all duration-1000`}
            onClick={func}
        >
            {rightBtnHover ? (
                <img src="./images/homepage-card-right-hover.png" alt="" />
            ) : (
                <img src="./images/homepage-card-right.png" alt="" />
            )}
        </div>
    )
}
RightplayButton.defaultProps = {
    dark: false,
}
export default RightplayButton