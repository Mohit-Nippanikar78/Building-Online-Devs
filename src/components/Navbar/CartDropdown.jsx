import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CartDropdown = () => {
    let { data } = useSelector(state => state.navbar)
    return (
        <div className={`mt-2 top-0 rounded-lg right-0 py-4 px-6 gap-4 bg-white  max-w-max z-50 fixed flex flex-col items-center w-full `}
            style={{ right: (data[7].dropdown.right), top: data[7].dropdown.top + 40 }}
        >
            <div className="flex items-center bg-white  text-black ">
                <img src="/images/course-1-thumbnail.png" className='w-16 h-16' alt="" />
                <div className="flex gap-4 px-4">
                    <div>
                        <p className="text-sm">Product</p>
                        <p className="text-sm font-semibold">The Complete Web</p>
                    </div>
                    <div>
                        <p className="text-sm">Type</p>
                        <p className="text-sm font-semibold">Video</p>
                    </div>
                    <div>
                        <p className="text-sm">QTY</p>
                        <p className="text-sm font-semibold">3</p>
                    </div>
                    <div>
                        <p className="text-sm text-right">Total</p>
                        <p className="text-sm font-semibold">$10.00</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center bg-white  text-black ">
                <img src="/images/course-1-thumbnail.png" className='w-16 h-16' alt="" />
                <div className="flex gap-4 px-4">
                    <div>
                        <p className="text-sm">Product</p>
                        <p className="text-sm font-semibold">The Complete Web</p>
                    </div>
                    <div>
                        <p className="text-sm">Type</p>
                        <p className="text-sm font-semibold">Video</p>
                    </div>
                    <div>
                        <p className="text-sm">QTY</p>
                        <p className="text-sm font-semibold">3</p>
                    </div>
                    <div>
                        <p className="text-sm text-right">Total</p>
                        <p className="text-sm font-semibold">$10.00</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center bg-white  text-black ">
                <img src="/images/course-1-thumbnail.png" className='w-16 h-16' alt="" />
                <div className="flex gap-4 px-4">
                    <div>
                        <p className="text-sm">Product</p>
                        <p className="text-sm font-semibold">The Complete Web</p>
                    </div>
                    <div>
                        <p className="text-sm">Type</p>
                        <p className="text-sm font-semibold">Video</p>
                    </div>
                    <div>
                        <p className="text-sm">QTY</p>
                        <p className="text-sm font-semibold">3</p>
                    </div>
                    <div>
                        <p className="text-sm text-right">Total</p>
                        <p className="text-sm font-semibold">$10.00</p>
                    </div>
                </div>
            </div>


            <button className={`border-[#212121] text-[#212121] w-full capitalize text-sm  transition-all duration-700 hover:bg-lime  hover:text-black hover:shadow-lg hover:border-lime px-3 py-1.5 rounded-md   border-2 `}>
                Secure Checkout
            </button>

        </div>
    )
}

export default CartDropdown