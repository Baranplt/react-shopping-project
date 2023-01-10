import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductContent from '../Product/ProductContent'
import ProdctSidebar from '../Product/productSidebar'
import Header from './Header'
import HeaderNav from './HeaderNav'
import { clearCart, incrementCount, decrementCount } from '../../store/reducers/cartReducers';
import { AiFillHome } from 'react-icons/ai'

function Cart() {

    const { cart } = useSelector(state => state.cart)
    console.log(cart)
    const dispatch = useDispatch()

    const clear = (count) => {
        dispatch(clearCart(count))
    }
    const Increment = (id) => {
        dispatch(incrementCount(id))

    }
    const Deccrement = (id) => {
        dispatch(decrementCount(id))
    }
    let totalCart = cart.reduce(function (acc, item) {
        return acc + item.totalPrice
    }, 0)
    console.log('total' + totalCart)
    return (
        <div>
            <div className="header">
                <HeaderNav />
                <Header />
            </div>
            <div className="content container mt-20 flex">
                <div className="sidebar ">
                    <ProdctSidebar width={'280px'} />
                </div>
                <div className='w-full ml-10'>

                    <div className="title w-full flex items-center justify-between p-4 bg-[#f7f7f7]">
                        <div className="text  font-medium leading-5">
                            SHOPPING CART
                        </div>


                        <div className="icon flex items-center">
                            <span className='pr-5 border-r border-black  hover:text-primary transition-all duration-300 cursor-pointer'><AiFillHome /></span>
                            <span className='ml-3 text-sm leading-5 tracking-wider hover:text-primary transition-all duration-300 cursor-pointer'>Shopping Cart</span>
                        </div>
                    </div>

                    {
                        cart.length > 0 && <div className="header bg-[#f7f7f7] border mt-5  flex">
                            <div className="img px-5 w-2/12 flex p-4 justify-center items-center   border-r-2">
                                İmage
                            </div>
                            <div className="name  w-3/12 flex  items-center   px-4  border-r-2  text-sm leading-5 tracking-wider capitalize">
                                PRODUCT NAME
                            </div>
                            <div className="model  w-3/12 flex  items-center   px-4  border-r-2  text-xs leading-5 tracking-wider capitalize">
                                MODEL
                            </div>
                            <div className="count  w-3/12 flex  items-center   px-4  border-r-2  text-sm leading-5 tracking-wider capitalize">
                                QUANTITY
                            </div>

                            <div className="price px-5 w-2/12 flex  items-center justify-end border-r-2">
                                UNIT PRICE
                            </div>

                            <div className="totalPrice px-5 w-2/12 flex   items-center justify-end border-r-2">

                                TOTAL
                            </div>
                        </div>
                    }

                    {
                        cart.map((item, index) => {
                            return (
                                <div key={index} className='flex w-full  border items-stretch '>
                                    <div className="img p-5 w-2/12 flex justify-center items-center  h-24 border-r-2">
                                        <img className='w-auto h-auto max-w-full max-h-full' src={item.img} alt="" />
                                    </div>
                                    <div className="name  w-3/12 flex  items-center  py-3 px-4  border-r-2  text-sm leading-5 tracking-wider capitalize">
                                        {item.title}
                                    </div>
                                    <div className="model  w-3/12 flex  items-center  py-3 px-4  border-r-2  text-xs leading-5 tracking-wider capitalize">
                                        Product 15
                                    </div>
                                    <div className="count  w-3/12 flex  items-center  py-3 px-4  border-r-2  text-sm leading-5 tracking-wider capitalize">
                                        {item.count}
                                        <div className="btn ml-5">
                                            <button onClick={() => {
                                                Increment(item.id)
                                            }} className='bg-green-600 w-6 h-6 mx-2 rounded-full text-white font-bold'> +</button>
                                            <button
                                                onClick={() => {
                                                    Deccrement(item.id)
                                                }}
                                                className='bg-red-600 w-6 h-6  rounded-full text-white font-bold'>-</button>
                                        </div>
                                    </div>

                                    <div className="price px-5 w-2/12 flex  items-center justify-end border-r-2">
                                        $ {item.price}
                                    </div>

                                    <div className="totalPrice px-5 w-2/12 flex   items-center justify-end border-r-2">

                                        $  {item.totalPrice}
                                    </div>



                                </div>
                            )
                        })
                    }


                    {
                        cart.length > 0 && <div className='flex flex-col mt-5'>


                            <span className=' font-medium leading-5'>Cart Total = {totalCart}</span>
                            <button className='bg-red-700 w-1/12 py-1 px-2 rounded-full text-white text-sm mt-5' onClick={() => {
                                clear([])
                            }}> clear cart</button>
                        </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default Cart