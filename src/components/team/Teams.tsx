import React from 'react'
import TeamsCard from './TeamsCard'

function Teams() {
  return (
    <div className='py-10 flex justify-center items-center'>
        <div className='w-[95%] xl:w-[80%]  '>
            <div className=' flex justify-center text-center'>
                <div className='max-w-[774px] flex flex-col gap-4'>

                <div className='text-[2.6rem] font-bold text-[##0E0637]' >Our knowledge partners</div>
                <div className='text-[#717184] text-base'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
            </div>
            <div className='flex mt-[50px] max-lg:flex-wrap justify-center items-center gap-5'>
                <TeamsCard />
                <TeamsCard />
                <TeamsCard />
                <TeamsCard />
            </div>

        </div>
      
    </div>
  )
}

export default Teams
