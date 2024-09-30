import Advisory from '@/components/Advisory/Advisory'
import Challenges from '@/components/Challenges/Challenges'
import FAQs from '@/components/Faq/Faq'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Objectives from '@/components/Objectives/Objectives'
import Partners from '@/components/Partners/Partners'
import { Button } from '@/components/ui/Button'
import React from 'react'

function page() {
    return (
        <div>
            <Header/>
            <div className='flex justify-center mb-20 items-center'>
                <div className='w-[926px] flex flex-col gap-16'>
                    <div className=' text-center flex justify-center'>
                        <div className='w-[826px]'>

                        <div className='text-[#0E0637] leading-[64px] text-[3.4rem] flex flex-col gap-3'>
                            <p>Our Knowledge</p>
                            <p className='font-bold'> Partner Network</p>
                        </div>
                        <p className='text-[#393939] mt-2 '>Managing a hackathon can be a challenge without the right tools. We simplified this process to create a better platform experience for your organization. </p>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-[20px] justify-center'>
                            <Button variant={'primary'}>Join Community</Button>
                            <Button variant={'greenlg'}>Let’s Collaborate</Button>
                        </div>
                    </div>
                    <div>
                        <section className='flex justify-center '>
                            <div className='w-[926px]  '>

                                <div className='flex flex-wrap gap-6 justify-center'>
                                    <div className='p-[1px] shadow-logobox rounded-md flex justify-center'>
                                        <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] hover:bg-none hover:bg-[#FEBF00] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md  w-[189px]'>
                                            <img src='/images/logos/maskg (1).svg' alt='partner' />
                                        </div>
                                    </div>

                                    <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
                                        <img src='/images/logos/maskg (2).svg' alt='partner' />
                                    </div>
                                    <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
                                        <img src='/images/logos/maskg (3).svg' alt='partner' />
                                    </div>
                                    <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
                                        <img src='/images/logos/maskg (4).svg' alt='partner' />
                                    </div>
                                    <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
                                        <img src='/images/logos/maskg (5).svg' alt='partner' />
                                    </div>
                                    <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
                                        <img src='/images/logos/maskg (6).svg' alt='partner' />
                                    </div>
                                    <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
                                        <img src='/images/logos/maskg (7).svg' alt='partner' />
                                    </div>

                                </div>

                            </div>
                        </section>
                    </div>


                </div>

            </div>
            <div className='flex justify-center relative min-h-screen overflow-hidden'>
                <img src='/images/knowledge/frame.png' className='absolute w-full' alt='partner' />
                <div className='w-[80%] flex gap-16 relative pt-24'>
                   

                    <div className='w-[528px] pt-6'>
                        <p className='text-white font-bold text-[50px]'>Objective</p>
                        <p className='text-[#A8A8A8] text-base'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                    
                    </div>
                    <Objectives />

                </div>

            </div>
            <Partners/>
            <Challenges/>
            <FAQs colortheme='blue'/>
            <Footer/>

        </div>
    )
}

export default page
