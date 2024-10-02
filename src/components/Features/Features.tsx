import React from 'react'
import { Button } from '../ui/Button'

const data =[
    "Healthcare",
    "Pharmaceuticals",
    "BFSI",
    "Hospitality",
    "Retail"
]
const FeatureDate =[
    {
        img: "/images/features/feature2.png",
        title: "SEO Thought Leaders to Follow (and See) At C3",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    {
        img: "/images/features/feature3.png",
        title: "SEO Thought Leaders to Follow (and See) At C3",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    },
    {
        img: "/images/features/feature4.png",
        title: "SEO Thought Leaders to Follow (and See) At C3",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
    }
]

function Features() {
  return (
    <div className='bg-[#001631] py-10 flex justify-center'>
        <div className='lg:w-[75%] w-[95%] flex flex-col gap-16   '>
            <div className='flex justify-center'>
                <div className='bg-[rgba(255,255,255,0.12)] max-lg:flex-wrap max-lg:w-auto  w-[948px] rounded-[888px] flex justify-center px-4 max-lg:py-4 py-2 max-lg:gap-x-[20px]  max-lg:gap-y-[10px] gap-[42px]'>

                    {data.map((item,index) => (
                        <div key={index} className='text-black text-center shadow-featurebox font-medium min-w-[150px] px-[32px] py-[10px] bg-white text-sm rounded-[30px]'>{item}</div>
                    ))
                    }

                </div>
                
            </div>
            
            <div className=' gap-12  flex max-xl:flex-col items-center justify-center '>

                <div className='flex  flex-col gap-[18px] md:w-[548px]'>
                    <img src="/images/features/feature1.png" className='md:w-[548px]' alt="" />
                    <div className='flex flex-col gap-[5px]'>

                    <p className='text-sm text-[#E8971E]'>May 27, 2022</p>
                    <h2 className='text-2xl font-bold text-white'>Hard Work Always Brings You Success</h2>
                    <p className='text-lg text-[#BDBDBD]'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim t...</p>
                    </div>
                </div>
                <div className='flex  flex-col gap-6'>
                    {

                        FeatureDate.map((item,index) => (
                            <div key={index} className='flex gap-7  '>
                                <img src={item.img} className='w-[150px] max-md:h-[90px] md:w-[257px]' alt="" />
                                <div className='text-white md:w-[306px] flex flex-col gap-2'>
                                    <h2 className='md:text-xl md:w-[317px] font-bold'>{item.title}</h2>
                                    <p className='md:text-[16px] font-normal md:w-[276px] '>{item.content}</p>
                                </div>
                            </div>
                        )) 
                    }


                </div>

            </div>
            <div className='flex items-center justify-center'>
                <Button variant='primary' >Read More</Button>
            </div>

        </div>
    </div>
  )
}

export default Features


