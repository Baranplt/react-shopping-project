import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { AiFillEye, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { MdGraphicEq } from 'react-icons/md'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../../store/reducers/cartReducers';
import { TiTickOutline } from 'react-icons/ti'

function CategoriesItem({ item, index }) {
    const [itemHover, setItemHover] = useState(-1)
    const hovered = (index) => {
        setItemHover(index)
    }
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const getProductPage = (id) => {
        navigate(`product/${id}`)
    }

    const addcartItem = (item) => {
        dispatch(addCart(item))
        console.log('ekledi')
    }

    const [tic, setTic] = useState(false)

    function clickTic() {
        setTic(true)

        setTimeout(() => {
            setTic(false)

        }, 1000);
    }
    return (
        <div onMouseOver={() => { hovered(index) }} onMouseOut={() => { hovered(-1) }} className="item  cursor-pointer flex  mx-3  px-1 lg:mx-0 lg:px-0  flex-col lg:flex-row my-3 items-center bg-[#f7f7f7]    border  border-[#eee]   ">
            <div onClick={() => { getProductPage(item.id) }} className=' w-full lg:w-36  h-24 m-4 flex justify-center items-center bg-[#f7f7f7]'>
                <img className='w-auto h-auto max-w-full max-h-full shadow rounded-lg' src={`${itemHover === index ? `${item.images[1]}` : `${item.thumbnail}`} `} alt="" />
            </div>
            <div className="body lg:block  flex flex-col justify-center items-center ">
                <div className="name one">
                    {item.title}
                </div>
                <ReactStars size={20} value={item.rating} isHalf={true} edit={false} />

                {
                    itemHover === index ? <div className={`icon transition-all hidden lg:flex -translate-y-1    `}>
                        <span className='bg-primary mr-1 lg:mr-3 h-8 rounded-full w-8 flex justify-center items-center text-white cursor-pointer'>
                            <AiFillEye />
                        </span>
                        <span className='bg-primary mr-1 lg:mr-3 h-8 rounded-full w-8 flex justify-center items-center text-white cursor-pointer'>
                            <AiOutlineHeart />
                        </span>
                        <span className='bg-primary mr-1 lg:mr-3 h-8 rounded-full w-8 flex justify-center items-center text-white cursor-pointer'>
                            <MdGraphicEq />
                        </span>
                        <span
                            onClick={() => {
                                addcartItem(item)
                                clickTic()
                            }}
                            className='bg-primary mr-1 lg:mr-3 h-8 rounded-full w-8 flex justify-center items-center text-white cursor-pointer'>
                            <AiOutlineShoppingCart />
                            <span className={`transition-all ${tic === true ? 'opacity-100' : 'opacity-0'} text-white  w-28 rounded-full text-[10px]  font-bold z-50  absolute -bottom-7 right-0 py-1 justify-center  bg-green-500 flex items-center`}> <TiTickOutline size={10} />Add To <span className='text-white  px-2 rounded-full  bg-primary'><NavLink to={'/cart'}>Cart</NavLink></span> </span>

                        </span>
                    </div> : <div className="price hidden lg:flex items-center ">
                        <span className="price-new font-normal text-sm">{item.price}</span>
                        <span className="price-old text-sm ml-1 text-[#666] line-through ">$122.00</span>
                    </div>
                }
                <div className="price flex lg:hidden items-center ">
                    <span className="price-new font-normal text-sm">{item.price}</span>
                    <span className="price-old text-sm ml-1 text-[#666] line-through ">$122.00</span>
                </div>
                <div className={`icon transition-all -translate-y-1 lg:hidden  flex  `}>
                    <span className='bg-primary mr-1 lg:mr-3 h-7 rounded-full w-7 mt-2 flex justify-center items-center text-white cursor-pointer'>
                        <AiFillEye />
                    </span>
                    <span className='bg-primary mr-1 lg:mr-3 h-7 rounded-full w-7 mt-2 flex justify-center items-center text-white cursor-pointer'>
                        <AiOutlineHeart />
                    </span>
                    <span className='bg-primary mr-1 lg:mr-3 h-7 rounded-full w-7 mt-2 flex justify-center items-center text-white cursor-pointer'>
                        <MdGraphicEq />
                    </span>
                    <span className='bg-primary mr-1 lg:mr-3 h-7 rounded-full w-7 mt-2 flex justify-center items-center text-white cursor-pointer'>
                        <AiOutlineShoppingCart />

                    </span>
                </div>

            </div>
        </div>
    )
}

export default CategoriesItem