import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Slider from "react-slick";
import { getProducts } from '../../services/api'
import DealProductsItem from './DealProductsItem';
function Blog() {

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
        slidesToShow: 4,

        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
    const data = [
        {
            img: "https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/blog/8-1250x974.jpg",
            title: "Proin faucibus massa tristique",
            desc: " Lorem Ipsum is simply dummy text of the printing and typesetting indus... "
        }, {
            img: "https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/blog/6-1250x974.jpg",
            title: "Proin faucibus massa tristique",
            desc: " Lorem Ipsum is simply dummy text of the printing and typesetting indus... "
        }, {
            img: "https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/blog/7-1250x974.jpg",
            title: "Proin faucibus massa tristique",
            desc: " Lorem Ipsum is simply dummy text of the printing and typesetting indus... "
        }, {
            img: "https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/blog/6-1250x974.jpg",
            title: "Proin faucibus massa tristique",
            desc: " Lorem Ipsum is simply dummy text of the printing and typesetting indus... "
        }, {
            img: "https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/blog/5-1250x974.jpg",
            title: "Proin faucibus massa tristique",
            desc: " Lorem Ipsum is simply dummy text of the printing and typesetting indus... "
        }
    ]

    return (
        <div className='container mt-20'>
            <div className="header border-b pb-3 my-5 flex items-center justify-between">
                <h1 className='text-2xl font-bold leading-10'>Our Blog & Latest News</h1>
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
                    data.map((item, index) => {
                        return (
                            <div key={index} className="item   px-5 ">
                                <div className="img w-full flex justify-center items-center  h-72 relative rounded shadow-md">
                                    <img className='w-auto h-auto max-w-full max-h-full rounded ' src={item.img} alt="" />
                                    <div className="date bg-primary absolute text-white text-opacity-90 text-sm bottom-0 left-0 px-2 py-1 rounded">  06 April , 2022</div>
                                </div>
                                <div className="text">
                                    <div className="title font-medium my-2">
                                        {item.title}
                                    </div>

                                    <div className="desc text-[#888] text-sm">
                                        {item.desc}
                                    </div>
                                </div>
                            </div>)
                    })
                }

            </Slider>



        </div>
    )
}

export default Blog