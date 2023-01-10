import React from 'react'
import DropDown from './DropDown'
import { IoIosArrowDown } from 'react-icons/io'

export default function ChangeLang() {
    const changeLanguage = (item) => {
    }
    const language =
    {
        id: 1,
        text: "Language",
        icon: <IoIosArrowDown />,
        dropDown: [
            {
                img: "https://demo.ishithemes.com/opencart/OPC143/OPC143L01/catalog/language/en-gb/en-gb.png",
                text: "English",
                code: 'En'
            }, {
                img: "https://demo.ishithemes.com/opencart/OPC143/OPC143L01/catalog/language/ar/ar.png",
                text: "Arabic",
                code: 'Ar'
            }

        ]

    }
    return (
        <DropDown item={language} handleEvent={changeLanguage} />
    )
}
