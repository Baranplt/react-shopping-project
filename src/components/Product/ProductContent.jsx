import React, { useState, useRef, useEffect } from 'react'
import { AiFillHome, AiOutlineHeart, AiFillStar } from 'react-icons/ai'
import { GoGraph } from 'react-icons/go'
import { BsFillPencilFill, BsFillInfoCircleFill } from 'react-icons/bs'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { getProduct, getProducts, getComments } from '../../services/api'
import ReactStars from "react-rating-stars-component";
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import ReviewsItem from './ReviewsItem'
import { Formik } from 'formik'
import * as Yup from 'yup';
import ProductItem from '../Home/productItem'
import ReactLoading from 'react-loading';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCart } from '../../store/reducers/cartReducers';

function ProductContent({ productId }) {


    const [item, setItem] = useState([])

    async function getProductDetail() {
        try {
            let response = await getProduct(productId)
            setItem(response.data)
        } catch (error) {
        }
    }


    const [comment, setComment] = useState([])

    async function getCommentDetail() {
        try {
            let response = await getComments(productId)



            let newArr = []

            response.data.comments.map(item => {
                let rating = random()
                item = {
                    ...item,
                    rating,
                }

                newArr.push(item)
            })

            setComment(newArr)


        } catch (error) {
        } finally {

            setLoading(false)

        }
    }

    function random() {
        var precision = 100;
        var randomnum = Math.floor(Math.random() * (5 * precision - 1 * precision) + 1 * precision) / (1 * precision);
        return randomnum
    }




    const [productsRelated, setProductsRelated] = useState([])

    async function getProductsRElatedList() {
        try {
            let params = {
                limit: 5
            }
            let response = await getProducts(params)
            setProductsRelated(response.data.products)
        } catch (error) {
        }
    }



    const [itemHover, setItemHover] = useState(-1)
    const hoveredRelated = (index) => {
        setItemHover(index)
    }
    const settings = {
        dots: false,
        infinite: true,
        className: 'deal-products-slider',
        slidesToShow: 4,

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
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]

    };
    const slider = useRef()
    function next() {
        slider.current.slickNext();
    }
    function previous() {
        slider.current.slickPrev();
    }

    const [isHover, setIshover] = useState()

    function hovered(par) {
        setIshover(par)
    }
    const thirdExample = {
        count: 5,
        size: 25,
        isHalf: false,

        color: "gray",
        activeColor: "yellow",
        onChange: newValue => {
        }
    };

    const settingsRelated = {
        dots: false,
        infinite: true,
        className: 'deal-products-slider',
        slidesToShow: 4,

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
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]

    };

    const sliderRelated = useRef()
    function nextRelated() {

        sliderRelated.current.slickNext();
    }
    function previousRelated() {
        sliderRelated.current.slickPrev();
    }
    useEffect(() => {
        getProductsRElatedList()
        getProductDetail()
    }, [])


    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (isHover === 'Reviews') {
            getCommentDetail()
        }
    }, [isHover])

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const getProductPage = (id) => {
        navigate(`product/${id}`)
    }

    const addcartItem = (item) => {
        dispatch(addCart(item))
        console.log('ekledi')
    }

    return (
        <div className='w-full' >


            <div className='lg:ml-10 ml-0 mb-2 w-full '>
                <div className="header  flex flex-col lg:flex-row items-center bg-[#f7f7f7] p-4  justify-between">
                    <div className="name  font-medium leading-5 ">
                        {item.title}
                    </div>
                    <div className="right flex items-center mt-3 lg:mt-0">
                        <div className="icon border-r border-black pr-2 mr-4 hover:text-[#337ab7] cursor-pointer transition-all duration-300">
                            <AiFillHome />
                        </div>
                        <div className="name text-sm tracking-wider hover:text-[#337ab7] cursor-pointer transition-all duration-300 leading-4">
                            {item.title}


                        </div>
                    </div>
                </div>
                <div className="product grid grid-cols-1 lg:grid-cols-2 gap-x-5 mt-10">
                    <div className='left '>

                        <div className='flex flex-col lg:hidden  mb-5 justify-center items-center'>
                            <span className='text-2xl font-medium'>{item.title}</span>
                            <span className='text-lg  text-[#666]'>${item.price}</span>
                        </div>
                        <div className=' img h-[607px] bg-[#E0E0E0]  flex justify-center items-center'>
                            <img className='w-auto h-auto max-w-full max-h-full' src={item.thumbnail} alt="" />

                        </div>
                        <div className="slider relative  pl-6 lg:pl-0  mt-7 ">
                            <button className="border absolute top-12 z-50 -left-5 bg-white  cursor-pointer  hover:bg-black hover:text-white transition-all duration-500 border-[#eee] rounded-md w-9 h-9  m-1 flex justify-center items-center" onClick={() => { previous() }}>
                                <IoIosArrowBack />
                            </button>
                            <Slider ref={slider} {...settings}>

                                <div className='w-[133px] h-[133px]    flex justify-center items-center'>
                                    <img className='w-max  h-max max-h-full max- border' src='https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/productsimage/10-370x370.jpg' alt="" />
                                </div>
                                <div className='w-[133px] h-[133px]    flex justify-center items-center'>
                                    <img className='w-max  h-max max-h-full max-w-full border' src='https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/productsimage/11-370x370.jpg' alt="" />
                                </div>
                                <div className='w-[133px] h-[133px]    flex justify-center items-center'>
                                    <img className='w-max  h-max max-h-full max-w-full border' src='https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/productsimage/12-370x370.jpg' alt="" />
                                </div>
                                <div className='w-[133px] h-[133px]    flex justify-center items-center'>
                                    <img className='w-max  h-max max-h-full max-w-full border' src='https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/productsimage/13-370x370.jpg' alt="" />
                                </div>
                                <div className='w-[133px] h-[133px]    flex justify-center items-center'>
                                    <img className='w-max  h-max max-h-full max-w-full border' src='https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/productsimage/14-370x370.jpg' alt="" />
                                </div>


                            </Slider>
                            <button className="border absolute top-12 z-50 -right-3 bg-white cursor-pointer hover:bg-black hover:text-white transition-all duration-500 border-[#eee] rounded-md w-9 h-9  m-1 flex justify-center items-center" onClick={() => { next() }}>
                                <IoIosArrowForward />
                            </button>
                        </div>
                        <div className='info mt-5'>
                            <div className="desc py-5 px-4 border-y">
                                <div className="title flex justify-between  items-center">
                                    <h1 className='text-xs font-semibold'> Description  </h1>


                                    <span onClick={() => { hovered('desc') }} className={` cursor-pointer ${isHover === 'desc' ? 'hidden' : 'block'}`} >
                                        <RiArrowDownSLine size={30} />
                                    </span>
                                    <span onClick={() => { hovered('') }} className={`  cursor-pointer ${isHover === 'desc' ? 'block' : 'hidden'} `} >
                                        <RiArrowUpSLine size={30} />
                                    </span>
                                </div>

                                <div className={`text text-xs  text-[$666]  ${isHover === 'desc' ? 'block' : 'hidden'}  `}>
                                    {item.description}
                                    {item.description}
                                    {item.description}
                                    {item.description}
                                    {item.description}
                                    {item.description}
                                    {item.description}
                                    {item.description}
                                    {item.description}
                                    {item.description}
                                </div>
                            </div>
                            <div className="Reviews py-5 px-4 border-y">
                                <div className="title flex justify-between  items-center">
                                    <h1 className='text-xs font-semibold'> Reviews (1)  </h1>


                                    <div onClick={() => { hovered('Reviews') }} className={` cursor-pointer ${isHover === 'Reviews' ? 'hidden' : 'block'}`} >
                                        <RiArrowDownSLine size={30} />
                                    </div>
                                    <span onClick={() => { hovered('') }} className={`  cursor-pointer ${isHover === 'Reviews' ? 'block' : 'hidden'} `} >
                                        <RiArrowUpSLine size={30} />
                                    </span>
                                </div>

                                <div className={`  ${isHover === 'Reviews' ? 'block' : 'hidden'}  `}>

                                    {
                                        loading ? <ReactLoading type={'spin'} color={'black'} height={'10%'} width={'10%'} /> :
                                            comment.map((comment, index) => {
                                                return <ReviewsItem key={index} item={comment} />

                                            })

                                    }
                                    <div className="wirte mt-10">
                                        <div className="title text-xl font-medium">Write a review</div>

                                        <Formik

                                            initialValues={{
                                                name: '',
                                                message: '',
                                            }}
                                            validationSchema={
                                                Yup.object({
                                                    name: Yup.string().required("Error : Please enter valid Name."),
                                                    message: Yup.string().required("Error: Review Text must be between 25 and 1000 characters!")
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
                                                    <form onSubmit={handleSubmit} className='mt-5'>

                                                        <label htmlFor="name" className='text-sm flex'> <span className='text-[#f00] mr-1 text-[10px]'><AiFillStar /></span>  Your Name</label>
                                                        <input
                                                            type="text"
                                                            id='name'
                                                            className=" border mb-3 mt-1 focus:outline-none p-2 text-sm  w-full    "
                                                            value={values.name}
                                                            onChange={handleChange}
                                                            autoComplete="off"

                                                        />
                                                        {errors.name && touched.name && <div className='bg-[#FECACA] my-2 p-1 text-[#a94442] text-center'>{errors.name}</div>}

                                                        <label htmlFor="message" className='text-sm flex'> <span className='text-[#f00] mr-1 text-[10px]'><AiFillStar /></span>  Your Review</label>

                                                        <textarea
                                                            className='w-full mb-3 mt-1 border focus:outline-none'
                                                            name="message"
                                                            id="message"
                                                            value={values.message}
                                                            onChange={handleChange}
                                                            cols="30"
                                                            rows="4"></textarea>

                                                        {errors.name && touched.message && <div className='bg-[#FECACA] my-2 p-1 text-[#a94442] text-center'>{errors.message}</div>}

                                                        <span className='flex items-center'>
                                                            <label htmlFor="Rating" className='text-sm flex mr-3'> <span className='text-[#f00] mr-1 text-[10px]'><AiFillStar /></span> Rating</label>
                                                            <ReactStars {...thirdExample} />
                                                        </span>

                                                        <div className="btn w-full flex justify-end">
                                                            <button type='submit' className="add bg-[#ffd200] py-2 px-4 text-sm rounded-full hover:bg-primary hover:text-white transition-all duration-500 mr-2">Continue</button>

                                                        </div>

                                                    </form>
                                                )
                                            }




                                        </Formik>



                                    </div>
                                </div>


                            </div>
                            <div className="serticate py-5 px-4 border-y">
                                <div className="title flex justify-between  items-center">
                                    <h1 className='text-xs font-semibold'> Specification  </h1>


                                    <span onClick={() => { hovered('Specification') }} className={` cursor-pointer ${isHover === 'Specification' ? 'hidden' : 'block'}`} >
                                        <RiArrowDownSLine size={30} />
                                    </span>
                                    <span onClick={() => { hovered('') }} className={`  cursor-pointer ${isHover === 'Specification' ? 'block' : 'hidden'} `} >
                                        <RiArrowUpSLine size={30} />
                                    </span>
                                </div>

                                <div className={`text text-xs  text-[$666]  ${isHover === 'Specification' ? 'block' : 'hidden'}  `}>

                                    <div className="Specification mt-5 border">
                                        <div className="hdr flex font-medium text-sm  px-4 justify-between bg-[#f7f7f7]">
                                            <div className="name  w-6/12  py-3">
                                                Processor
                                            </div>

                                        </div>
                                        <div className=' py-1 px-2 flex items-center'>
                                            <span className='text-sm font-medium border-r py-2 leading-5 w-6/12 text-[#888]'>
                                                Clockspeed
                                            </span>
                                            <span className='w-6/12 ml-1'>
                                                100mhz

                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>

                    <div className="right  z-20 ">
                        <div className="name hidden lg:block text-3xl font-medium capitalize leading-8 tracking-wider border-b pb-3">
                            {item.title}
                        </div>
                        <div className="share mt-1 border-b py-3">
                            <span className='text-sm font-normal leading-5 text-[#888] tracking-wider'>Share</span>
                            <div className="star flex my-2 items-center">
                                <ReactStars size={18} value={item.rating} isHalf={true} edit={false} />
                                <div className="comment ml-4 text-sm leading-5 text-[#888]">
                                    1 reviews
                                </div>
                                <div className="pops ml-4 text-sm leading-5 text-[#888]">
                                    /
                                </div>
                                <div className="write flex items-center ml-4 text-sm leading-5 text-[#888]">
                                    <BsFillPencilFill className='mr-2 ' size={13} /> Write a review
                                </div>
                            </div>
                            <div className="price hidden lg:block text-[22px] font-medium">
                                $   {item.price}
                            </div>

                        </div>
                        <div className="tax py-4 text-sm leading-5  border-b ">
                            Ex Tax: $100.00

                        </div>
                        <div className="stock my-4  bg-[#D9EDF7] py-3 text-center text-[#31708f] text-sm flex items-center justify-center" >
                            <BsFillInfoCircleFill className='mr-3' />   This product has {item.stock} stock
                        </div>
                        <div className="qty flex items-center border-b py-5">
                            <span>Qty</span>
                            <input className='w-20 h-10 outline-none border text-center mx-2' type="number" />
                            <button onClick={() => { addcartItem(item) }} className="add bg-[#ffd200] py-2 px-4 text-sm rounded-full hover:bg-primary hover:text-white transition-all duration-500 mr-2  focus:bg-green-600 focus:text-white ">ADD TO CART</button>
                            <span className='bg-primary w-10 h-10 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-[#ffd200] hover:text-black transition-all duration-500 mr-2 '><AiOutlineHeart size={25} /></span>
                            <span className='bg-primary w-10 h-10 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-[#ffd200] hover:text-black transition-all duration-500  mr-2'><GoGraph size={20} /></span>
                        </div>

                        <div className='flex flex-wrap mt-10'>
                            <div className="marka w-5/12 flex flex-col mr-5 border p-2 text-sm font-normal leading-5 text-[#666] tracking-wider    text-center uppercase">
                                <span className='bg-[#f7f7f7] p-1 '>Brand</span>
                                <span className=' mt-2'>{item.brand}</span>
                            </div>
                            <div className="marka w-5/12  flex flex-col border text-center p-2 text-sm font-normal leading-5 text-[#666] tracking-wider  uppercase">
                                <span className='bg-[#f7f7f7] p-1'>PRODUCT CODE:</span>
                                <span className=' mt-2'>{item.id}</span>
                            </div>
                            <div className="marka w-5/12  flex flex-col border p-2  text-sm font-normal leading-5 text-[#666] tracking-wider mt-5 text-center  uppercase">
                                <span className='bg-[#f7f7f7] p-1'>AVAILABILITY:</span>
                                <span className=' mt-2'>{item.stock}</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='slider grid grid-cols-1 gap-5'>
                    <div className="header border-b pb-3 my-5 flex items-center justify-between">
                        <h1 className='text-2xl font-bold leading-10'>Related Products</h1>
                        <div className='flex '>

                            <button className="border cursor-pointer hover:bg-black hover:text-white transition-all duration-500 border-[#eee] rounded-md w-9 h-9  m-1 flex justify-center items-center" onClick={() => { previousRelated() }}>
                                <IoIosArrowBack />
                            </button>
                            <button className="border cursor-pointer hover:bg-black hover:text-white transition-all duration-500 border-[#eee] rounded-md w-9 h-9  m-1 flex justify-center items-center" onClick={() => { nextRelated() }}>
                                <IoIosArrowForward />
                            </button>
                        </div>
                    </div>
                    <Slider ref={sliderRelated}  {...settingsRelated}>

                        {
                            productsRelated.map((item, index) => {
                                return (
                                    <div key={index} className='mr-52'> <ProductItem custom={'mx-5'} itemHover={itemHover} index={index} item={item} onMouseOver={() => { hoveredRelated(index) }} onMouseOut={() => { hoveredRelated(-1) }} /></div>
                                )
                            })
                        }
                    </Slider>

                </div>
            </div>

        </div >
    )
}

export default ProductContent