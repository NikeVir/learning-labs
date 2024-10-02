import Header from '@/components/header/Header'
import { Button } from '@/components/ui/Button'
import React from 'react'

function page() {
    return (
        <div className='bg-[#f1fff6]'>
            <Header />
            <div className='flex justify-center mb-20'>
                <div className='md:w-[80%] w-[95%] p-10 flex gap-16 flex-col bg-white shadow-featurebox'>
                    <div className='flex justify-center'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex justify-center text-center'>

                                <img src='/images/logo.svg' className='w-[165px] h-[60px]' alt='thankyou' />
                            </div>
                            <div className='text-[#004B96] text-center font-bold text-[42px] leading-[50px]'>
                                Thanks For Joining Community
                            </div>
                            <div className='text-[#393939] text-xl text-center font-bold max-w-[803px]'>
                                Managing a hackathon can be a challenge without the right tools. We simplified this process to create a better platform experience for your organization.
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-12'>
                        <div className='flex justify-center'>
                            <p className='text-[#004B96] font-bold text-2xl text-center'>Here are our Joining Benefits</p>
                        </div>
                        <div className='flex max-lg:flex-wrap justify-center'>

                            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-20'>
                                <div className='flex flex-col gap-5'>
                                    <img src='/images/communities/th1.svg' className='w-[45px]' alt='benefits' />
                                    <p className='w-[240px] text-sm font-medium text-[#161616]'>Identify the current practices, approaches & challenges in the industry via interview</p>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <img src='/images/communities/th2.svg' className='w-[45px]' alt='benefits' />
                                    <p className='w-[240px] text-sm font-medium text-[#161616]'>Identify the current practices, approaches & challenges in the industry via interview</p>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <img src='/images/communities/th3.svg' className='w-[45px]' alt='benefits' />
                                    <p className='w-[240px] text-sm font-medium text-[#161616]'>Identify the current practices, approaches & challenges in the industry via interview</p>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <img src='/images/communities/th4.svg' className='w-[45px]' alt='benefits' />
                                    <p className='w-[240px] text-sm font-medium text-[#161616]'>Identify the current practices, approaches & challenges in the industry via interview</p>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <img src='/images/communities/th5.svg' className='w-[45px]' alt='benefits' />
                                    <p className='w-[240px] text-sm font-medium text-[#161616]'>Identify the current practices, approaches & challenges in the industry via interview</p>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <img src='/images/communities/th6.svg' className='w-[45px]' alt='benefits' />
                                    <p className='w-[240px] text-sm font-medium text-[#161616]'>Identify the current practices, approaches & challenges in the industry via interview</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-12'>
                        <div className='flex justify-center'>
                            <p className='text-[#004B96] font-bold text-2xl text-center'>What Would Be Our Next Steps?</p>
                        </div>
                        <div className='flex justify-center'>

                            <div className='grid grid-cols-1 md:grid-cols-3 gap-20'>
                                <div className='flex flex-col  gap-5'>
                                    <div className='flex gap-[74px]'>
                                        <div className='bg-[#F4F4F4] min-w-[60px] min-h-[60px] rounded-[100%] text-center flex justify-center items-center text-2xl font-semibold'>1</div>
                                        <img src='/images/communities/line.svg' className='w-[158px]' alt='benefits' />
                                        
                                    </div>
                                    <div className='gap-5 flex flex-col'>
                                        <p className='text-lg font-bold'>
                                        Login it with Google
                                        </p>
                                        <p className='xl:w-[284px] text-sm font-medium text-[#161616]'>Identify the current practices, approaches & challenges in the industry via interview</p>

                                    </div>
                                </div>
                                <div className='flex flex-col  gap-5'>
                                    <div className='flex gap-[74px]'>
                                        <div className='bg-[#F4F4F4] min-w-[60px] min-h-[60px] rounded-[100%] text-center flex justify-center items-center text-2xl font-semibold'>2</div>
                                        <img src='/images/communities/line.svg' className='w-[158px]' alt='benefits' />
                                        
                                    </div>
                                    <div className='gap-5 flex flex-col'>
                                        <p className='text-lg font-bold'>
                                        Join The Community
                                        </p>
                                        <p className='xl:w-[284px] text-sm font-medium text-[#161616]'>Identify the current practices, approaches & challenges in the industry via interview</p>

                                    </div>
                                </div>
                                <div className='flex flex-col  gap-5'>
                                    <div className='flex gap-[74px]'>
                                        <div className='bg-[#F4F4F4] min-w-[60px] min-h-[60px] rounded-[100%] text-center flex justify-center items-center text-2xl font-semibold'>3</div>
                                     
                                        
                                    </div>
                                    <div className='gap-5 flex flex-col'>
                                        <p className='text-lg font-bold'>
                                        Start Engaging
                                        </p>
                                        <p className='xl:w-[284px] text-sm font-medium text-[#161616]'>Identify the current practices, approaches & challenges in the industry via interview</p>

                                    </div>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center '>
                                    <Button variant={'primary'}>Join Community</Button>
                                </div>

                </div>
            </div>

        </div>
    )
}

export default page
