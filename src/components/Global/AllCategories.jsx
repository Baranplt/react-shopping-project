import React from 'react'
import DropDown from './DropDown'
import { IoIosArrowDown } from 'react-icons/io'
function AllCategories() {
    const CategoriesFunc = (item) => {
    }
    const categories =
    {

        text: "All Categoies",
        icon: <IoIosArrowDown />,

        dropDown: [
            {
                text: "Electronic",
            },
            {
                text: "Computer",
            },
            {
                text: "Collection",
            },
            {
                text: "Accessroies",
            },
            {
                text: "Brands",
            },
            {
                text: "Outfits",
            },
            {
                text: "SoftWare",
            },
            {
                text: "Camera",
            },
            {
                text: "Tablets",
            },
            {
                text: "Woffer",
            }
            ,
            {
                text: "Television",
            }


        ]

    }
    return (
        <div className='border-r mr-3'>
            <DropDown TextColor={"text-black opacity-70 text-xs mr-0  "} item={categories} handleEvent={CategoriesFunc} />

        </div>
    )
}

export default AllCategories