import React from 'react'
import ReactStars from "react-rating-stars-component";

function ReviewsItem({ item }) {
    return (
        <div className="ReviewsItem mt-5 border">
            <div className="hdr flex font-medium text-sm  px-4 justify-between bg-[#f7f7f7]">
                <div className="name  w-6/12 border-r py-3">
                    {item.user.username}
                </div>
                <div className="date w-6/12 flex justify-end py-3 ">
                    18/05/2019
                </div>
            </div>
            <div className=' py-1 px-2'>
                <span className='text-sm font-medium leading-5 text-[#888]'>
                    {item.body}
                </span>
                <span><ReactStars size={30} value={item.rating} isHalf={true} edit={false} /></span>
            </div>
        </div>
    )
}

export default ReviewsItem