import React from 'react'
import NavBar from '../components/NavBar'
import imj from "../images/pexels-about.jpg"
import boss from "../images/peterboss.jpg"
import farm from "../images/largefarm.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faPagelines, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import TeamSection from '../components/TeamSection'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
    <NavBar/>
      <div className="flex flex-col h-96 justify-center flex items-center bg-fixed bg-center bg-cover opacity-90" style={{ backgroundImage: `url(${imj})` }}>
        <h1 className='text-6xl text-white font-bold'>About</h1>
        <h3 className='animate__animated animate__hinge  text-gray-400'>HOME > ABOUT</h3>
      </div>

      <div className='flex flex-col md:flex-row md:p-24 md:space-x-8'>
        <div className="scroll-animate animate__slideInUp  md:w-1/2 md:p-16 rounded-md">
            <img className="md:pl-8 rounded-md bg-lime-400" src={farm} alt="partners"/>
        </div>

        <div className='scroll-animate animate__slideInUp md:w-1/2 flex flex-col p-12 space-y-4'>
            <div className='flex space-x-4'> <FontAwesomeIcon className="text-xl text-lime-400" icon={faPagelines} /> <h3 className='text-base font-base'>About Healthy Harvest Agriventures </h3>
            </div>
            <h2 className='text-4xl block font-bold'>We're Partner of Your Agricultural Adventures</h2>
            <p className='text-base block justify-normal pt-4'>Healthy Harvest Agriventures is a provider of agricultural partnership services. We have helped our clients break into the agricultural sector, by providing expertise and experience on how to maximize profits by partnering with them in our company's agricultural endevours.</p>

            <div className='flex flex-wrap pt-8'>

                <div className='flex p-2 w-1/2 space-x-4'>
                <FontAwesomeIcon icon={faCheck} className='text-lime-400 text-xl'/>
                <p><span className='font-semibold'>Quality Products</span></p>
                </div>

                <div className='flex p-2  w-1/2 space-x-4'>
                <FontAwesomeIcon icon={faCheck} className='text-lime-400 text-xl'/>
                <p><span className='font-semibold'>Guaranteed Profits</span></p>
                </div>

                <div className='flex p-2  w-1/2 space-x-4'>
                <FontAwesomeIcon icon={faCheck} className='text-lime-400 text-xl'/>
                <p><span className='font-semibold'>Top Service</span></p>
                </div>

                <div className='flex p-2  w-1/2 space-x-4'>
                <FontAwesomeIcon icon={faCheck} className='text-lime-400 text-xl'/>
                <p><span className='font-semibold'>Trusted Professionals </span></p>
                </div>

            </div>

            <button className='bg-lime-400 p-4 mx-auto ml-0'>CONTACT US</button>

        </div>

      </div>

      <div>
        <h2 className='py-8 text-center text-4xl'>Meet our Founder</h2>
        <div className='flex flex-col md:flex-row md:px-48'>
            <div className=' h-32 md:w-1/3 '>
                <img src={boss} alt="founder"/>
            </div>

            <div className=' w-full md:w-2/3 p-10'>
                <h3 className='text-4xl font-semibold'> Peter Kioko</h3>
                <h4 className='text-sm font-bold'>HHA Founder</h4>

                <p className='text-base py-4 text-white md:text-black'>
                Meet our visionary founder, Peter Kioko, a passionate entrepreneur with a deep-rooted love for agriculture. With a background in sustainable farming practices and a commitment to quality produce, Peter embarked on a journey to establish our farm. His dedication to organic farming methods and his relentless pursuit of excellence have been the driving forces behind our farm's success.
                </p>
                <div className='flex flex-wrap space-x-2'>
                <FontAwesomeIcon icon={faTwitter} className='text-lime-400 text-base'/>
                <FontAwesomeIcon icon={faFacebook} className='text-lime-400 text-base'/>
                <FontAwesomeIcon icon={faGoogle} className='text-lime-400 text-base'/>
                <FontAwesomeIcon icon={faInstagram} className='text-lime-400 text-base'/>

                </div>



            </div>

        </div>
    
      </div>
        <TeamSection/>
        <Footer/>
    </div>
  )
}

export default About