import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import hhalogo from "../images/kelogos.png"

function NavBar() {

    const [hamburgerMenu, setHamburgerMenu]= useState(false)

    const toggleMenu = () => {
    setHamburgerMenu(!hamburgerMenu)
  }
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate("/")
  }

  return (
    <nav className='mx-auto flex h-30 text-black bg-red-50'>
      <div className='flex flex-row md:w-2/3 space-x-56'>
      <div className='mx-auto w-1/5' >
        <img  onClick={handleNavigation} src={hhalogo} alt="logo"/>
      </div>

      <div className='hidden md:flex mx-auto md:w-2/5 text-sm justify-between items-center'>
        {/* <Link to="/about"><h2 > About Us</h2></Link>   */}
        <Link to="/products" ><h2> Designs</h2></Link>
        <Link to="/contact-us" ><h2> Contact</h2></Link>
      </div>

      <div className='md:hidden'>
        <button className="text-red-600 bg-red hover:text-black focus:outline-none"
          onClick={toggleMenu}
          >
             <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                { hamburgerMenu ? (
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
                )}
              </svg>
        </button>

      </div>
      </div>
    <div className='w-1/3'>
      {
        hamburgerMenu && (
          <div className='md:hidden'>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-black hover:text-lime-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-black hover:text-lime-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>
              <Link
                to="/products"
                className="text-black hover:text-lime-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Products
              </Link>
              <Link
                to="/contact-us"
                className="text-black hover:text-lime-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact-us
              </Link>
            </div>
            </div>)}
    </div>

    </nav>
  )
}

export default NavBar