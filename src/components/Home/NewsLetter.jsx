import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { BiMessageCheck } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { TfiYoutube } from 'react-icons/tfi'
import { GrGooglePlus } from 'react-icons/gr'
function NewsLetter() {
    return (
        <div className="news-letter mt-20">
            <div className="container grid lg:grid-cols-2 grid-cols-1 ">
                <div className="banner grid lg:grid-cols-2 grid-cols-1 gap-5 ">
                    <div className="item h-[500px] lg:h-auto flex flex-col  items-center bg-brandArrival">
                        <h1 className="banner-subtitle inline-block font-normal text-sm leading-4 border-b border-[#4c675e] text-[#323c9d] pb-3 tracking-[4px] my-5 " ><span>Sale is </span> &amp; On</h1>
                        <div className="banner-titleblock font-medium text-sm text-[39px] leading-10  mb-4" >New Arrival</div>
                        <div className="banner-desc text-sm font-normal mb-5 py-2 px-16 rounded-md bg-white" >ON DISCOUNT</div>
                        <div className="banner-btn">
                            <span className="btn-primary cursor-pointer font-normal text-xs lg:text-sm border-b border-[#232323]">SHOP NOW</span>
                        </div>
                    </div>
                    <div className="item h-[450px] lg:h-auto flex flex-col justify-end pb-5 items-center bg-brandArrivalcam">
                        <h1 className="banner-subtitleinline-block font-normal text-sm leading-4 border-b border-[#4c675e] text-[#ebcc00] pb-3 tracking-[4px] my-5 " ><span>Get </span> &amp;  10% EXTRA</h1>
                        <div className="banner-title block font-medium  lg:text-[39px]   text-white leading-10  mb-[6px] lg:mb-4" >On Discount</div>
                        <div className="banner-desc text-sm font-normal mb-5 py-2 px-16 rounded-md bg-white" >Friday Sale</div>
                        <div className="banner-btn">
                            <span className="btn-primary cursor-pointer font-normal text-xs  lg:text-sm border-b text-white border-white">SHOP NOW</span>
                        </div>
                    </div>

                </div>

                <div className="form bg-newsLatter pt-16 pb-10 flex flex-col  items-center">
                    <div className='w-9/12 flex flex-col  items-center text-center'>
                        <div className="icon text-primary">
                            <BiMessageCheck size={60} />
                        </div>
                        <h3 className="home-title text-3xl font-medium mt-4">Join Our Newsletter Now</h3>
                        <p className="sub-title text-sm font-normal mt-4">Sign up for all the news about our latest arrivals and get an exclusive early  access shopping</p>
                        <Formik
                            initialValues={{
                                email: ""
                            }}
                            validationSchema={
                                Yup.object({
                                    email: Yup.string().email().required("Error : Please enter valid email address.")
                                })
                            }
                            onSubmit={(values, { resetForm, setSubmitting }) => {
                                setTimeout(() => {
                                    setSubmitting(false)
                                    resetForm()
                                }, 2000);
                            }}
                        >
                            {
                                ({ values, errors, handleSubmit, handleReset, touched, handleChange, dirty, isSubmitting }) => (
                                    <form onSubmit={handleSubmit} className='flex flex-col mt-4  w-full'>

                                        <div className='w-full flex justify-center'>
                                            <input
                                                id="email"
                                                className=" focus:outline-none p-2 text-sm  w-full   lg:w-9/12 rounded-bl-3xl rounded-tl-3xl"
                                                placeholder="Your Mail Adress.."
                                                type="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                autoComplete="off"
                                            />
                                            <button type='onsubmit' className='bg-yellow-400 p-2   rounded-br-3xl rounded-tr-3xl'>
                                                Subscribe
                                            </button>
                                        </div>
                                        {errors.email && touched.email && <div className='bg-[#FECACA] p-1 text-[#a94442]'>{errors.email}</div>}
                                    </form>
                                )
                            }


                        </Formik>

                    </div>
                    <div className="flex items-center mt-5 justify-evenly w-full">
                        <div className="span w-24 lg:w-52 h-1 border-b-2"></div>
                        <h1 className='font-medium text-2xl'>Follow Us</h1>
                        <div className="span w-24 lg:w-52 h-1 border-b-2"></div>

                    </div>
                    <div className='w-10/12 flex flex-col   items-center text-center'>

                        <p className="sub-title text-sm font-normal mt-5">We make consolidating,marketing and tracking your social media website  easy.</p>

                        <div className="icon flex mt-5">
                            <div className="fb cursor-pointer  bg-[#333F9D] mr-3 w-10 h-10 rounded-full flex justify-center items-center text-white">
                                <FaFacebookF size={20} />
                            </div>
                            <div className="tw cursor-pointer bg-[#00aced] mr-3 w-10 h-10 rounded-full flex justify-center items-center text-white">
                                <AiOutlineTwitter size={20} />
                            </div>
                            <div className="yt cursor-pointer bg-[#d12121] mr-3 w-10 h-10 rounded-full flex justify-center items-center text-white">
                                <TfiYoutube size={20} />
                            </div>
                            <div className="gg cursor-pointer bg-[#dc473b] mr-3 w-10 h-10 rounded-full flex justify-center items-center text-white">
                                <GrGooglePlus size={20} />
                            </div>
                            <div className="ins cursor-pointer bg-[#cc2366] mr-3 w-10 h-10 rounded-full flex justify-center items-center text-white">
                                <AiOutlineInstagram size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewsLetter