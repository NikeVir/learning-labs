import React from 'react'
import PartnerCard from './PartnerCard'

function Partners() {
  return (
    <div className='bg-[#001631] py-20 flex justify-center items-center'>
        <div className='w-[95%] xl:w-[80%]  '>
            <div className=' flex justify-center text-center'>
                <div className='max-w-[774px] flex flex-col gap-4'>

                <div className='text-[2.6rem] font-bold text-white' >Our knowledge partners</div>
                <div className='text-[#E0E0E0] text-base'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
            </div>
            <div className='flex justify-center max-lg:flex-wrap mt-[50px] gap-5'>
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
                <PartnerCard />
            </div>

        </div>
      
    </div>
  )
}

export default Partners
