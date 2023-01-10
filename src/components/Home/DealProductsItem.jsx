import React from 'react'
import Countdown from 'react-countdown-simple';
import ReactStars from "react-rating-stars-component";

function DealProductsItem({ item }) {
    const oneHour = new Date(
        new Date().setHours(new Date().getHours() + 8760)
    ).toISOString()
    const renderer = ({ days, hours, minutes, seconds }) => (
        <div className='flex'>
            <div className='border w-10 h-10 flex justify-center items-center text-xs text-center font-normal rounded-md mr-2'>{days} Days</div>
            <div className='border w-10 h-10 flex justify-center items-center text-xs text-center font-normal rounded-md mr-2'>{hours} Hours</div>
            <div className='border w-10 h-10 flex justify-center items-center text-xs text-center font-normal rounded-md mr-2'>{minutes} Min</div>
            <div className='border w-10 h-10 flex justify-center items-center bg-yellow-400 text-xs text-center font-normal rounded-md'>{seconds} Sec</div>
        </div>)





    return (
        <div className="item cursor-pointer  mx-4 my-5 lg:flex   border  border-[#eee]">
            <div className='w-full h-52 bg-white p-5   flex flex-col justify-center items-center relative'>
                <img className='w-auto h-auto max-w-full max-h-full shadow rounded-lg' src={item.thumbnail} alt="" />
                <ReactStars size={20} value={item.rating} isHalf={true} edit={false} />
            </div>
            <div className="body  bg-white p-3  ">
                <div className="name my-2">
                    {item.name}
                </div>
                <div className="price flex items-center my-2">
                    <span className="price-new font-bold ">{item.price}</span>
                    <span className="price-old text-sm ml-1 text-[#666] line-through ">$122.00</span>
                </div>

                <div className="time my-2">
                    <Countdown targetDate={oneHour} renderer={renderer} />
                </div>
                <div className="desc text-sm font-normal tre  leading-6">
                    {item.description}
                </div>
            </div>
        </div>

    )
}

export default DealProductsItem