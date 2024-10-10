import React from 'react'
import { Button } from '../ui/Button'
const logos = [
    '/images/logos/lnt.svg',
    '/images/logos/sam.svg',
    '/images/logos/chayo.svg',
    '/images/logos/pwc (2).svg',
    '/images/logos/rel.svg',
]

function Main() {
    return (
        <>
            <div className='relative overflow-hidden min-h-[80vh] min-w-full flex justify-center items-center '>
                <div className='absolute w-full min-h-[80vh]  blur-[13.25px]  '>
                    <img src="/images/homemain.jpg" className=' relative  bg-[rgba(0,0,0,0.48)] min-h-screen min-w-full ' alt="" />
                    {/* <div  className='absolute bg-[rgba(0,0,0,0.48)] min-h-screen min-w-full ' ></div> */}
                </div>
                <div className='absolute w-full min-h-[80vh]  blur-[13.25px]  '>
                    {/* <img src="/images/main.jpg" className=' relative  bg-[rgba(0,0,0,0.48)] min-h-screen min-w-full ' alt="" /> */}
                    <div  className='absolute bg-[rgba(0,0,0,0.48)] min-h-screen min-w-full ' ></div>
                </div>
                <div className='relative max-sm:px-2 lg:w-[70%] flex flex-col gap-20 md:gap-32'>
                    <div className='flex justify-center'>

                        <div className='flex flex-col gap-[45px] xl:w-[900px]'>

                            
                            <div className=' text-3xl lg:text-[3.4rem] lg:leading-[4rem] font-medium text-center text-white'>
                                Shaping tomorrow’s competencies in <span className='text-[#ffbf23] font-bold'>organizations & teams</span>
                            </div>
                            <div className='flex justify-center'>

                                <p className='text-center text-[#ECF5FF] md:text-xl lg:w-[814px]'>Indepth research insights transformed into powerful organization development tools & simulations, to empower business practioners to implement strategic interventions that drive growth & innovation</p>
                            </div>
                            <div className='flex gap-[20px] justify-center'>
                                <Button variant={'primary'} className='bg-[#004c92] text-[#ffffff]'>Join Community</Button>
                                <Button variant={'outline'} className='border-[#ffffff] text-[#ffffff] '>Let’s Collaborate</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='flex max-lg:flex-wrap items-center justify-center my-10 gap-2 md:gap-8 '>
                {
                    logos.map((logo, index) => (
                        <div className=' max-w-[180px] md:min-w-[188px] min-h-[40px] md:min-h-[66px] flex justify-center items-center w-[188px] border border-[#FAFAFA33]  rounded-[50px]'>
                            <img key={index} src={logo} className='max-sm:max-h-[25px] max-sm:max-w-[100px]' alt="" />
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Main


