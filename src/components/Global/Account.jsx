import React from 'react'
import DropDown from './DropDown'
import { IoIosArrowDown } from 'react-icons/io'
function Account() {
    const ActiveAccount = (item) => {
    }
    const Account = {
        id: 3,
        text: "Account",
        icon: <IoIosArrowDown />,

        dropDown: [
            {
                text: "Register",

            }, {
                text: "Login",
            },
            {
                text: "With List()",
            }

        ]
    }
    return (
        <DropDown item={Account} handleEvent={ActiveAccount} />
    )
}

export default Account