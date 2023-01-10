import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/api'
import ProductItem from './productItem';
import { NavLink } from 'react-router-dom'

function ProductsBody() {
    const [products, setProducts] = useState([])
    const [itemHover, setItemHover] = useState(-1)
    const hovered = (index) => {
        setItemHover(index)
    }

    async function getProductsList() {
        try {
            let params = {
                limit: 12
            }
            let response = await getProducts(params)
            setProducts(response.data.products)


        } catch (error) {
        } finally {
        }
    }
    useEffect(() => {
        getProductsList()
    }, [])

    return (
        <div className="products-body w-full grid grid-cols-1 mt-5  lg:mt-16 lg:flex ">
            <div className="lg:w-9/12 w-full grid grid-cols-2 lg:grid-cols-4 gap-5 ">
                {
                    products.map((item, index) => {
                        return (
                            /* <NavLink key={index} to={`product/${item.id}`}>*/

                            <ProductItem key={index} itemHover={itemHover} index={index} item={item} onMouseOver={() => { hovered(index) }} onMouseOut={() => { hovered(-1) }} />


                        )
                    })
                }

            </div>

            <div className=" w-full lg:w-3/12 hidden lg:block  ml-9">
                <div className="item  h-full">
                    <div className="item-Product-left  relative">
                        <div className="img w-full h-full ">
                            <img className='w-auto h-auto max-w-full max-h-full' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/prductbanner/banner1.jpg" alt="" />

                        </div>

                        <div className="minTitle right-5">
                            Smart Device
                        </div>
                        <div className="title right-5 text-white">
                            New Arrival
                        </div>
                        <div className="pops right-5">
                            Get 10% Off
                        </div>
                        <div className=" absolute  border-b bottom-3 right-5 border-white  text-white cursor-pointer">Shop Now</div>
                    </div>
                    <div className="item-Product-left my-20  relative">
                        <div className="img w-full h-full ">
                            <img className='w-auto h-auto max-w-full max-h-full' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/prductbanner/banner2.jpg" alt="" />

                        </div>

                        <div className="minTitle right-5">
                            Smart Device
                        </div>
                        <div className="title right-5 ">
                            New Arrival
                        </div>
                        <div className="pops right-5">
                            Get 10% Off
                        </div>
                        <div className=" absolute  border-b bottom-3 right-5 border-black  text-black cursor-pointer">Shop Now</div>
                    </div>
                    <div className="item-Product-left  relative">
                        <div className="img w-full h-full ">
                            <img className='w-auto h-auto max-w-full max-h-full' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/prductbanner/banner1.jpg" alt="" />

                        </div>

                        <div className="minTitle right-5">
                            Smart Device
                        </div>
                        <div className="title right-5  text-white">
                            New Arrival
                        </div>
                        <div className="pops right-5">
                            Get 10% Off
                        </div>
                        <div className=" absolute  border-b bottom-3 right-5 border-white  text-white cursor-pointer">Shop Now</div>
                    </div>






                </div>

            </div>
        </div>
    )
}

export default ProductsBody