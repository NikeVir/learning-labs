import React from 'react'
import { Button } from '../ui/Button'

interface DataProps {
    title: string,
    description: string,
    image: string,
    color: string,
}


function IndustryMain({ data }: { data: DataProps }) {
    return (
        <div className={`flex justify-center items-center`}>
            <div className='w-[95%] xl:w-[80%] flex max-md:flex-col items-center justify-center'>
                <div className='flex items-center gap-16 md:w-[606px] md:h-[590px] '>
                    <div className='flex flex-col gap-16' >

                        <div className='flex flex-col gap-4 max-md:text-center'>
                            <p className='text-3xl md:text-[2.6rem] font-bold md:leading-[50px]'>{data.title}</p>
                            <p className='text-[#525252] text-base md:text-2xl font-medium leading-7'>{data.description}</p>
                        </div>
                        <div className='flex max-md:justify-center gap-8'>
                            <Button variant={'primary'} style={{backgroundColor:`${data.color}`}} className='max-md:text-sm'> Join Community</Button>
                            <Button variant={'white'} className='border-[#C5CFDA] text-[#004B96] max-md:text-sm bg-transparent hover:bg-white font-medium'> Let’s Collaborate</Button>
                        </div>
                    </div>

                </div>
                <div className='md:w-[606px] md:h-[590px] relative -top-10 '>
                    <img src={data.image} className='md:w-[606px] md:h-[590px]' alt='' />
                </div>
            </div>

        </div>
    )
}

export default IndustryMain
