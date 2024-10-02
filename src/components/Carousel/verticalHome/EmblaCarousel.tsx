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

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
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
    <section className="embla relative flex justify-center items-center">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">
        
          {slides.map((slide, index) => (
            <div className="embla__slide embla__class-names " key={index}>
                <div className='bg-[#4AB371] flex gap-4 rounded-[4px] py-[19px] px-[16px]'>
                  <div>
                    <img src="/images/card.png" className='min-w-[176px] h-[237px]'  alt="" />
                  </div>
                  <div className=' relativew-[250px] text-white'>
                    <p className='text-base font-medium '>
                      “Explore how your microbiome affects your well-being with our personalized gut health assessment. Take the first step towards a healthier life today!"
                    </p>
                    <p className=' absolute bottom-5 right-8 flex gap-2'><div className='flex  justify-center items-center'><div className='h-[2px] bg-white w-[16px]'></div></div>Alya Cook</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        {/* <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}

        <div className="embla__dots absolute top-[50%] gap-4 flex flex-col border-black  -left-10">
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

export default EmblaCarousel
