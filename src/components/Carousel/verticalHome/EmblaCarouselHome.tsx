'use client'
import React, { useEffect } from 'react'
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
import HomeLeftCard from '@/components/Tools&Features/HomeLeftCard'

type PropType = {
  slides: DataLeftProps[]
  options?: EmblaOptionsType
}
interface ContentItem {
  title: string;
  description: string;
}
interface DataLeftProps {
  img:string,
  title: string;
  description: string;
  content: ContentItem[];
  singleContent: string;
}



const OPTIONS: EmblaOptionsType = { axis: 'x' }
const EmblaCarouselHome: React.FC<PropType> = (props) => {
  const { slides } = props
  const [options, setOptions] = React.useState<EmblaOptionsType>({ axis: 'y' })

  useEffect(() => {
    function handleResize() {
      const newAxis = window.innerWidth < 1040 ? 'x' : 'y';
      setOptions(prevOptions => ({ ...prevOptions, axis: newAxis }));
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial value

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <section className="embla relative z-30 py-20 bg-white flex justify-center items-center">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container ">

          {slides.map((slide, index) => (
            <div className="embla__slide embla__class-names " key={index}>
              <HomeLeftCard data={slide} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">


        <div className="embla__dots  absolute lg:top-[40%] sm:top-[20%] top-[30%] gap-4 flex flex-col   z-10  md:right-10 lg:right-40">
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
