import React from 'react'
import Carousel from './Carousel'
import OurServices from './OurServices'
import ReachUs from './ReachUs'
import Testimonials from './Testimonials'
import PricingPlan from './PricingPlan'
import About from './About'
import Management from './Management'
import Footer from './Footer'
import Header from './Header'


export default function Home() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <OurServices/>
      <PricingPlan/>
      <About/>
      <Management/>
      <Testimonials/>
      <ReachUs/>
      <Footer/>
    </div>
  )
}
