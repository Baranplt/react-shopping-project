import { AiOutlineRight } from 'react-icons/ai'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../../services/api'

function SideBar() {

    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])

    async function getCategoryList() {
        try {
            let response = await getCategories()
            setCategories(response.data)
            if (response.data.length > 10) {
                setShowItemCount(10)
                return setShowPopularBtn(true)
            }
            setShowItemCount(response.data.length)

        } catch (error) {
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getCategoryList()
    }, [])



    const [showPopulerBtn, setShowPopularBtn] = useState(false)
    const [showItemCount, setShowItemCount] = useState(10)


    function showAll() {
        setShowItemCount(categories.length)
        setShowPopularBtn(false)
    }


    return (
        <div className="sidebar w-[280px] h-auto hidden lg:block  shadow-lg">
            {
                loading && <div>Loading..</div>
            }
            {
                categories.map((item, index) => {
                    return index < showItemCount && <div key={index} className="p-[15px] border-b text-sm font-normal  text-[#666] hover:bg-slate-200 hover:text-primary cursor-pointer mx-1 flex justify-between items-center capitalize"> {item} <span className='text-black'> {item.icon}</span></div>
                })
            }

            {
                showPopulerBtn && <div className='flex justify-center items-center  pt-4'><button className='btn ' onClick={() => { showAll() }}> All Show</button></div>
            }

        </div>
    )
}

export default SideBar