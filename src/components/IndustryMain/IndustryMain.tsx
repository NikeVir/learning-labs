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
            <div className='w-[80%] flex '>
                <div className='flex items-center gap-16 w-[606px] h-[590px] '>
                    <div className='flex flex-col gap-16' >

                        <div className='flex flex-col gap-4'>
                            <p className='text-[2.6rem] font-bold leading-[50px]'>{data.title}</p>
                            <p className='text-[#525252] text-2xl font-medium leading-7'>{data.description}</p>
                        </div>
                        <div className='flex gap-8'>
                            <Button variant={'greenlg'}> Join Community</Button>
                            <Button variant={'white'}> Let’s Collaborate</Button>
                        </div>
                    </div>

                </div>
                <div className='w-[606px] h-[590px] relative -top-10 '>
                    <img src={data.image} className='w-[606px] h-[590px]' alt='' />
                </div>
            </div>

        </div>
    )
}

export default IndustryMain
