import React from 'react'
import NavBar from "../components/navbar/NavBar"
import Hero from '../components/hero/Hero'
import Marquee from "../components/marquee/Marquee"
import Services from '../components/services/Services'
import SelectedWorks from '../components/selectedworks/SelectedWorks'
import About from '../components/About/About'


const Home = () => {
  return (
    <div>
     <NavBar /> 
    <Hero />
    <Marquee />
    <Services />
    <SelectedWorks />
    <About />
    </div>
  )
}

export default Home
