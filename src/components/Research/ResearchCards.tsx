import React from 'react'

function ResearchCards() {
  return (
    <div className='w-[368px]  flex flex-col items-center xl:h-[446px] py-[22px] px-[22px] rounded-3xl bg-[#141f2b]'>
        <div className='flex flex-col gap-5'>
            <img src="/images/research/rect1.png" className='rounded-3xl max-w-[324px] max-h-[224px]' alt="Research" />
            <div className='flex flex-col gap-3 '>
                <p className='text-xl  font-bold text-white '>
                    SEO Thought Leaders to Follow (and See) At C3
                </p>
                <p className=' font-normal xl:text-sm leading-6 text-white'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                </p>
            <div className='text-green-500'>
                Ongoing
            </div>
            </div>
      </div>
    </div>
  )
}

export default ResearchCards
