import React from 'react'
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLongArrowAltRight } from 'react-icons/fa'

function HalfNav() {
  return (
    <div className=" hidden md:flex bg-black h-6 text-white">
        <div className='mx-auto  justify-center flex space-x-8 w-2/3'>
            <div className='flex space-x-4 '>
                <FaPhone/>
                <p className=''>(+254) 746260004 </p>
            </div>

            <div className='flex space-x-4'>
                <FaEnvelope/>
                <p className=''>peterkioko@gmail.com </p>
            </div>

            <div className='flex space-x-4'>
                <FaFacebook/>
            </div>
            <div className='flex space-x-4'>
                <FaTwitter/>
            </div>
        </div>
        <div className=' mx-auto w-1/3'>
        
        <p> Contact Us</p>
        </div>

    </div>
  )
}

export default HalfNav