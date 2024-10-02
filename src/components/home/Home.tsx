import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Research from '../Research/Research'
import Advisory from '../Advisory/Advisory'
import Features from '../Features/Features'
import Main from '../Main/Main'
import ScrollAnimationComponent from '../scroller/Scroller'
import Overview from '../Overview/Overview'
import { Stickynav } from '../Stickynav/Stickynav'
import EmblaCarouselHome from '../Carousel/verticalHome/EmblaCarouselHome'
import { EmblaOptionsType } from 'embla-carousel'
import '@/components/Carousel/verticalHome/css/emblahome.css'
const OPTIONS: EmblaOptionsType = { axis: 'y' }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <Stickynav/>
      <div id="table-of-contents" className='py-10 lg:py-20 '>
      <EmblaCarouselHome slides={SLIDES} options={OPTIONS} />
      </div>
      <div id="screencasts" className=' py-10 lg:py-20'>
      <EmblaCarouselHome slides={SLIDES} options={OPTIONS} />
      </div>
      <div id="resources" className='py-10 lg:py-20'>
      <EmblaCarouselHome slides={SLIDES} options={OPTIONS} />
      </div>
      <div id="pricing" className='py-10 lg:py-20'>
      <EmblaCarouselHome slides={SLIDES} options={OPTIONS} />
      </div>
      {/* <ScrollAnimationComponent/> */}
    <div id="feature">

      <Features  />
    </div>

      <Advisory/>
      <Research/>
      <Footer/>
    </div>
  )
}

export default Home
