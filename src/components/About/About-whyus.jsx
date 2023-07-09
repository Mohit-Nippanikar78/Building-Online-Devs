import React from 'react'
import { CustomButton } from '../elements'

const AboutWhyus = () => {
    return (
        <div className="flex flex-col items-center md:w-full w-auto md:flex-row lg:max-h-[320px] lg:my-32  justify-evenly items-scretch  h-full ">
            <div className="flex  justify-center  lg:rounded-md  flex-col text-white lg:max-w-lg  lg:bg-[#F1F1F110] px-6 py-8  h-full ">
                <div className="text-3xl font-bold capitalize ">
                    Why we are beating the competition
                </div>
                <div className="font-normal  py-6 text-xs">
                    <div>
                        Lorem ipsum dolor sit amet consectetur. Quisque mattis pretium amet magna ac nunc odio id ac. Sed velit ullamcorper sed duis rhoncus est. Dignissim eu dolor arcu pulvinar mus urna. Sodales proin feugiat magna vitae laoreet libero.
                    </div>
                    <div className="mt-4">
                        Adipiscing elit gravida tristique donec ac et. Quam odio nibh auctor tellus id pulvinar ornare tristique. Lectus nulla risus sed dolor a mauris in eu metus. Gravida neque ultrices commodo ornare a semper diam. Interdum egestas id id etiam interdum nunc ut magnis sodales. Integer nulla pellentesque posuere.
                    </div>
                </div>
                <CustomButton text="Explore Resources" />
            </div>
            <img
                src="/images/about/whyus-mobile.png"
                className="lg:hidden"
                alt=""
            />
            <img
                src="/images/about/whyus.png"
                className="hidden lg:block lg:w-[500px] lg:h-[320px]"
                alt=""
            />

        </div>
    )
}

export default AboutWhyus