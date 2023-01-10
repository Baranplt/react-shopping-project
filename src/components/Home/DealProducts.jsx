import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import { getProducts } from '../../services/api'
import DealProductsItem from './DealProductsItem';

function DealProducts() {

    const slider = useRef()
    function next() {
        slider.current.slickNext();
    }
    function previous() {
        slider.current.slickPrev();
    }
    const settings = {
        dots: false,
        infinite: true,
        className: 'deal-products-slider',
        slidesToShow: 3,

        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        accessibility: true,
        arrows: false,
        infinite: true,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
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
    }, [])


    return (
        <div className="container mt-20 bg-[#fafafa]">

            <div className="header border-b     ">
                <div className=" w-2/12 pt-5 pb-2 ">
                    <h1 className='  text-2xl font-medium leading-10'>Deal Products</h1>
                </div>
            </div>

            <div className="slider relative">

                <Slider ref={slider} {...settings}>
                    {
                        products.map((item, index) => {
                            return (
                                <NavLink key={index} to={`product/${item.id}`}>
                                    <div key={index} className="item px-4 py-5 flex flex-col lg:flex-row ">
                                        <DealProductsItem item={item} />
                                    </div></NavLink>)
                        })
                    }

                </Slider>

                <div className='flex absolute  -top-14 right-0'>

                    <button className="border cursor-pointer hover:bg-black hover:text-white transition-all duration-500 border-[#eee] rounded-md w-9 h-9  m-1 flex justify-center items-center" onClick={() => { previous() }}>
                        <IoIosArrowBack />
                    </button>
                    <button className="border cursor-pointer hover:bg-black hover:text-white transition-all duration-500 border-[#eee] rounded-md w-9 h-9  m-1 flex justify-center items-center" onClick={() => { next() }}>
                        <IoIosArrowForward />
                    </button>
                </div>

            </div>

        </div>
    )
}

export default DealProducts