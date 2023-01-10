import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="w-full  lg:w-[55%]  mt-8  lg:ml-5 ml-0 ">
                <Slider {...settings}>
                    <div className=" relative w-full h-full bg-black">
                        <h1 className=" sliderTextSave hidden lg:inline-block">SAVE UPTO 50% OFF</h1>
                        <p className="sliderSpanSave ">Latest <br></br> Collection</p>
                        <button className="sliderBtn">Shop Now</button>
                        <img className="w-full h-full" src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/slider/slide-1-855x559.jpg" alt="" />
                    </div>

                    <div className=" relative">
                        <h1 className=" sliderTextWatch  hidden lg:inline-block">SAVE UPTO 50% OFF</h1>
                        <p className="sliderSpanWatch">Big Discount<br></br>  Offer!</p>
                        <button className="sliderBtn">Shop Now</button>


                        <img className="" src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/slider/slide-2-855x559.jpg" alt="" />
                    </div>

                </Slider>
            </div>
        );
    }
}