import React from 'react'
import './About.css'
import AboutSlider from './AboutSlider'
import BestSellers from './BestSellers'
import AboutClient from './AboutClient'

const About:React.FC = () => {
  return (
    <div>
        <AboutSlider />
        <BestSellers />
        <AboutClient />
    </div>
  )
}

export default About