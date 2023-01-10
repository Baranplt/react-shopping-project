import React from 'react'
import { AiOutlineSearch, } from 'react-icons/ai'

function SearchInput() {
    return (
        <div className='search  flex items-center h-full '>
            <div className="search w-full flex items-center   border h-full   px-2 rounded-full rounded-tr-none rounded-br-none  ">

                <input placeholder='Search Out Catalogue ' type="text" className='outline-none text-xs py-3 ' />
            </div>
            <div className='h-full  w-16  bg-primary rounded-tr-full rounded-br-full'>
                <button className='flex justify-center items-center text-center text-xl py-3  w-full h-full  text-white font-bold'><AiOutlineSearch /></button>
            </div>
        </div>
    )
}

export default SearchInput