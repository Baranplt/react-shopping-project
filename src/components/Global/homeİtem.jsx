import React from 'react'

function homeİtem({ item }) {

    return (
        <div className='w-full mt-5 '>
            <div className={`home-item   bg-inherit bg-no-repeat bg-cover bg-center   ${item.bg}`}>
                <div className={`minTitle ${item.position === 'right' ? 'right-5 text-black' : ' left-5 text-white'}`}>
                    {item.minTitle}
                </div>
                <div className={`title   ${item.position === 'right' ? 'right-5 text-black' : ' left-5 text-white'}  `}>
                    <span>
                        {item.title}

                    </span>
                </div>
                <div className={`pops  ${item.position === 'right' ? 'right-2 bg-white' : 'bg-[#ffd200]  left-5 '}`}>
                    {item.pops}

                </div>
                <div className={`btn ${item.position === 'right' ? 'right-5 text-black' : ' left-5 text-white'} `}>
                    {item.btn}

                </div>
            </div>

        </div>
    )
}

export default homeİtem