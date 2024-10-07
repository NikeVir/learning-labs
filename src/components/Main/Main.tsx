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
        <>
            <div className='relative overflow-hidden min-h-screen lg:min-h-screen min-w-full flex justify-center items-center '>
                <div className='absolute w-full min-h-screen  blur-[13.25px]  '>
                    <img src="/images/main.jpg" className=' relative  bg-[rgba(0,0,0,0.48)] min-h-screen min-w-full ' alt="" />
                    {/* <div  className='absolute bg-[rgba(0,0,0,0.48)] min-h-screen min-w-full ' ></div> */}
                </div>
                <div className='absolute w-full min-h-screen  blur-[13.25px]  '>
                    {/* <img src="/images/main.jpg" className=' relative  bg-[rgba(0,0,0,0.48)] min-h-screen min-w-full ' alt="" /> */}
                    <div  className='absolute bg-[rgba(0,0,0,0.48)] min-h-screen min-w-full ' ></div>
                </div>
                <div className='relative max-sm:px-2 lg:w-[70%] flex flex-col gap-20 md:gap-32'>
                    <div className='flex justify-center'>

                        <div className='flex flex-col gap-[45px] xl:w-[900px]'>

                            <div className='flex justify-center'>
                                <Button variant={'primary'} className='bg-[#000C19] text-[#FEBF00] text-lg font-medium rounded-[39px] border-b border-[#FFFFFF]'>Fundamental Learnability</Button>
                            </div>
                            <div className=' text-3xl lg:text-[3.4rem] lg:leading-[4rem] font-medium text-center text-white'>
                                Shaping tomorrow’s competencies in <span className='text-[#4AB371] font-bold'>organizations & teams</span>
                            </div>
                            <div className='flex justify-center'>

                                <p className='text-center text-[#ECF5FF] md:text-xl lg:w-[814px]'>Indepth research insights transformed into powerful organization development tools & simulations, to empower business practioners to implement strategic interventions that drive growth & innovation</p>
                            </div>
                            <div className='flex gap-[20px] justify-center'>
                                <Button variant={'primary'} >Join Community</Button>
                                <Button variant={'outline'}>Let’s Collaborate</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex max-lg:flex-wrap items-center justify-center mt-5  mb-8 gap-2 md:gap-8 '>
                {
                    logos.map((logo, index) => (
                        <div className='bg-gradient-to-r from-black to-[brown] max-w-[120px] md:min-w-[188px] min-h-[40px] md:min-h-[66px] flex justify-center items-center w-[188px] border border-[#FAFAFA33]  rounded-[50px]'>
                            <img key={index} src={logo} className='max-sm:max-h-[25px] max-sm:max-w-[80px]' alt="" />
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Main


