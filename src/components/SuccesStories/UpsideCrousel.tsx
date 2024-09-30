'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface Item {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface Vertical3DSliderProps {
  items: Item[];
}

const Vertical3DSlider: React.FC<Vertical3DSliderProps> = ({ items }) => {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    scroll: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    afterChange: function(index: number) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
  };

  return (
    <div className='h-[100vh]'>

    <div className="relative w-[300px] h-[800px]">
      <Slider {...settings}>
        {items.map((item, index) => (
            <div key={index} className="text-center  w-[250px] h-[200px] border bg-black p-4">
            <img src={item.src} alt={item.alt} className="mx-auto" />
            <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
            <p className="text-lg mt-2">{item.description}</p>
          </div>
        ))}
      </Slider>
        </div>
    </div>
  );
};

export default Vertical3DSlider;

