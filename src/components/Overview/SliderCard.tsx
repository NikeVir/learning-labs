'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import AdvisoryCards from "../Advisory/AdvisoryCards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface CardData {
  image: string,
  name: string,
  position: string,
  company: string,
  details:string
}
const cardData:CardData[] = [
  {
      image: '/images/advisory/adv1.jpeg',
      name: 'Mr. Viraj Varma',
      position: ' Org. Development & Change Management',
      company: 'Indian Institute of Management, Ranchi',
      details:"Dr. Viraj Varma is the Chairperson at IIM, Ranchi as well as visiting faculty at XLRI. He is an authority in Performance Management, Organization Development and Change, Organizational Design, and Leadership and Change. Before he started his illustrious academic career he served in senior management positions in large multinational companies. In addition to mentoring doctoral students, he consults senior managers of large PSUs and private enterprises on a regular basis."
  },
  {
      image: '/images/advisory/adv2.jpg',
      name: 'Dr. Sunil Budhiraja',
      position: 'Org. diagnostics & analytics',
      company: ' Tata Institute of Social Sciences',
      details:"Dr. Sunil Budhiraja is a well know authority in conducting psychometric tests, building learning organizations, driving organization change, and enhancing employee performance in large global enterprises. His 18 years of rich consulting and research experience has culminated in over 50 management development programs across India."
  },
  {
      image: '/images/advisory/adv3.png',
      name: 'Dhriti Shetty',
      position: 'Organization Psychologist',
      company: 'Learning & Development',
        details:"Ms. Dhriti Shetty holds a masters degree in Organization Psychology and Psychiatry. She is an certified expert in Thematic Apperception testing."
  },
  {
    image: '/images/advisory/adv3.png',
    name: 'Dhriti Shetty',
    position: 'Organization Psychologist',
    company: 'Learning & Development',
      details:"Ms. Dhriti Shetty holds a masters degree in Organization Psychology and Psychiatry. She is an certified expert in Thematic Apperception testing."
},
]



function SliderCard() {

  const settings = {
    infinite: true,
    slidesToShow: 2,
    speed: 500,
    centerMode: true,
    centerPadding: "15%",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerPadding: "24%",
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerPadding: "20%",
          dots: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "5%",
          dots: true,

        }
      }
    ]
  };
  return (
    <div className="slider-container h-[70vh] md:min-h-[40vh] overflow-x-hidden overflow-y-visible ">
      <Slider {...settings}>
        
        {cardData.map((data, index) => (
          <div className=" flex justify-center  overflow-hidden items-center px-4 mx-4 ">

          <AdvisoryCards key={index} data={data} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderCard
