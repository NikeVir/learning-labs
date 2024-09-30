import React from 'react'
import { Button } from '../ui/Button'
const logos = [
    '/images/logos/larsen.svg',
    '/images/logos/samsung.svg',
    '/images/logos/chayoos.svg',
    '/images/logos/pwc.svg',
    '/images/logos/reliance.svg',
]

function Main() {
    return (
        <div className='relative min-h-[850px] min-w-full flex justify-center items-center '>
            <div className='absolute w-full'>
                <img src="/images/home.png" className=' min-w-full ' alt="" />
            </div>
            <div className='relative w-[70%] flex flex-col gap-32'>
                <div className='flex justify-center'>

                <div className='flex flex-col gap-[45px] w-[900px]'>

                    <div className='flex justify-center'>
                        <Button variant={'primary'} className='bg-[#000C19] text-[#FEBF00] text-lg font-medium rounded-[39px] border-b border-[#FFFFFF]'>Fundamental Learnability</Button>
                    </div>
                    <div className='text-[3.4rem] leading-[4rem] font-medium text-center text-white'>
                        Shaping tomorrow’s competencies in <span className='text-[#4AB371] font-bold'>organizations & teams</span>
                    </div>
                    <div className='flex justify-center'>

                    <p className='text-center text-[#ECF5FF] text-xl w-[814px]'>Indepth research insights transformed into powerful organization development tools & simulations, to empower business practioners to implement strategic interventions that drive growth & innovation</p>
                    </div>
                    <div className='flex gap-[20px] justify-center'>
                        <Button variant={'primary'}>Join Community</Button>
                        <Button variant={'greenlg'}>Let’s Collaborate</Button>
                    </div>
                </div>
                </div>
                <div className='flex gap-8 '>
                    {
                        logos.map((logo, index) => (
                            <div className='bg-[#FAFAFA33] flex justify-center items-center w-[188px] border border-[#ffffff] px-[0.7rem] py-[0.6rem] rounded-[50px]'>
                                <img key={index} src={logo} alt="" />
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Main
