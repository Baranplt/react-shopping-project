import React from 'react'
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoGoogleplus } from 'react-icons/io'
import { BsPinterest, BsTwitter } from 'react-icons/bs'
import ChangeLang from './ChangeLang'
import CahngeCurrency from './CahngeCurrency'
import Account from './Account'


function HeaderNav() {







    return (
        <div className='bg-primary'>
            <div className="container mx-auto">
                <div className='flex  lg:py-2 py-2  items-center justify-between'>
                    <div className="links hidden lg:block">
                        <ul className='flex items-center'>
                            <li className='NavbarLinks'>
                                <a href="$">
                                    <FaFacebookF size={14} /></a>
                            </li>

                            <li className='NavbarLinks'>
                                <a href="#">
                                    <BsTwitter size={14} />
                                </a>
                            </li>
                            <li className='NavbarLinks'>
                                <a href="#">
                                    <AiFillYoutube size={14} />
                                </a>
                            </li>
                            <li className='NavbarLinks'>
                                <a href="#">
                                    <IoLogoGoogleplus size={14} />
                                </a>
                            </li>
                            <li className='NavbarLinks'>
                                <a href="#">
                                    <BsPinterest size={14} />
                                </a>
                            </li>
                            <li className='NavbarLinks bg-transparent'>
                                <a href="#">
                                    <AiFillInstagram size={14} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className=' w-full lg:w-auto' >
                        <ul className='flex justify-center lg:justify-between'>
                            <ChangeLang />
                            <CahngeCurrency />
                            <Account />
                        </ul>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeaderNav