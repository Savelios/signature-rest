import React from 'react'
import AboutView from '../../components/views/about/AboutView'
import { AboutIndicators } from '../../ui/indicator/about/about-indicator'

const AboutPage = () => {
  return (
    <>
      <AboutIndicators />
      <AboutView />
    </>
  )
}

export default AboutPage