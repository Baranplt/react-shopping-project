import React from 'react'

function CategoryProductsItem({ item }) {
    return (
        <div className="item mx-5 cursor-pointer  flex justify-center flex-col items-center ">

            <div className="itemhdr ">
                <div className="img hover:scale-110 transition-all duration-500 w-full h-36   ">
                    <img className='w-auto h-auto max-w-full max-h-full shadow rounded-lg' src="https://demo.ishithemes.com/opencart/OPC143/OPC143L01/image/cache/catalog/category/Category10-172x172.jpg" alt="" />
                </div>
            </div>
            <div className="btn flex justify-center items-center">
                <button className='font-normal text-xs mt-5 text[#232323] border capitalize border-[#eee] p-[10px] rounded'>
                    {item}
                </button>
            </div>
        </div>
    )
}

export default CategoryProductsItem