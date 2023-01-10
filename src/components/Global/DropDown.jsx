import React, { useState } from 'react'


function DropDown({ item, handleEvent, TextColor, custom, DropItemCustom }) {

    const [isShow, setIsShow] = useState(false)

    function toggleDropDown(id) {
        setIsShow(!isShow)
    }
    return (


        <li className='  relative list-none ' >
            <a onClick={() => toggleDropDown(item.id)} href="#" className={`NavbarMenu mr-3 ${TextColor ? TextColor : "text-white"}`}>
                {item.text}
                <span className='ml-1'>
                    {item.icon ? item.icon : null

                    }
                </span>
            </a>
            <div className={`DropDown   ${custom ? custom : ' top-[34px]  w-[100px]  lg:w-[160px]'} ${isShow ? '  opacity-100 translate-y-0 z-20 ' : '  opacity-0 -z-30 -translate-y-6'} transition-all duration-700`}>
                <div className='border p-2'>
                    {item.dropDown.map((item, index) => {

                        return (
                            <div onClick={() => handleEvent(item)} key={index} className={`DropDown-item ${DropItemCustom ? DropItemCustom : null}`}>

                                <div className='flex items-center mb-2 text-[#888]'>
                                    {
                                        item.img || item.icon ?
                                            <div className='mr-2'>{item.img ? <img src={item.img} /> : <span>{item.icon}</span>}</div> : null

                                    }
                                    <div className='text-xs '>
                                        {item.text}
                                    </div>
                                </div>

                            </div>
                        )

                    })}
                </div>
            </div>
        </li>


    )
}

export default DropDown