import React from 'react'
import farm from "../images/main1.avif";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "animate.css"
function HeroDiv() {
  return (
    <div className="mx-auto flex flex-col-reverse md:flex-row">
  <div className="animate__animated animate__slideInLeft bg-white z-10 md:py-16 lg:py-16 xl:py-28 w-full xl:w-1/4 md:pl-18 lg:pl-20 xl:pl-24  ">


  <div className='flex flex-wrap p-2 space-x-2 md:space-x-0 lg:p-0 sm:flex-row justify-center md:flex-col'>
  <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold text-center md:text-left mb-2 md:mb-0" style={{ whiteSpace: 'nowrap' }}>
    Turn Your<br />Vision<br />Into Stitched<br />MasterPieces
  </h1>
</div>



    <div className="py-4">
      <p className='text-center md:text-sm md:text-left '>
        <span className="text-transparent sm:text-sm md:text-xs lg:text-xl  bg-clip-text mb-1 font-semibold bg-gradient-to-r from-lime-500 to-sky-500">Kenya Logos </span>
        <br />
        Welcome to our website, where creativity meets embroidery! 
      </p>
    </div>

  <div className="flex flex-row justify-center mb-8 sm:justify-start space-x-8 md:space-x-4 ">
  <button className="bg-green-500 h-12 w-32 text-sm text-white"> <Link to="/contact-us" >Contact us</Link></button>
  <button className=" h-12 w-32 text-sm">
   <Link to="/products" className=' flex gap-x-2 items-center'> Designs <FaLongArrowAltRight className='text-base' /> </Link>
  </button>
  </div>

  </div>
  <div
    className="animate__animated animate__slideInRight w-full md:w-3/4 rounded-2xl mt-4 lg:mt-0"
    style={{
      backgroundImage: `url(${farm})`,
      backgroundSize: "cover",
      flexShrink: 0,
      minHeight: "300px",
    }}
  ></div>
</div>
  )
}

export default HeroDiv