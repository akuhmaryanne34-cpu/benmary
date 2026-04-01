import React from 'react'
import NavBar from "../components/navbar/NavBar"
import Hero from '../components/hero/Hero'
import Marquee from "../components/marquee/Marquee"
import Services from '../components/services/Services'
import SelectedWorks from '../components/selectedworks/SelectedWorks'


const Home = () => {
  return (
    <div>
     <NavBar /> 
    <Hero />
    <Marquee />
    <Services />
    <SelectedWorks />
    </div>
  )
}

export default Home
