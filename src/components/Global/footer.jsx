import React, { useState } from 'react'
import { IoCallSharp, IoMailSharp, IoLocationSharp } from 'react-icons/io5'
import { SlArrowDown } from 'react-icons/sl'
import DropDown from './DropDown'
function Footer() {

    const [hover, setHover] = useState(false)

    const hovered = (index) => {
        setHover(index)
    }

    const data = [
        {
            title: "Information",
            list: [
                {
                    text: "About Us"
                },
                {
                    text: "Delivery"
                },
                {
                    text: "Privacy Policy"
                },
                {
                    text: "Terms & Conditions"
                },
                {
                    text: "Information"
                }
            ]
        },
        {
            title: "Extras",
            list: [
                {
                    text: "Brands"
                },
                {
                    text: "Delivery"
                },
                {
                    text: "Gift Certificates"
                },
                {
                    text: "Affiliate"
                },
                {
                    text: "Specials"
                },
                {
                    text: "Site Map"
                }
            ]
        },
        {
            title: "My Account",
            list: [
                {
                    text: "My Account"
                },
                {
                    text: "Delivery"
                },
                {
                    text: "Order History"
                },
                {
                    text: "Wish List"
                },
                {
                    text: "Newsletter"
                },
                {
                    text: "Contact Us"
                }
            ]
        }
    ]
    return (
        <div className='bg-footer'>
            <div className="container pt-20 flex flex-col lg:flex-row text-white">
                <div className="logo w-full lg:w-3/12 lg:block text-center lg:text-start flex  flex-col justify-center items-center">
                    <img src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/catalog/footer-logo.png" alt="" />
                    <p className='text-sm mt-3 leading-6 text-[#eee]'>Get the web and discover streamlined website construction today! Powerful elements, tons of flexible layouts and more inside.Get the web and discover streamlined website construction today! Powerful</p>
                </div>

                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className=" lg:w-2/12 w-full">
                                <span>
                                    <h1 onClick={() => { hovered(index) }} className='text-lg font-medium text-[#ffd200] mb-5 cursor-pointer lg:block flex items-center justify-between'>{item.title} <span className='lg:hidden'><SlArrowDown /> </span>  </h1>
                                    <ul className={` ${hover === index ? 'block' : 'hidden'} lg:block`}>
                                        {
                                            item.list.map((list, index) => {
                                                return <li key={index} className='text-sm tracking-wider leading-4 text-[#eee] my-3 cursor-pointer hover:text-[#ffd200] transition-all duration-300'>{list.text}</li>
                                            })
                                        }
                                    </ul>

                                </span>
                            </div>
                        )
                    })
                }

                <div className="contact">
                    <div className="call flex border-b  border-gray-500 pb-5" >
                        <div className="icon text-3xl text-[#ffd200]">
                            <IoCallSharp />
                        </div>
                        <div className="text ml-3 ">
                            <h1 className='text-[#ffd200] text-lg mb-2'>Company Contact</h1>
                            <span className='text-sm font-medium text-[#eee] leading-5'>900 123456789</span>
                        </div>
                    </div>
                    <div className="mail flex mt-4 border-b  border-gray-500 pb-5" >
                        <div className="icon text-3xl text-[#ffd200]">
                            <IoMailSharp />
                        </div>
                        <div className="text ml-3 ">
                            <h1 className='text-[#ffd200] text-lg mb-2'>Social Enquiries</h1>
                            <span className='text-sm font-medium text-[#eee] leading-5'>info@example.com</span>
                        </div>
                    </div>
                    <div className="location flex mt-4 pb-5" >
                        <div className="icon text-3xl text-[#ffd200]">
                            <IoLocationSharp />
                        </div>
                        <div className="text ml-3 ">
                            <h1 className='text-[#ffd200] text-lg mb-2'>Company Address</h1>
                            <span className='text-sm font-medium text-[#eee] leading-5'>151, Demo Store United States</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t  border-gray-500"></div>
            <div className="container  ">
                <div className="desc flex flex-col lg:flex-row items-center lg:items-start justify-between p-3">

                    <div className="text-sm opacity-70 text-[#eee] ">
                        Powered By OpenCart Your Store © 2023
                    </div>

                    <div className="card flex">
                        <img src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/Payment/american-express-44x30.png" alt="" />
                        <img className='mx-2' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/Payment/discover-44x30.png" alt="" />
                        <img src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/Payment/google-wallet-44x30.png" alt="" />
                        <img className='mx-2' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/Payment/mastercard-44x30.png" alt="" />
                        <img src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/Payment/paypal-44x30.png" alt="" />
                        <img className='mx-2' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/Payment/visa-44x30.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer