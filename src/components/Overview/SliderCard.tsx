'use client'
import React from 'react'
import LeftCard from '../Tools&Features/LeftCard'
import RightCard from '../Tools&Features/RightCard';
import EmblaCarousel from '../Carousel/verticalHome/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel'
import '@/components/Carousel/verticalHome/css/embla.css'
interface DataLeftProps {
  title: string;
  description: string;
  content: string;
}
const DataLeft:DataLeftProps = {
  title: "Tools & Features",
  description: "Assess and Elevate Your Organizational Maturity",
  content: "Transform your organization’s learning and development journey with our comprehensive Maturity Assessment Tools. These tools are designed to help you understand, benchmark, and improve across various levels of organizational maturity."
}
const OPTIONS: EmblaOptionsType = { axis: 'y' }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
function SliderCard() {
  return (
    <div className='mt-20 h-[70vh] border '>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        {/* <LeftCard data={DataLeft}/>
        <LeftCard data={DataLeft}/>
        <LeftCard data={DataLeft}/> */}
    </div>
  )
}

export default SliderCard
