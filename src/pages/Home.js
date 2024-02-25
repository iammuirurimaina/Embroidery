import React from 'react'
import HalfNav from '../components/HalfNav'
import NavBar from '../components/NavBar'
import HeroDiv from '../components/HeroDiv'
import Featured from '../components/Featured'
import Statistic from '../components/Statistic'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'

function Home() {
  return (
    <div>
      {/* <HalfNav/> */}
      <NavBar/>
      <HeroDiv/>
      <Statistic/>
      <Featured/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default Home