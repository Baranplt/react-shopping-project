import React, { useEffect, useState } from 'react'

import { AiOutlineBars } from 'react-icons/ai'
import { CiHeart } from 'react-icons/ci'
import { SlBasket } from 'react-icons/sl'
import { BiMessageAltMinus } from 'react-icons/bi'
import { json, NavLink } from 'react-router-dom'
import DropDown from './DropDown'
import SearchInputMobile from './SearchİnputMobile'
import SearchInput from './SearchInput'
import { AiOutlineSearch, } from 'react-icons/ai'
import { BsBasket3 } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import { getCategories } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'



function Header({ BgColor }) {
    const [sideBar, setSideBar] = useState(false)
    const [search, setSearch] = useState(false)
    const openSideBar = (a) => {
        setSideBar(a)
    }
    const openSearch = (a) => {
        setSearch(a)
    }
    const bar =
    {
        text: "View More",
        dropDown: [
            {
                text: "Blog",
            }, {
                text: "Login",
            }, {
                text: "CheckOut",
            }, {
                text: "Wishlist",
            }

        ]

    }

    const MobileDrop =
    {
        text: <AiOutlineBars />,
        dropDown: [
            {
                text: "Home",
            }, {
                text: "Shop",
            }, {
                text: "Services",
            }, {
                text: "Contact",
            }, {
                text: "About Us",
            }
            , {
                text: "FAQs",
            }
            , {
                text: "Blog",
            }
            , {
                text: "Login",
            }

            , {
                text: "Check Out",
            }, {
                text: "Wishlist",
            }



        ]

    }
    const [categories, setCategories] = useState([])

    async function getCategoryList() {
        try {
            let response = await getCategories()
            setCategories(response.data)


        } catch (error) {
        }
    }
    useEffect(() => {
        getCategoryList()
    }, [])

    const { cart } = useSelector(state => state.cart)
    return (
        <div>

            <div className='hidden lg:block relative'>
                <div className='header border-b'>
                    <div className='container mx-auto  flex items-center justify-between mt-2 pb-2 '>

                        <NavLink to={'/'}>
                            <div className="logo w-[100px] h-[33px]  ml-10 flex justify-end ">
                                <img className='w-full h-full' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/Logo.png" alt="" />
                            </div>
                        </NavLink>
                        <span className='w-2/6 h-9 hidden lg:block'>
                            <SearchInput />
                        </span>

                        <div className='flex w-2/12 justify-between  mr-3 '>
                            <div className="favorite flex items-center">
                                <div className="icon  text-4xl mr-1 text-primary">
                                    <CiHeart />
                                </div>
                                <div className="text text-sm">
                                    <h2 className='font-semibold'>Wishlist</h2>
                                    <h2 className='text-gray-600'> 0 items</h2>
                                </div>
                            </div>
                            <div className="basket flex items-center">
                                <NavLink to={'/cart'} className='flex items-center' >

                                    <div className="icon  text-3xl mr-1 text-primary">
                                        <SlBasket />
                                    </div>
                                    <div className="text text-sm">
                                        <h2 className='font-semibold'>Your Cart</h2>
                                        <h2 className='text-gray-600'>{cart.length} items</h2>
                                    </div>
                                </NavLink>

                            </div>
                        </div>
                    </div>

                </div>
                <div className={`headerNav bg-[${BgColor}] `}>
                    <div className="container mx-auto  flex items-center">
                        <div className=" w-full flex justify-between  items-center">
                            <div className='w-[280px]'>
                                <div className=" flex w-full text-white rounded-md bg-primary py-3  text-sm font-normal items-center ">
                                    <span className='mx-3 text-xl'><AiOutlineBars />  </span> <span>Categories</span>
                                </div>
                            </div>

                            <div className="bar">
                                <ul className='flex'>
                                    <li className='headerNavList'><NavLink>Home</NavLink></li>
                                    <li className='headerNavList'><NavLink>Shop</NavLink></li>
                                    <li className='headerNavList'><NavLink>Services</NavLink></li>
                                    <li className='headerNavList'><NavLink>Contact</NavLink></li>
                                    <li className='headerNavList'><NavLink>About Us</NavLink></li>
                                    <li className='headerNavList'><NavLink>FAQs</NavLink></li>
                                    <DropDown TextColor={"headerNavList "} custom={"w-full top-[30px] "} item={bar} />
                                </ul>
                            </div>

                            <div className='flex items-center headerNavList'>
                                <span className='text-xl text-primary mr-2'>
                                    <BiMessageAltMinus />
                                </span>
                                <span className=''>
                                    info@example.com

                                </span>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="header-mobile border-b flex lg:hidden items-center justify-between p-4 ">
                <div className="icon flex text-2xl ">

                    <span onClick={() => { openSideBar(true) }} className='mr-2'><AiOutlineBars /> </span>
                    <div onClick={() => openSearch(!search)}>  <AiOutlineSearch /></div>

                </div>
                <div className={`searcMobile bg-white rounded-full lg:hidden absolute  h-auto transition-all  top-[100px] left-12 ${search ? 'opacity-100   ' : 'opacity-0'}  `}>
                    <SearchInputMobile />
                </div>


                <div className={`sidebarMobile bg-white transition-all duration-500    w-9/12 h-full absolute ${sideBar ? 'opacity-100 z-30 top-0 left-0' : 'opacity-0 -z-10 -left-96 '} `}>

                    <div onClick={() => { openSideBar(false) }} className=' p-3 w-full flex justify-end text-2xl'><GrClose /></div>
                    <ul>

                        {
                            categories.map((item, index) => {
                                return (
                                    <li key={index} className='mobile-sideBarİtem capitalize' >
                                        <NavLink >{item}</NavLink>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
                <div className="logo">
                    <img src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/Logo.png" alt="" />
                </div>
                <div className="basket flex text-2xl  ">
                    <span className='mr-2 '> <DropDown item={MobileDrop} TextColor={'text-black text-2xl'} DropItemCustom={'font-bold'} /> </span>

                    <span> <BsBasket3 /></span>
                </div>
            </div>
        </div>
    )
}



export default Header