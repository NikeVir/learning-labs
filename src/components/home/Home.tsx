import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Research from '../Research/Research'
import Advisory from '../Advisory/Advisory'
import Features from '../Features/Features'
import Main from '../Main/Main'
import ScrollAnimationComponent from '../scroller/Scroller'
import Overview from '../Overview/Overview'

function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <Overview/>
      {/* <ScrollAnimationComponent/> */}
      <Features/>
      <Advisory/>
      <Research/>
      <Footer/>
    </div>
  )
}

export default Home
