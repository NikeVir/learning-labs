import React from 'react'
import { Button } from '../ui/Button';

interface ContentItem {
  title: string;
  description: string;
}

interface DataLeftProps {
  title: string;
  description: string;
  content: ContentItem[];
}



function RightCard({ data }: { data: DataLeftProps }) {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-[90%] xl:w-[70%] max-md:flex-col-reverse  flex  gap-8 items-center'>

        <div className='flex flex-col lg:basis-1/2 w-full gap-2'>
        <h1 className='text-xl font-bold text-[#004B96]'>{data.title}</h1>
        <div className='text-3xl sm:text-[42px] font-medium sm:leading-[50px]'>{data.description}</div>
          {/* <div className='text-[#393939] text-xl font-medium'>{data.content}</div> */}
          <ul className='text-[#393939] text-xl font-medium'>
            {
              data.content.map((item, index) => (
                <li key={index} className='flex gap-4'>
                  <div className='min-w-[11px] mt-[8px] h-[11px] rounded-[100%] bg-black'></div> <div> <span className='text-[#004B96] font-bold '>{item.title}</span>{item.description}</div>
                </li>))
            }
          </ul>
          <div className='flex gap-5  sm:gap-10  mt-8'>
            <Button variant={'primary'} className='max-sm:text-sm  max-sm:py-3'> Join Community</Button>
            <div className=' flex border justify-center items-center'>

              <a className=' font-bold text-xl text-[#4AB371] border-b-2 max-sm:text-sm  max-sm:py-3 border-[#4AB371]'>Read More</a>
            </div>
          </div>
        </div>
        <div className='relative max-lg:hidden  lg:basis-1/2 w-full min-h-[504px] '>
          <div className='relative  min-h-[504px] max-lg:hidden max-w-[464px] flex'>

            <img src="/images/toolcards/cardimg.png" className='w-[464px]  md:absolute' alt='' />
            <div className='flex flex-col gap-2 w-[264px] absolute bottom-8 right-8'>
              <div className='flex gap-2 bg-white  hover:bg-[rgba(255,255,255,0.68)] rounded-xl w-[264px] h-[85px] p-[10px]'>
                <img src="/images/toolcards/Ellipsep.svg" alt='' />
                <div className='w-64'>
                  <h3 className='text-sm font-medium'>Sign in for your Invoices!</h3>
                  <p className='text-[10px] text-[#6F6F6F]'>Experience unparalleled security.</p>
                  <Button variant={'white'} className='border-[#FF3D62] md:text-[9px] text-[#FF3D62] border rounded-full px-4 py-1'> Subscribe Now</Button>
                </div>
              </div>
              <div className='flex gap-2 bg-white hover:bg-[rgba(255,255,255,0.68)] rounded-xl w-[264px] h-[85px] p-[10px]'>
                <img src="/images/toolcards/Ellipseg.svg" alt='' />
                <div className='w-64'>
                  <h3 className='text-sm font-medium'>Sign in for your Invoices!</h3>
                  <p className='text-[10px] text-[#6F6F6F]'>Experience unparalleled security.</p>
                  <Button variant={'white'} className='border-[#FF3D62] md:text-[9px] text-[#FF3D62] border rounded-full px-4 py-1'> Subscribe Now</Button>
                </div>
              </div>
              <div className='flex gap-2 bg-white hover:bg-[rgba(255,255,255,0.68)] rounded-xl w-[264px] h-[85px] p-[10px]'>
                <img src="/images/toolcards/Ellipseo.svg" alt='' />
                <div className='w-64'>
                  <h3 className='text-sm font-medium'>Sign in for your Invoices!</h3>
                  <p className='text-[10px] text-[#6F6F6F]'>Experience unparalleled security.</p>
                  <Button variant={'white'} className='border-[#FF3D62] md:text-[9px] text-[#FF3D62] border rounded-full px-4 py-1'> Subscribe Now</Button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default RightCard
