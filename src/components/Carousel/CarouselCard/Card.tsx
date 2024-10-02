import React from 'react'

function Card() {
  return (
    <div className='bg-[#4AB371] rounded-[4px] py-[19px] px-[16px]'>
        <div>
        <img src="/images/card.png" alt="" />
        </div>
        <div>
            <p>
            “Explore how your microbiome affects your well-being with our personalized gut health assessment. Take the first step towards a healthier life today!"
            </p>
            <p className='flex gap-2'><div className='flex justify-center items-center'><div className='h-[2px] w-[4px]'></div></div>Alya Cook</p>
        </div>
      
    </div>
  )
}

export default Card
