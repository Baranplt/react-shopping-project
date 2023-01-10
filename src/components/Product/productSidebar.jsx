import React, { useState, useEffect } from 'react'
import { getCategories, getProducts } from '../../services/api'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
function ProductSidebar({ width }) {
    const [categories, setCategories] = useState([])
    const [showPopulerBtn, setShowPopularBtn] = useState(false)
    const [showItemCount, setShowItemCount] = useState(10)

    function showAll() {
        setShowItemCount(categories.length)
        setShowPopularBtn(false)
    }
    async function getCategoryList() {
        try {
            let response = await getCategories()
            setCategories(response.data)
            if (response.data.length > 10) {
                setShowItemCount(10)
                return setShowPopularBtn(true)
            }
            setShowItemCount(response.data.length)

        } catch (error) {
        } finally {
        }
    }
    const [products, setProducts] = useState([])

    async function getProductsList() {
        try {
            let params = {
                limit: 5
            }
            let response = await getProducts(params)
            setProducts(response.data.products)


        } catch (error) {
        } finally {
        }
    }
    useEffect(() => {
        getProductsList()
        getCategoryList()
    }, [])


    const [ishovered, setIshovered] = useState(-1)
    function hovered(par) {
        setIshovered(par)
    }
    return (
        <div className={`lg:w-[${width ? width : '328px'}]  `}>
            <ul className="categories border  ">

                <li className='bg-[#f5f5f5] py-3 px-2 text-lg lg:block flex items-center justify-between font-normal text-[#232323] text-opacity-80'>
                    Categories
                    <span onClick={() => { hovered(1) }} className={`lg:hidden ${ishovered === 1 ? 'hidden' : 'block'}`} >
                        <RiArrowDownSLine size={30} />
                    </span>
                    <span onClick={() => { hovered(-1) }} className={`lg:hidden  ${ishovered === 1 ? 'block' : 'hidden'} `} >
                        <RiArrowUpSLine size={30} />
                    </span>

                </li>
                {
                    categories.map((item, index) => {
                        return index < showItemCount &&
                            <span key={index}>
                                <li className={`   ${ishovered === 1 ? 'block' : 'hidden'} lg:block hover:bg-slate-200 hover:text-primary  py-[10px] pl-2 cursor-pointer  text-sm font-normal text-[#666] mx-1 flex justify-between items-center capitalize`}> {item} <span className='text-black'> {item.icon}</span></li>
                            </span>
                    })


                }
                {
                    showPopulerBtn && <div className=' justify-center items-center hidden lg:flex  my-2 '><button className='btn block border-b' onClick={() => { showAll() }}> All Show</button></div>
                }


            </ul>
            <ul className="bestSellers border mt-10">

                <li className='bg-[#f5f5f5] py-3 px-2 text-lg lg:block flex items-center justify-between font-normal text-[#232323] text-opacity-80'>
                    Best Sellers
                    <span onClick={() => { hovered(2) }} className={`lg:hidden ${ishovered === 2 ? 'hidden' : 'block'}`} >
                        <RiArrowDownSLine size={30} />
                    </span>
                    <span onClick={() => { hovered(-1) }} className={`lg:hidden  ${ishovered === 2 ? 'block' : 'hidden'} `} >
                        <RiArrowUpSLine size={30} />
                    </span>

                </li>   {
                    products.map((item, index) => {
                        return (

                            <li key={index} className={` ${ishovered === 2 ? 'block' : 'hidden'} lg:flex  py-[10px] pl-2 cursor-pointer  text-sm font-normal border-b text-[#666] mx-1 flex  items-center capitalize`}>
                                <div className=' w-24 bg-[#e7e7e7] h-20  flex justify-center items-center mr-5 border-2 p-2'>
                                    <img className='w-auto h-auto max-w-full max-h-full' src={item.images[1]} alt="" />
                                </div>
                                <div className="text flex flex-col">
                                    {item.title}
                                    <span className='text-sm font-medium'>

                                        $ {item.price}
                                    </span>

                                </div>

                            </li>
                        )
                    })
                }
            </ul>
            <div className="banner mt-10 w-full lg:block flex justify-center items-center">
                <img className='cursor-pointer' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/Left-banner-308x358.jpg" alt="" />
            </div>
            <ul className="Latest border mt-10">
                <li className='bg-[#f5f5f5] py-3 px-2 text-lg lg:block flex items-center justify-between font-normal text-[#232323] text-opacity-80'>
                    Latest
                    <span onClick={() => { hovered(3) }} className={`lg:hidden ${ishovered === 3 ? 'hidden' : 'block'}`} >
                        <RiArrowDownSLine size={30} />
                    </span>
                    <span onClick={() => { hovered(-1) }} className={`lg:hidden  ${ishovered === 3 ? 'block' : 'hidden'} `} >
                        <RiArrowUpSLine size={30} />
                    </span>

                </li>
                {
                    products.map((item, index) => {
                        return (
                            <li key={index} className={` ${ishovered === 3 ? 'block' : 'hidden'} lg:flex  py-[10px] pl-2 cursor-pointer  text-sm font-normal border-b text-[#666] mx-1 flex  items-center capitalize`}>

                                <div className=' w-24 bg-[#e7e7e7] h-20  flex justify-center items-center mr-5 border-2 p-2'>
                                    <img className='w-auto h-auto max-w-full max-h-full' src={item.images[1]} alt="" />
                                </div>
                                <div className="text flex flex-col">
                                    {item.title}
                                    <span className='text-sm font-medium'>

                                        $ {item.price}
                                    </span>

                                </div>

                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ProductSidebar