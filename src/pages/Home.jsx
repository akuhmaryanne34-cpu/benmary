import React from 'react'
import NavBar from "../components/navbar/NavBar"
import Hero from '../components/hero/Hero'
import Marquee from "../components/marquee/Marquee"
import Services from '../components/services/Services'


const Home = () => {
  return (
    <div>
     <NavBar /> 
    <Hero />
    <Marquee />
    <Services />
    </div>
  )
}

export default Home
