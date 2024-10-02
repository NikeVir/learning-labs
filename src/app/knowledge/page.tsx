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
            <div className='bg-[linear-gradient(345.39deg,#FFFFFF_9.63%,#F1FFF6_51.2%)]'>


                <div className='flex gap-9 items-center justify-center py-10'>
                    <div className='flex bg-white gap-10 items-center justify-between shadow-featurebox py-2 px-3 rounded-lg min-w-[400px] max-md:w-fit'>
                        <div>
                            <img src='/images/logo.svg' alt='about' className='w-[85px] h-[50px]' />
                        </div>
                        <ul className='flex max-md:hidden gap-8 text-sm font-normal'>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>Benefit</a></li>
                            <li><a href='/Communities'>Community</a></li>
                            <li><a href='/About'>About</a></li>
                        </ul>
                        <div className='max-md:hidden'>
                            <Button variant={'primary'} className='text-[12px] px-4 py-[10px] md:text-[12px]'>Join Community</Button>
                        </div>
                        <a className='md:hidden' href='/'><img src="/images/hamburger.svg" alt="Logo" /></a>

                    </div>

                </div>
                <div className='flex justify-center mb-20 items-center'>
                    <div className='lg:w-[80%] flex flex-col gap-16'>
                        <div className=' text-center flex justify-center'>
                            <div className='lg:w-[826px] max-w-[80%]'>

                                <div className='text-[#0E0637] md:leading-[64px] md:text-[3.4rem] text-3xl flex flex-col gap-3'>
                                    <p>Our Knowledge</p>
                                    <p className='font-bold'> Partner Network</p>
                                </div>
                                <p className='text-[#393939] mt-2 font-medium'>Managing a hackathon can be a challenge without the right tools. We simplified this process to create a better platform experience for your organization. </p>
                            </div>
                        </div>
                        <div>
                            <div className='flex gap-[20px] justify-center'>
                                <Button variant={'primary'}>Join Community</Button>
                                <Button variant={'white'}>Let’s Collaborate</Button>
                            </div>
                        </div>
                        <div>
                            <section className='flex justify-center '>
                                <div className='lg:w-[926px] '>

                                    <div className='flex mt-7 flex-wrap gap-6 justify-center'>
                                        <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] max-h-[66px] h-[66px] rounded-md shadow-logobox w-[189px]'>
                                            <img src='/images/logos/maskg (1).svg' alt='partner' />
                                        </div>
                                        <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md h-[66px] shadow-logobox w-[189px]'>
                                            <img src='/images/logos/maskg (2).svg' alt='partner' />
                                        </div>
                                        <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md h-[66px] shadow-logobox w-[189px]'>
                                            <img src='/images/logos/maskg (3).svg' alt='partner' />
                                        </div>
                                        <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md h-[66px] shadow-logobox w-[189px]'>
                                            <img src='/images/logos/maskg (4).svg' alt='partner' />
                                        </div>
                                        <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md h-[66px] shadow-logobox w-[189px]'>
                                            <img src='/images/logos/maskg (5).svg' alt='partner' />
                                        </div>
                                        <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md h-[66px] shadow-logobox w-[189px]'>
                                            <img src='/images/logos/maskg (6).svg' alt='partner' />
                                        </div>
                                        <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md h-[66px] shadow-logobox w-[189px]'>
                                            <img src='/images/logos/maskg (7).svg' alt='partner' />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center relative py-10 min-h-screen overflow-hidden'>
                <img src='/images/knowledge/frame.png' className='absolute  min-h-full w-full' alt='partner' />
                <div className='lg:w-[80%] w-[95%] flex max-md:flex-col gap-16 relative pt-24'>


                    <div className='md:w-[528px] pt-6 max-md:text-center'>
                        <p className='text-white font-bold  text-[50px]'>Objective</p>
                        <p className='text-[#A8A8A8] text-base'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <Objectives />

                </div>

            </div>
            <Partners />
            <Challenges />
            <FAQs colortheme='blue' />
            <Footer />

        </div>
    )
}

export default page
