import React, { useEffect, useState } from 'react'
import { AiFillEye, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { MdGraphicEq } from 'react-icons/md'
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { addCart } from '../../store/reducers/cartReducers';
import { TiTickOutline } from 'react-icons/ti'
function ProductItem({ item, onMouseOver, onMouseOut, itemHover, index, custom }) {
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
        <div item={item} onMouseOver={onMouseOver} onMouseOut={onMouseOut} className={`item cursor-pointer  border  border-[#eee] rounded-md  ${custom} `}>
            <div onClick={() => { getProductPage(item.id) }} className="item-head px-3 w-full h-52 relative  transition-all  py-2 flex flex-col justify-center items-center">
                <img className='w-auto h-auto max-w-full max-h-full  ' src={`${itemHover === index ? `${item.images[1]}` : `${item.thumbnail}`} `} alt="" />

            </div>
            <span onClick={() => { getProductPage(item.id) }} className='my-3  flex justify-center'> <ReactStars size={30} value={item.rating} isHalf={true} edit={false} /></span>

            <div className="item-body relative     p-2">
                <h1 className=' font-normal  one capitalize'>{item.title}</h1>

                {
                    itemHover === index ?
                        <div className={`icon transition-all -translate-y-1  flex }`}>
                            <span className='bg-primary mr-1 lg:mr-3 h-6 rounded-full w-6 flex justify-center items-center text-white cursor-pointer'>
                                <AiFillEye />
                            </span>
                            <span className='bg-primary mr-1 lg:mr-3 h-6 rounded-full w-6 flex justify-center items-center text-white cursor-pointer'>
                                <AiOutlineHeart />
                            </span>
                            <span className='bg-primary mr-1 lg:mr-3 h-6 rounded-full w-6 flex justify-center items-center text-white cursor-pointer'>
                                <MdGraphicEq />
                            </span>
                            <span
                                onClick={() => {
                                    addcartItem(item)
                                    clickTic()
                                }}
                                className='bg-primary mr-1  relative lg:mr-3 h-6 rounded-full w-6 flex justify-center items-center text-white cursor-pointer'>
                                <AiOutlineShoppingCart />

                                <span className={`transition-all ${tic === true ? 'opacity-100' : 'opacity-0'} text-white px-2 w-32 rounded-full text-xs py-1 font-bold z-50  absolute -top-7 left-0  bg-green-500 flex items-center`}> <TiTickOutline size={20} />Add To <span className='text-white  px-2 rounded-full  bg-primary'><NavLink to={'/cart'}>Cart</NavLink></span></span>
                            </span>
                        </div>
                        : <span className={`price transition-all duration-200 font-medium    flex'}`}>$ {item.price}</span>
                }

            </div>
        </div>
    )
}

export default ProductItem