import React from 'react'

function AdvisoryCards() {
  return (
   
        <div className='bg-white w-[368px] h-[480px] relative rounded-[20px]'>
            <div className='flex w-[368px] h-[480px] justify-center absolute rounded-[20px]'>
            <img src='/images/advisory/adv1.png'  alt='Advisory' />
            </div>
            <div className=' absolute left-5 bottom-5'>
                <p className='font-bold text-white text-[24px] tracking-[0px] mt-4'>Mr. Vikash Pandey</p>
                <p className='text-[14px] mt-2 text-[#FE363A]'>Founder, M.D.</p>
            </div>
        </div>
 
  )
}

export default AdvisoryCards
