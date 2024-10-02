import React from 'react'
import Vertical3DSlider from './UpsideCrousel';
import EmblaCarousel from '../Carousel/verticalHome/EmblaCarousel';

import { EmblaOptionsType } from 'embla-carousel'
import '@/components/Carousel/verticalHome/css/embla.css'
const OPTIONS: EmblaOptionsType = { axis: 'y' }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
function SuccessStories() {
    const sliderItems = [
        { src: '/image1.jpg', alt: 'Image 1', title: 'Slide 1', description: 'Description for slide 1' },
        { src: '/image2.jpg', alt: 'Image 2', title: 'Slide 2', description: 'Description for slide 2' },
        { src: '/image3.jpg', alt: 'Image 3', title: 'Slide 3', description: 'Description for slide 3' },
    ];
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='w-[95%] lg:w-[80%]  flex items-center justify-center'>

            <div className='basis-1/2 h-[276px]'>
                <div className='text-[#525252] font-bold text-[2.6rem] leading-[50px]'>
                    Success Stories and Experiences
                </div>
                <div className='text-[#525252] w-[404px] text-base'>
                    Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim t...
                </div>
                <div className='flex justify-start overflow-hidden'>
                    <img src="/images/success/Frame.svg" className='  relative -left-[60px]' alt="" />
                    <div className='font-bold relative -left-[100px] top-[50px]'>Happy Customers</div>
                </div>
            </div>
            <div className='basis-1/2 max-md:hidden flex justify-center overflow-y-hidden items-center  h-[895px]'>
                <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
            </div>
            </div>

        </div>
    )
}

export default SuccessStories

