import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function ProductsHeader() {
    return (
        <div className="">
            <div className="products-header flex items-center justify-between border-b border-[#eee]">
                <div className="text border-b-2 border-primary">
                    <h2 className=' text-xl  lg:text-2xl leading-10'>Latest Products</h2>
                </div>
                <div className="right hidden  lg:flex items-center">
                    <div className="links flex items-center mr-20 ">
                        <button className='focus:border-[#eee] border border-transparent py-3 px-5 text-sm font-normal'>Featured </button>
                        <button className='focus:border-[#eee] border border-transparent py-3 px-5 text-sm font-normal'>Best Sellers </button>
                        <button className='focus:border-[#eee] border border-transparent py-3 px-5 text-sm font-normal'>New Arrivals </button>
                    </div>

                    <div className="icon flex  items-center">
                        <span className='border cursor-pointer hover:bg-black hover:text-white transition-all duration-500 border-[#eee] rounded-md w-9 h-9  m-1 flex justify-center items-center'> <IoIosArrowBack /></span>
                        <span className='border cursor-pointer hover:bg-black hover:text-white transition-all duration-500 border-[#eee] rounded-md w-9 h-9  m-1 flex justify-center items-center'> <IoIosArrowForward /></span>

                    </div>
                </div>

            </div>
            <div className="div">
                <div className="products-mobile-header lg:hidden  flex justify-center">
                    <button className='focus:text-primary border border-transparent py-3 px-2 text-sm font-normal'>Featured </button>
                    <button className='focus:text-primary border border-transparent py-3 px-2 text-sm font-normal'>Best Sellers </button>
                    <button className='focus:text-primary border border-transparent py-3 px-2 text-sm font-normal'>New Arrivals </button>
                </div>
            </div>
        </div>
    )
}

export default ProductsHeader