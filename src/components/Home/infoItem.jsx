import React from 'react'

function infoItem({ item }) {
    return (
        <div className="info-item flex items-center cursor-pointer lg:border-r   ">
            <div className="border border-[#eee] rounded-full p-1">
                <div className="img w-20 rounded-full flex justify-center items-center border  h-20 bg-gray-100 hover:bg-yellow-300">
                    <img className='w-10 h-10' src={item.img} alt="" />
                </div>
            </div>
            <div className="text pl-3">
                <h1 className="title font-medium mb-1 tracking-[0.32px]">{item.title}</h1>
                <span className="desc text-sm  text-[#777]  tracking-[0.32px]">{item.desc}</span>
            </div>
        </div>
    )
}

export default infoItem