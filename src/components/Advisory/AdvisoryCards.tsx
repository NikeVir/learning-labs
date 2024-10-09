'use client';
import React, { useState } from 'react'

interface CardData {
  image: string,
  name: string,
  position: string,
  company: string,
  details:string
}

function AdvisoryCards({ data }: { data: CardData }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`relative bg-white max-xl:w-[250px] max-xl:h-[350px] w-[368px] h-[480px] rounded-[20px] overflow-hidden transition-transform duration-300 ease-in-out ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <div className={`absolute inset-0 flex justify-center items-center rounded-[20px] transition-transform duration-300 ease-in-out ${isActive ? 'transform -translate-y-full' : ''}`}>
        <img src={data.image} alt='Advisory' className='max-xl:w-[250px] bg-cover max-xl:h-[350px] w-[368px] h-[480px] rounded-[20px]' />
      </div>
      <div className='absolute inset-0 w-full h-full rounded-[20px] bg-gradient-to-t from-black to-transparent'></div>
      <div className={`absolute left-5 bottom-5 transition-transform duration-300 ease-in-out ${isActive ? 'top-0 transform -translate-y-full' : ''}`}>
        <p className='font-bold text-white text-[24px] tracking-[0px] mt-4'>{data.name}</p>
        <p className='text-[14px] mt-2 text-[#FE363A]'>{data.position}</p>
        <p className='text-[14px] mt-2 text-[#FE363A]'>{data.company}</p>
      </div>
      <div className={`absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black to-transparent text-white transition-transform duration-300 ease-in-out ${isActive ? 'transform translate-y-0' : 'transform translate-y-full'}`}>
        {data.details}
      </div>
    </div>
  );
}

export default AdvisoryCards
