import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Slider from "react-slick";
import DealProductsItem from '../DealProductsItem';

import { getProducts } from '../../../services/api'
import CategoriesItem from './CategoriesItem';
import { NavLink } from 'react-router-dom';

function Accessories() {
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
        className: 'Categories-slider',
        slidesToShow: 1,

        slidesToScroll: 1,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        accessibility: true,
        arrows: false,
        infinite: true,
        rows: 3,
        slidesPerRow: 1,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 3,
                    infinite: true,
                    slidesPerRow: 1,

                }
            },
            {
                breakpoint: 100,
                settings: {

                    rows: 3,
                    slidesToShow: 1,
                    infinite: true,
                    slidesToScroll: 1
                }
            }
            ,

        ]
    };
    const [products, setProducts] = useState([])
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

        <div className="slider relative  ">

            <div className="header border-b pb-3 my-5 flex items-center justify-between">
                <h1 className='text-2xl font-bold leading-10'>Accessories</h1>
                <div className='flex '>

                    <button className="border cursor-pointer hover:bg-black hover:text-white transition-all duration-500 border-[#eee] rounded-md w-9 h-9  m-1 flex justify-center items-center" onClick={() => { previous() }}>
                        <IoIosArrowBack />
                    </button>
                    <button className="border cursor-pointer hover:bg-black hover:text-white transition-all duration-500 border-[#eee] rounded-md w-9 h-9  m-1 flex justify-center items-center" onClick={() => { next() }}>
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>

            <Slider ref={slider} {...settings}>
                {
                    products.map((item, index) => {
                        return (

                            <div key={index} className="item mb-5  ">
                                <CategoriesItem item={item} index={index} />
                            </div>)
                    })
                }


            </Slider>



        </div>
    )
}

export default Accessories