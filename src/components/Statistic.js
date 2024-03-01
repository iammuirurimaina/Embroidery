import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobeAfrica, faDraftingCompass, faUserClock  } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { faSmile } from '@fortawesome/free-regular-svg-icons'



function Statistic() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-red-500">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div className="scroll-animate animate__slideInUp text-center">
        <div className="text-lime-300 text-xl p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
        <FontAwesomeIcon icon={faGlobeAfrica} />
        </div>
        <h6 className="text-4xl font-bold text-deep-purple-accent-400">
          47
        </h6>
        <p className="mb-2 font-bold text-md">Counties</p>
      </div>
      <div className="scroll-animate animate__slideInUp text-center">
        <div className="text-lime-300 text-xl p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
          <FontAwesomeIcon icon={faDraftingCompass}/>
        </div>
        <h6 className="text-4xl font-bold text-deep-purple-accent-400">
        ∞
        </h6>
        <p className="mb-2 font-bold text-md">Designs</p>
      </div>
      <div className="scroll-animate animate__slideInUp text-center">
        <div className="text-lime-300 text-xl p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
        <FontAwesomeIcon icon={faSmile}/>
        </div>
        <h6 className="text-4xl font-bold text-deep-purple-accent-400">100+</h6>
        <p className="mb-2 font-bold text-md">Happy Customers</p>
      </div>
      <div className="scroll-animate animate__slideInUp text-center">
        <div className="text-lime-300 text-xl p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
          <FontAwesomeIcon icon={faUserClock}/>
        </div>
        <h6 className="text-4xl font-bold text-deep-purple-accent-400">24/7</h6>
        <p className="mb-2 font-bold text-md">Customer Service</p>
      </div>
    </div>
  </div>
  )
}

export default Statistic