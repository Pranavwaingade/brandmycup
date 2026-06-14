import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import HowItWorks from '../Components/HowItWorks'
import FeaturedProducts from '../Components/FeaturedProducts'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <HowItWorks/>
    <FeaturedProducts/>
    <Footer/>
    </>
  )
}

export default Home