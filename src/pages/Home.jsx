import React from 'react'
import Hero from '../components/Hero'
import Description from '../components/description/description'
import Projects from '../components/projects/Projects'
import SliderProjects from '../components/slider-project/SliderProjects'
import Footer from '../components/footer/Footer'



const Home = () => {
  return (
    <>
      
        <Hero />
        <Description />
        <Projects />
        <SliderProjects />
        <Footer />
        
        
    </>
  )
}

export default Home