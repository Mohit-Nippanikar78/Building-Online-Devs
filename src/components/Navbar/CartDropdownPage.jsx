import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomButton from '../elements/CustomButton'
import { setCartDropdown } from '../../features/Navbar'

const CartDropdownPage = () => {
    let { navbarHeight, data } = useSelector(state => state.navbar)
    let dispatch = useDispatch()
    return (
        <div className="rounded-b-lg z-[51] overflow-y-scroll  absolute w-full bg-navy overflow-hidden transition-all duration-1000   font-poppins text-15px text-white"
            style={{ top: navbarHeight, height: window.innerHeight - navbarHeight, right: data[7].dropdown.toggleDropdown ? "0" : "-100%" }}>
            <div className="flex justify-center py-4">
                <CustomButton text="Back to Main Menu" func={() => { dispatch(setCartDropdown({ toggleDropdown: false })) }} />
            </div>
            {["", "", "", "", ""].map((item, index) => {
                return (<div className="flex flex-col p-2 items-center bg-white m-6 rounded-md   text-black ">
                    <img src="/images/course-1-thumbnail.png" className='w-16 h-16' alt="" />
                    <div className="flex py-4 gap-4 px-4">
                        <div>
                            <p className="text-sm">Product</p>
                            <p className="text-sm font-semibold">The Complete Web</p>
                        </div>
                        <div>
                            <p className="text-sm">Type</p>
                            <p className="text-sm font-semibold">Video</p>
                        </div>
                    </div>
                    <div className="flex  gap-4 px-4">
                        <div>
                            <p className="text-sm">QTY</p>
                            <p className="text-sm font-semibold">3</p>
                        </div>
                        <div>
                            <p className="text-sm text-right">Total</p>
                            <p className="text-sm font-semibold">$10.00</p>
                        </div>
                        <button className="rounded-md border-[#3c3c3c] h-max  p-2 m-auto  border-2 border-solid">
                            <svg className='w-4' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.819 4.41777C15.8196 4.3125 15.8003 4.20814 15.7622 4.11067C15.7241 4.01321 15.668 3.92456 15.5971 3.84982L12.3526 0.45807C12.2811 0.383931 12.1963 0.325275 12.103 0.285466C12.0098 0.245657 11.91 0.225479 11.8093 0.226088C11.7085 0.225479 11.6087 0.245657 11.5155 0.285466C11.4222 0.325275 11.3374 0.383931 11.2659 0.45807L9.10039 2.7219L0.736574 11.4652C0.665653 11.54 0.609543 11.6286 0.571462 11.7261C0.533382 11.8236 0.514079 11.9279 0.514661 12.0332V15.425C0.514661 15.6371 0.595282 15.8406 0.738788 15.9906C0.882294 16.1406 1.07693 16.2249 1.27988 16.2249H4.52439C4.63147 16.231 4.73857 16.2135 4.83876 16.1735C4.93895 16.1335 5.02998 16.072 5.10596 15.9929L13.4239 7.24956L15.5971 5.02573C15.6669 4.9482 15.7238 4.85897 15.7654 4.76175C15.7728 4.69799 15.7728 4.63353 15.7654 4.56976C15.769 4.53253 15.769 4.49501 15.7654 4.45777L15.819 4.41777ZM4.21065 14.625H2.04509V12.3612L9.64369 4.41777L11.8093 6.68161L4.21065 14.625ZM12.8882 5.55369L10.7226 3.28986L11.8093 2.16194L13.9672 4.41777L12.8882 5.55369Z" fill="#212121" />
                            </svg>
                        </button>
                        <button className="rounded-md border-[#3c3c3c] h-max p-1 px-2 m-auto border-2 border-solid">
                            <svg className='w-4' width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.16667 1.09094H14.8333M1.5 4.57579H21.5M19.2778 4.57579L18.4986 16.7952C18.3817 18.6285 18.3232 19.5451 17.9445 20.2402C17.611 20.8521 17.108 21.344 16.5018 21.6512C15.8133 22 14.9346 22 13.1771 22H9.82295C8.06545 22 7.1867 22 6.49815 21.6512C5.89195 21.344 5.38899 20.8521 5.05554 20.2402C4.67679 19.5451 4.61834 18.6285 4.50143 16.7952L3.72222 4.57579" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>

                </div>)
            })}
        </div>
    )
}

export default CartDropdownPage