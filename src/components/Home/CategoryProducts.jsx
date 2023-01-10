import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Slider from "react-slick";

import { getProducts, getCategories } from '../../services/api'
import CategoryProductsItem from './CategoryProductsItem';

function CategoryProducts() {
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
        slidesToShow: 8,
        slidesToScroll: 1,
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
                    infinite: true,

                }
            },
            {
                breakpoint: 100,
                settings: {

                    slidesToShow: 1,
                    infinite: true,
                    slidesToScroll: 1
                }
            }
            ,

        ]
    };
    const [category, setcategory] = useState([])

    async function getCategoriesList() {
        try {
            let response = await getCategories()
            setcategory(response.data)


        } catch (error) {
        } finally {
        }
    }
    useEffect(() => {
        getCategoriesList()
    }, [])

    return (
        <div className='container mt-20'>
            <div className="header border-b pb-3 my-5 flex items-center justify-between">
                <h1 className='text-2xl font-bold leading-10'>Category Products</h1>
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
                    category.map((item, index) => {
                        return (
                            <CategoryProductsItem key={index} item={item} />
                        )
                    })
                }

            </Slider>
        </div>
    )
}

export default CategoryProducts