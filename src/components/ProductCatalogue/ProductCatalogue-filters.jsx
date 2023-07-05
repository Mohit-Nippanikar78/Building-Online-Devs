import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllFilters, setContentDropdown, setContentSelected, setFilterOption, setProductDropdown, setProductSelected } from '../../features/Catalogue'
import { useOutsideClick } from '../elements/hooks'
const ProductCatalogueFilters = () => {
    let { filterOption, clearOptions } = useSelector(state => state.catalogue)
    return (
        <div className="flex px-32 justify-between items-center w-full">
            <div className="grid grid-cols-2 gap-4">
                <FilterToggle />
                {clearOptions ? <FilterCancel /> : <div></div>}
                {filterOption && (<>
                    <ProductCatalogueProductDropdown />
                    <ProductCatalogueContentDropdown />
                </>
                )}
            </div> 
            <SortBy/>
        </div>
    )
}

const FilterToggle = () => {
    let dispatch = useDispatch()
    const { filterOption } = useSelector(state => state.catalogue)
    return (
        <button type="button" class="flex items-center w-full justify-center gap-x-1.5 rounded bg-white px-3 py-3 text-sm  text-neutral-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={() => {
                dispatch(setFilterOption(!filterOption))
            }}>
            Filter Options
            {filterOption ? (
                <svg className='ml-5 m-auto' width="14" height="3" viewBox="0 0 14 3" fill="currentColor    " xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.087 2.11457L7.86959 2.11457L6.13046 2.11457L0.913064 2.11457C0.682442 2.11457 0.461264 2.01879 0.298188 1.8483C0.135113 1.67781 0.0434989 1.44658 0.043499 1.20548C0.043499 0.964371 0.135113 0.73314 0.298188 0.562653C0.461264 0.392165 0.682442 0.296386 0.913064 0.296386L6.13046 0.296386L7.86959 0.296386L13.087 0.296387C13.3176 0.296387 13.5388 0.392166 13.7019 0.562654C13.8649 0.733141 13.9565 0.964372 13.9565 1.20548C13.9565 1.44658 13.8649 1.67781 13.7019 1.8483C13.5388 2.01879 13.3176 2.11457 13.087 2.11457Z" fill="#212121" />
                </svg>
            ) : (
                <svg className='ml-5 m-auto' width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.86959 14.5691L7.86959 9.11456L13.087 9.11456C13.3176 9.11456 13.5388 9.01878 13.7019 8.84829C13.8649 8.6778 13.9565 8.44657 13.9565 8.20547C13.9565 7.96436 13.8649 7.73313 13.7019 7.56264C13.5388 7.39216 13.3176 7.29638 13.087 7.29638L7.86959 7.29638L7.86959 1.84183C7.86959 1.60072 7.77797 1.36949 7.6149 1.19901C7.45182 1.02852 7.23064 0.932739 7.00002 0.932739C6.7694 0.932739 6.54822 1.02852 6.38515 1.19901C6.22207 1.36949 6.13046 1.60072 6.13046 1.84183L6.13046 7.29638L0.913065 7.29638C0.682441 7.29638 0.461263 7.39215 0.298189 7.56264C0.135113 7.73313 0.0434997 7.96436 0.0434996 8.20547C0.0434996 8.44657 0.135113 8.6778 0.298189 8.84829C0.461263 9.01878 0.682441 9.11456 0.913065 9.11456L6.13046 9.11456L6.13046 14.5691C6.13046 14.8102 6.22207 15.0414 6.38515 15.2119C6.54822 15.3824 6.7694 15.4782 7.00002 15.4782C7.23064 15.4782 7.45182 15.3824 7.6149 15.2119C7.77797 15.0414 7.86959 14.8102 7.86959 14.5691Z" fill="#212121" />
                </svg>
            )}
        </button>
    )
}
const FilterCancel = () => {
    let dispatch = useDispatch()
    return (
        <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded bg-white px-3 py-3 text-sm  text-neutral-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={() => {
                dispatch(clearAllFilters())
            }}
        >
            Clear All Filters
            <svg className='ml-5 m-auto' width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.919 10.0625L7.22975 6.2056L10.919 2.34865C11.0821 2.17817 11.1737 1.94694 11.1737 1.70583C11.1737 1.46472 11.0821 1.23349 10.919 1.063C10.7559 0.892517 10.5348 0.796739 10.3041 0.796739C10.0735 0.796739 9.85233 0.892517 9.68925 1.06301L6 4.91995L2.31075 1.06301C2.14767 0.892517 1.9265 0.796739 1.69587 0.796739C1.46525 0.796739 1.24407 0.892517 1.081 1.063C0.917922 1.23349 0.826307 1.46472 0.826307 1.70583C0.826307 1.94694 0.917922 2.17817 1.081 2.34865L4.77025 6.2056L1.081 10.0625C0.917922 10.233 0.826307 10.4643 0.826307 10.7054C0.826307 10.9465 0.917922 11.1777 1.081 11.3482C1.24407 11.5187 1.46525 11.6145 1.69587 11.6145C1.92649 11.6145 2.14767 11.5187 2.31075 11.3482L6 7.49125L9.68925 11.3482C9.85233 11.5187 10.0735 11.6145 10.3041 11.6145C10.5348 11.6145 10.7559 11.5187 10.919 11.3482C11.0821 11.1777 11.1737 10.9465 11.1737 10.7054C11.1737 10.4643 11.0821 10.233 10.919 10.0625Z" fill="#212121" />
            </svg>
        </button>)
}
const ProductCatalogueProductDropdown = () => {
    let dispatch = useDispatch()
    const { productDropdown, productTypes } = useSelector(state => state.catalogue)
    return (
        <div class="relative inline-block text-left">
            <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded bg-white px-3 py-2 text-sm  text-neutral-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => {
                    dispatch(setProductDropdown(!productDropdown))
                }}>
                Product Type
                <svg className={`ml-5 m-auto transition-transform duration-500 ${productDropdown ? "rotate-180" : "rotate-0"}`} width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5L5 0L10 5H0Z" fill="#212121" />
                </svg>
            </button>
            <div class={`absolute ${!productDropdown && "hidden"} left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                <div class="py-1" role="none">
                    {productTypes.map(({ id, name, selected, count }) => {
                        if (selected) {
                            return (
                                <button class="text-neutral-900 px-4 py-2 text-sm flex w-full justify-between items-center">
                                    <div>
                                        {name} <span className='text-neutral-600'>({count})</span>
                                    </div>
                                    <div className=' flex items-center '
                                        onClick={() => {
                                            dispatch(setProductSelected({ id, selected: !selected }))
                                        }}
                                    >
                                        <svg className='mr-2' width="2" height="17" viewBox="0 0 2 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="0.59082" y1="2.18557e-08" x2="0.59082" y2="17" stroke="#212121" />
                                        </svg>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path className='fill-infoBlue' d="M10.919 10.0625L7.22975 6.2056L10.919 2.34865C11.0821 2.17817 11.1737 1.94694 11.1737 1.70583C11.1737 1.46472 11.0821 1.23349 10.919 1.063C10.7559 0.892517 10.5348 0.796739 10.3041 0.796739C10.0735 0.796739 9.85233 0.892517 9.68925 1.06301L6 4.91995L2.31075 1.06301C2.14767 0.892517 1.9265 0.796739 1.69587 0.796739C1.46525 0.796739 1.24407 0.892517 1.081 1.063C0.917922 1.23349 0.826307 1.46472 0.826307 1.70583C0.826307 1.94694 0.917922 2.17817 1.081 2.34865L4.77025 6.2056L1.081 10.0625C0.917922 10.233 0.826307 10.4643 0.826307 10.7054C0.826307 10.9465 0.917922 11.1777 1.081 11.3482C1.24407 11.5187 1.46525 11.6145 1.69587 11.6145C1.92649 11.6145 2.14767 11.5187 2.31075 11.3482L6 7.49125L9.68925 11.3482C9.85233 11.5187 10.0735 11.6145 10.3041 11.6145C10.5348 11.6145 10.7559 11.5187 10.919 11.3482C11.0821 11.1777 11.1737 10.9465 11.1737 10.7054C11.1737 10.4643 11.0821 10.233 10.919 10.0625Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </button>)
                        } else {
                            return <button class="text-neutral-600 px-4 py-2 text-sm flex w-full items-center"
                                onClick={() => {
                                    dispatch(setProductSelected({ id, selected: !selected }))
                                }}>{name} <span className='text-neutral-600'>({count})</span></button>
                        }
                    })}

                </div>
            </div>
        </div>)
}
const ProductCatalogueContentDropdown = () => {
    let dispatch = useDispatch()
    const { contentDropdown, contentTypes } = useSelector(state => state.catalogue)
    return (<div class="relative inline-block text-left">
        <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded bg-white px-3 py-2 text-sm  text-neutral-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={() => {
                dispatch(setContentDropdown(!contentDropdown))
            }}>
            Content Type
            <svg className={`ml-5 m-auto transition-transform duration-500 ${contentDropdown ? "rotate-180" : "rotate-0"}`} width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5L5 0L10 5H0Z" fill="#212121" />
            </svg>
        </button>
        <div class={`absolute ${!contentDropdown && "hidden"} left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
            <div class="py-1" >
                {contentTypes.map(({ id, name, selected, count }) => {
                    if (selected) {
                        return (
                            <button class="text-neutral-900 px-4 py-2 text-sm flex w-full justify-between items-center">
                                <div>
                                    {name} <span className='text-neutral-600'>({count})</span>
                                </div>
                                <div className=' flex items-center '
                                    onClick={() => {
                                        dispatch(setContentSelected({ id, selected: !selected }))
                                    }}
                                >
                                    <svg className='mr-2' width="2" height="17" viewBox="0 0 2 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0.59082" y1="2.18557e-08" x2="0.59082" y2="17" stroke="#212121" />
                                    </svg>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path className='fill-infoBlue' d="M10.919 10.0625L7.22975 6.2056L10.919 2.34865C11.0821 2.17817 11.1737 1.94694 11.1737 1.70583C11.1737 1.46472 11.0821 1.23349 10.919 1.063C10.7559 0.892517 10.5348 0.796739 10.3041 0.796739C10.0735 0.796739 9.85233 0.892517 9.68925 1.06301L6 4.91995L2.31075 1.06301C2.14767 0.892517 1.9265 0.796739 1.69587 0.796739C1.46525 0.796739 1.24407 0.892517 1.081 1.063C0.917922 1.23349 0.826307 1.46472 0.826307 1.70583C0.826307 1.94694 0.917922 2.17817 1.081 2.34865L4.77025 6.2056L1.081 10.0625C0.917922 10.233 0.826307 10.4643 0.826307 10.7054C0.826307 10.9465 0.917922 11.1777 1.081 11.3482C1.24407 11.5187 1.46525 11.6145 1.69587 11.6145C1.92649 11.6145 2.14767 11.5187 2.31075 11.3482L6 7.49125L9.68925 11.3482C9.85233 11.5187 10.0735 11.6145 10.3041 11.6145C10.5348 11.6145 10.7559 11.5187 10.919 11.3482C11.0821 11.1777 11.1737 10.9465 11.1737 10.7054C11.1737 10.4643 11.0821 10.233 10.919 10.0625Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </button>)
                    } else {
                        return <button class="text-neutral-600 px-4 py-2 text-sm flex w-full items-center"
                            onClick={() => {
                                dispatch(setContentSelected({ id, selected: !selected }))
                            }}>{name} <span className='text-neutral-600'>({count})</span></button>
                    }
                })}

            </div>
        </div>
    </div>)
}
const SortBy = () => {
    const [toggle, setToggle] = useState(false)
    return (<div class="relative inline-block text-left">
        <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded bg-white px-3 py-2 text-sm  text-neutral-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            onClick={() => {
                setToggle(!toggle)
            }}>
            Sort By
            <svg className={`ml-5 m-auto transition-transform duration-500 ${!toggle ? "rotate-180" : "rotate-0"}`} width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5L5 0L10 5H0Z" fill="#212121" />
            </svg>
        </button>
        <div class={`absolute ${!toggle && "hidden"} right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
            <div class="py-1" role="none">
                {["Date", "createdAt", "UpdatedAt"].map((item) => {
                    return <button class="text-neutral-600 px-4 py-2 text-sm flex w-full items-center hover:text-neutral-900">{item}</button>
                })}
            </div>
        </div>
    </div>)
}
export default ProductCatalogueFilters