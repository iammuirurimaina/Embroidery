import React from 'react'
import imj from "../images/Designs.jpg"
import blazer from "../images/blazer.jpg"
import hoodie from "../images/pullover.jpg"
import beanie from "../images/beanie.jpg"
import harvest from "../images/fresh-removebg.png"
import boy from "../images/fresh-boy-harvest.png"
import organic from "../images/organic.png"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Products() {
  return (
    <div>
    <NavBar/>
      <div className=" flex flex-col h-96 justify-center flex items-center bg-fixed bg-center bg-cover opacity-90" style={{ backgroundImage: `url(${imj})` }}>
        <h1 className='text-6xl text-white font-bold'>Designs</h1>
        <h3 className='animate__animated animate__hinge  text-gray-200'>Home > Designs</h3>
      </div>
      
    <div className='bg-pink-50 md:p-20'>
      <div className='flex flex-col md:flex-row  justify-center md:space-x-8'>

      <div className='md:w-1/3 flex flex-col text-center md:p-12'>
        <div className='scroll-animate mx-auto justify-center'>
          <img alt="High Quality" src={boy} className='mx-auto h-48'/>
          <h2 className='mt-4 text-2xl font-semibold'> Top Quality</h2>
          <p className='mt-2'>Get the best Quality Embroidery Services</p>
        </div>
      </div>


      <div className='d:w-1/3 flex flex-col text-center md:p-12'>
        <div className='scroll-animate mx-auto'>
        <img src={organic} alt="WIde" className='mx-auto h-48'/>
          <h2 className='mt-4 text-2xl font-semibold'>Wide Selection</h2>
          <p className='mt-2'>Choose from a wide range of designs, materials and services.</p>
        </div>
      </div>


      <div className='md:w-1/3 flex flex-col text-center md:p-12'>
        <div className='scroll-animate mx-auto'>
        <img src={harvest} alt="Customer Service" className='mx-auto h-48'/>
          <h2 className='mt-4 text-2xl font-semibold'>Customer Service</h2>
          <p className='mt-2'>We are always available for any questions or feedback</p>
        </div>
      </div>
    </div>
    </div>

    <div className='bg-gray-100 pattern-diagonal-lines-sm'>
      <div className='scroll-animate flex flex-col md:flex-row p-14 justify-center'>
        <div className='md:w-1/2 flex justify-center'>
          <img src= {blazer} alt="Blazer" className='w-96'/>
        </div>
        <div className='md:w-1/2 md:pr-24'>
          <h1 className='text-5xl font-bold py-6'>Shirts & Blazers</h1>
          <p className='text-xl font-bold py-4'>Official and Casual</p>
          <p className='text-base'>Clean Logos for School and Company Shirts </p>
        </div>
      </div>

      <div className='scroll-animate flex flex-col  md:flex-row-reverse p-14 justify-center'>
        <div className='md:w-1/2 flex justify-center'>
          <img src= {hoodie} alt="Jacket" className='w-96'/>
        </div>
        <div className='md:w-1/2 md:pl-24'>
          <h1 className='text-5xl font-bold py-6'>Jackets and Hoodies</h1>
          <p className='text-xl font-bold py-4'>Cold Weather Apparel</p>
          <p className='text-base'>Display your Logo even during cold seasons </p>
        </div>
      </div>

      <div className='scroll-animate flex flex-col md:flex-row  p-14 justify-center'>
        <div className='md:w-1/2 flex justify-center'>
          <img src= {beanie} alt="Beanie" className='w-96'/>
        </div>
        <div className='md:w-1/2 md:pr-24'>
          
          <h1 className='text-5xl font-bold py-6'>Head-gear</h1>
          <p className='text-xl font-bold py-4'>Hats and Caps</p>
          
          <p className='text-base'>Include your Logos on beanies, caps and all kinds of head gear</p>
        </div>
      </div>

     

    </div>


    <Footer/>
    </div>
  

  )
}

export default Products