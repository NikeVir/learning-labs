import React from 'react'
import Tools from '../ui/scrollsvgs/tools'
import Business from '../ui/scrollsvgs/Business'
import Message from '../ui/scrollsvgs/Message'
import CustomLearning from '../ui/scrollsvgs/CustomLearning'
import SliderCard from './SliderCard'

function Overview() {
    return (
        <div className='flex h-[100vh] w-full justify-center '>
            <div className='w-[80%] '>
                <div>
                    <div className='flex gap-4'>
                        <div className='bg-[#FEBF00]  flex justify-center items-center relative  w-[270px] h-[120px]'>
                            <div className='w-[160px]'>
                                <div className='flex justify-center'>

                                    <Tools />
                                </div>
                                <p className='font-semibold text-center'>Maturity Assessment Tools</p>
                            </div>
                            <div className='w-full bottom-0 absolute rounded-full h-1 bg-white'></div>
                        </div>
                        <div className=' relative flex justify-center items-center   w-[270px] h-[120px]'>
                            <div className='w-[160px]'>
                                <div className='flex justify-center'>
                                    <Business />
                                </div>
                                    <p className='font-semibold text-center'>Immersive Business simulations</p>
                            </div>
                            <div className='w-full bottom-0 absolute rounded-full h-1 bg-[#E0E0E0]'></div>
                        </div>
                        <div className='flex justify-center items-center relative  w-[270px] h-[120px]'>
                            <div className='w-[160px]'>
                                <div className='flex justify-center'>
                                    <Message />
                                </div>
                                    <p className='font-semibold text-center'>On-demand research & consultation</p>
                            </div>
                            <div className='w-full bottom-0 absolute rounded-full h-1 bg-[#E0E0E0]'></div>
                        </div>
                        <div className='flex justify-center items-center relative  w-[270px] h-[120px]'>
                            <div className='w-[180px]'>
                                <div className='flex justify-center'>
                                    <CustomLearning />
                                </div>
                                    <p className='font-semibold text-center'>Custom learning program development</p>
                            </div>
                            <div className='w-full bottom-0 absolute rounded-full h-1 bg-[#E0E0E0]'></div>
                        </div>

                    </div>

                </div>
                <div>
                        <SliderCard />
                </div>

            </div>

        </div>
    )
}

export default Overview
