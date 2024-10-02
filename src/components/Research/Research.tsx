import React from 'react'
import { Button } from '../ui/Button'
import ResearchCards from './ResearchCards'

function Research() {
  return (
    <div className='flex justify-center items-center min-h-screen  py-8 bg-[#000C19]'>

    <div className=' lg:w-[70%] items-center box-content flex flex-col gap-16 '>
        <div >
            <p className='text-center text-white  font-bold text-[42px]'>
                Join Our Research
            </p>
        </div>
        <div className='flex max-lg:flex-wrap items-center justify-center gap-6'>
            <ResearchCards/>
            <ResearchCards/>
            <ResearchCards/>
        </div>
        <div className='flex justify-center'>
            <Button variant={'white'} className='rounded-[30px] text-[14px] w-[285px]'> TRENDING REPORT</Button>
        </div>
    </div>
      
    </div>
  )
}

export default Research
