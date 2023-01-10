import React from 'react'
import Slider from 'react-slick'

function partner() {

    const settings = {
        dots: false,
        infinite: true,
        className: 'deal-products-slider',
        slidesToShow: 4,

        slidesToScroll: 1,
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
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <div className="container mt-10 lg:my-32">
            <div className='bg-[#fafafa] hidden lg:flex justify-evenly py-10'>
                <img className='cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/brand/Brand-Logo-1-200x60.png" alt="" />
                <img className='cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/brand/Brand-Logo-2-200x60.png" alt="" />
                <img className='cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/brand/Brand-Logo-3-200x60.png" alt="" />
                <img className='cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/brand/Brand-Logo-4-200x60.png" alt="" />
                <img className='cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/brand/Brand-Logo-5-200x60.png" alt="" />
                <img className='cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/brand/Brand-Logo-6-200x60.png" alt="" />
            </div>


            <div className="slider lg:hidden">
                <Slider   {...settings}>
                    <div>
                        <img className='cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/brand/Brand-Logo-1-200x60.png" alt="" />

                    </div>
                    <div>
                        <img className='cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/brand/Brand-Logo-2-200x60.png" alt="" />

                    </div>
                    <div>
                        <img className='cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/brand/Brand-Logo-3-200x60.png" alt="" />

                    </div>
                    <div>
                        <img className='cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/brand/Brand-Logo-4-200x60.png" alt="" />

                    </div>
                    <div>

                    </div>
                    <div>
                        <img className='cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/brand/Brand-Logo-5-200x60.png" alt="" />

                    </div>
                    <div>
                        <img className='cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/brand/Brand-Logo-6-200x60.png" alt="" />

                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default partner