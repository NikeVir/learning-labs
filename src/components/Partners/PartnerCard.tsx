import React from 'react'

function PartnerCard() {
  return (
    <div className='bg-[rgba(250,250,250,0.08)] rounded-[20px] w-[277px] h-[405px] border border-[#E6E6E6] flex justify-center items-center hover:border-[#FF3438] hover:border-[3px] hover:bg-[#00142d]'>
      <div className='w-[201px] text-white h-[274px] text-center flex flex-col justify-center gap-2'>
            <img src='/images/partners/partners.png' className='w-[201px] h-[201px] rounded-[333px]' alt='' />
            <div className='text-2xl font-medium' >Duncan Davies</div>
            <div className='text-base text-[#E0E0E0]'>Chief Executive Officer</div>
            <div className='text-lg text-[#FEBF00]'>IIM Ranchi</div>
            <div className='flex justify-center'>

            <img src='/images/logos/linkedin.svg' className='w-[31.5px] h-[31.5px]' alt='' />
            </div>
      </div>
    </div>
  )
}

export default PartnerCard
