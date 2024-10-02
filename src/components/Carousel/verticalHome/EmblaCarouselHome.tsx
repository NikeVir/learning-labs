'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import ClassNames from 'embla-carousel-class-names'
import useEmblaCarousel from 'embla-carousel-react'
import LeftCard from '@/components/Tools&Features/LeftCard'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}
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
const EmblaCarouselHome: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  return (
    <section className="embla relative  flex justify-center items-center">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
        
          {slides.map((slide, index) => (
            <div className="embla__slide embla__class-names " key={index}>
                <LeftCard data={DataLeft}/>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        {/* <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}

        <div className="embla__dots  absolute top-[40%] gap-4 flex flex-col   z-10 right-40">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarouselHome
