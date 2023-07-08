import React from 'react'

const ProductpageFaq = () => {
    return (
        <>
            <div className=" pt-16 text-white text-center max-w-xl m-auto  flex flex-col justify-center items-center ">
                <div className=" text-3xl lg:text-3xl capitalize font-extrabold tracking-[2px]">
                    <div className="mb-2">
                        <span id="homepage-heading-gradient">Frequent </span>
                        Asked Question
                    </div>
                </div>
                <div className="font-xs   tracking-[0.001rem] text-xs my-4 px-4  ">
                    Lorem ipsum dolor sit amet consectetur. Facilisi nunc eu egestas at blandit. Quisque egestas quam nibh et semper. Dictum sit a mi tristique in.
                </div>
            </div>
            <div className="overflow-hidden bg-white  md:rounded-md my-8 max-w-3xl mx-auto text-black ">
                <FAQAccordion />
                <FAQAccordion />
                <FAQAccordion />
                <FAQAccordion />
            </div>
        </>
    )
}
const FAQAccordion = () => {
    const [toggle, setToggle] = React.useState(false)
    return (
        <div className={`${toggle && "border-l-lime border-l-4 bg-neutral-400"}`}>
            <div className={`flex justify-between items-center px-4 ${!toggle && "border-b-2"}`}>
                <div className="py-4  font-medium">
                    How does this course differ from other on the market
                </div>
                <div className={`${toggle && "bg-lime border-lime"} lg:hover:bg-lime lg:hover:border-lime cursor-pointer transition-all rounded-md border-neutral-800 border-2 p-2`}
                    onClick={() => { setToggle(!toggle) }}>
                    <svg className={`w-2.5 transition-transform duration-500  ${toggle ? "rotate-180" : "rotate-0"}`} width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.66678 8.63301C6.3753 9.42376 7.6244 9.42376 8.33292 8.633L13.2447 3.15113C14.2619 2.01593 13.4461 0.226074 11.9116 0.226074H2.08807C0.553565 0.226074 -0.262151 2.01593 0.754994 3.15113L5.66678 8.63301Z" fill="#212121" />
                    </svg>
                </div>
            </div>
            <div className={`p-4 text-sm ${!toggle && "hidden"}`}>
                Lorem ipsum dolor sit amet consectetur. Id dolor integer sit amet. Ipsum semper egestas molestie nibh. Quis elementum nisi felis porttitor at auctor libero. Odio quam aliquam varius sit risus egestas aliquam. Urna iaculis nunc et adipiscing justo neque. Lectus vitae tellus donec montes dolor odio malesuada. Sit tincidunt tincidunt in cursus egestas vitae nam pellentesque. Facilisis quisque vehicula cras praesent purus mauris orci nunc sem. Tortor feugiat pellentesque nunc eu neque sed ultricies lectus. Consectetur eu risus morbi amet maecenas faucibus massa aliquam libero. Eu quam nisl hendrerit lobortis lacus. Vel suspendisse etiam curabitur interdum.
            </div>
        </div>
    )
}
export default ProductpageFaq