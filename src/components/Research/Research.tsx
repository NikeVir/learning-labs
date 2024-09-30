import React from 'react'
import { Button } from '../ui/Button'
import ResearchCards from './ResearchCards'

function Research() {
  return (
    <div className='flex justify-center items-center py-8 bg-[#000C19]'>

    <div className='w-[70%] flex flex-col gap-16 '>
        <div >
            <p className='text-center text-white  font-bold text-[42px]'>
                Join Our Research
            </p>
        </div>
        <div className='flex gap-2'>
            <ResearchCards/>
            <ResearchCards/>
            <ResearchCards/>
        </div>
        <div className='flex justify-center'>
            <Button variant={'white'}> TRENDING REPORT</Button>
        </div>
    </div>
      
    </div>
  )
}

export default Research
