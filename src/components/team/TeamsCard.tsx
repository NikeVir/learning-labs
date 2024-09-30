import React from 'react'

function TeamsCard() {
  return (
    <div className=' rounded-[20px] w-[277px] h-[348px] border border-[#E6E6E6] flex justify-center items-center  '>
      <div className='w-[201px] h-[274px] text-center flex flex-col justify-center gap-2'>
            <img src='/images/partners/partners.png' className='w-[201px] h-[201px] rounded-[333px]' alt='' />
            <div className='text-2xl mt-2 font-medium text-black' >Duncan Davies</div>
            <div className='text-base text-[#6F6F6F]'>Chief Executive Officer</div>
      </div>
    </div>
  )
}

export default TeamsCard
