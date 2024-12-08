import React from 'react'
import HeroPage from './HeroPage'
import About from "./About" 
import Course from "./Course" 
import Gallery from "./Gallery" 
import Footer from "./Footer" 

function Hompage() {
  return (
    <div>
    <HeroPage id="Hero"/>
    <About id="About" />
    <Course id="Course" />
    <Gallery id="Gallery" />
    <Footer id="Footer"/>

    </div>
  )
}

export default Hompage
