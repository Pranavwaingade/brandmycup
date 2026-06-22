import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import HowItWorks from '../Components/HowItWorks'
import FeaturedProducts from '../Components/FeaturedProducts'
import WhyChoose from '../Components/WhyChoose'

function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <HowItWorks/>
    <FeaturedProducts/>
    <WhyChoose/>
    <Footer/>
    </>
  )
}

export default Home