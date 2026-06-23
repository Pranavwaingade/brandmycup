import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import HowItWorks from '../Components/HowItWorks'
import FeaturedProducts from '../Components/FeaturedProducts'
import Feedback from '../Components/Feedback'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <HowItWorks/>
    <FeaturedProducts/>
    <Feedback/>
    <Footer/>
    </>
  )
}

export default Home