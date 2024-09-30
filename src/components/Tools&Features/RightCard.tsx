import React from 'react'
import { Button } from '../ui/Button';

interface DataLeftProps {
  title: string;
  description: string;
  content: string;
}


function RightCard({ data }: { data: DataLeftProps }) {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[70%] flex  gap-8 items-center'>
       
        <div className='flex flex-col basis-1/2 gap-2'>
            <h1 className='text-xl font-bold text-[#004B96]'>{data.title}</h1>
            <div className='text-[42px] font-medium leading-[50px]'>{data.description}</div>
            <div className='text-[#393939] text-xl font-medium'>{data.content}</div>
            <div className='flex gap-10 mt-8'>
              <Button variant={'greenlg'}> Join Community</Button>
              <a className=' font-bold text-xl text-[#4AB371] border-b-2 border-[#4AB371]'>Read More</a>
            </div>
        </div>
        <div className='relative basis-1/2 min-h-[504px] '>
          <img src="/images/toolcards/cardimg.png" className='w-[464px]  absolute' alt=''/>
          <div className='flex flex-col gap-2 w-[264px] relative p-8'>
            <div className='flex gap-2 bg-white rounded-xl w-[264px] h-[85px] p-[10px]'>
              <img src="/images/toolcards/Ellipsep.svg"  alt=''/>
              <div className='w-64'>
                <h3 className='text-sm font-medium'>Sign in for your Invoices!</h3>
                <p className='text-[10px] text-[#6F6F6F]'>Experience unparalleled security.</p>
                <Button variant={'white'} className='border-[#FF3D62] text-[9px] text-[#FF3D62] border rounded-full px-4 py-1'> Subscribe Now</Button>
              </div>
            </div>
            <div className='flex gap-2 bg-white rounded-xl w-[264px] h-[85px] p-[10px]'>
              <img src="/images/toolcards/Ellipseg.svg"  alt=''/>
              <div className='w-64'>
                <h3 className='text-sm font-medium'>Sign in for your Invoices!</h3>
                <p className='text-[10px] text-[#6F6F6F]'>Experience unparalleled security.</p>
                <Button variant={'white'} className='border-[#FF3D62] text-[9px] text-[#FF3D62] border rounded-full px-4 py-1'> Subscribe Now</Button>
              </div>
            </div>
            <div className='flex gap-2 bg-white rounded-xl w-[264px] h-[85px] p-[10px]'>
              <img src="/images/toolcards/Ellipseo.svg"  alt=''/>
              <div className='w-64'>
                <h3 className='text-sm font-medium'>Sign in for your Invoices!</h3>
                <p className='text-[10px] text-[#6F6F6F]'>Experience unparalleled security.</p>
                <Button variant={'white'} className='border-[#FF3D62] text-[9px] text-[#FF3D62] border rounded-full px-4 py-1'> Subscribe Now</Button>
              </div>
            </div>
            
          </div>

        </div>
        </div>
    </div>
  )
}

export default RightCard
