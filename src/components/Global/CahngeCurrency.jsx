import React from 'react'
import DropDown from './DropDown'
import { BiEuro, BiPound, BiDollar } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'


function CahngeCurrency() {
    const changeCurrency = (item) => {
    }
    const currency = {
        id: 2,
        text: "Currency",
        icon: <IoIosArrowDown />,

        dropDown: [
            {
                icon: <BiEuro />,
                text: "Euro",
                code: 'Eur'

            }, {
                icon: <BiDollar />,
                text: "Dolar",
                code: 'USD'
            },
            {
                icon: <BiPound />,
                text: "Pound",
                code: 'USD'
            }

        ]

    }
    return (
        <DropDown item={currency} handleEvent={changeCurrency} />
    )
}

export default CahngeCurrency