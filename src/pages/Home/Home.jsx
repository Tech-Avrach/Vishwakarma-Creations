import React from 'react'
import HeroSection from './Components/Hero'
import AboutUsSnapshot from './Components/About'
import FeaturedProjects from './Components/FeaturedProjects'
import ServicesOffered from './Components/ServicesOffered'

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSnapshot />
      <FeaturedProjects />
      <ServicesOffered />
    </div>
  )
}

export default Home