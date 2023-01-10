import React, { useEffect, useRef, useState } from 'react'
import SideBar from './SideBar'
import Slider from './Slider'
import HomeItem from '../Global/homeİtem'
import Discont from './Discount'
import ProductsHeader from './HomeProductsHeader'
import ProductsBody from './HomeProductsBody'
import Info from './info'
import DealProducts from './DealProducts'
import Categories from './Categories/Categories'
import NewsLetter from './NewsLetter'
import CategoryProducts from './CategoryProducts'
import Blog from './blog'
import Partner from './partner'
import Footer from '../Global/footer'
function Home() {


    const homeData = [
        {
            title: "  New Arrival",
            minTitle: "Sale İs ON",
            pops: "   GET 10% OFF",
            btn: "Shop Now",
            bg: "bg-watch"
        },
        {
            title: "Get 40% Off",
            minTitle: " ON  DISCOUNT ",
            pops: "GET 10% OFF",
            btn: "Shop Now",
            bg: "bg-camera",
            position: "right"
        }
    ]



    return (
        <div className='border-t  '>
            <div className=" Hero  bg-[#fafafa]  ">
                <div className="container  pb-8 mx-auto flex flex-col lg:flex-row   ">
                    <SideBar />
                    <Slider />
                    <div className="flex-col  lg:ml-5 ml-0   flex-1   ">
                        {
                            homeData.map((item, index) => {
                                return <HomeItem key={index} item={item} />
                            })
                        }
                    </div>
                </div>

            </div>
            <Discont />
            <div className="products container  mt-14  ">
                <ProductsHeader />

                <ProductsBody />

            </div>
            <Info />
            <DealProducts />

            <div className="marque mt-10 lg:mt-20 ">
                <div className="container rounded  bg-[url('https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/offerblock.jpg')]">
                    <marquee className='flex items-center py-5 text-white' behavior="scroll" direction="left">
                        <p>Flat 25% Off  On All Purchase   <span className='ml-20'>Flat 25% Off  On All Purchase </span> <span className='ml-20'>Flat 25% Off  On All Purchase </span> </p>

                    </marquee>

                </div>
            </div>
            <div className="banner mt-10 lg:mt-20" >
                <div className="container bg-banner bg-contain flex justify-center py-3 lg:py-10 bg-no-repeat text-center ">
                    <div className=' lg:w-3/12'>
                        <h1 className="banner-subtitle hidden lg:inline-block font-normal text-sm leading-4 border-b-2 border-[#f4e8b4]  tracking-[4px] mb-4 " ><span>LAPTOP</span> &amp; PHONES</h1>
                        <div className="banner-title hidden lg:block font-medium text-sm lg:text-[39px] leading-4  lg:leading-10  mb-[6px] lg:mb-4" >Get 20% Off Now</div>
                        <div className="banner-desc text-sm font-normal lg:mb-5 lg:py-2 lg:px-4 rounded-md" >THE DEAL DAY</div>
                        <div className="banner-btn">
                            <span className="btn-primary cursor-pointer font-normal text-xs lg:text-sm border-b border-[#232323]">SHOP NOW</span>
                        </div>
                    </div>
                </div>
            </div>
            <Categories />

            <NewsLetter />
            <CategoryProducts />

            <Blog />
            <Partner />
            <Footer />
        </div>
    )
}

export default Home                     