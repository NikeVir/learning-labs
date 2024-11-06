"use client";

import React, { useState } from 'react';
// import { Button } from '../ui/Button'

const data = [
    "Healthcare",
    "Pharmaceuticals",
    "BFSI",
    "Hospitality",
    "Retail"
]
const FeatureDate = [
    {
        img: "/images/features/HOHRM02INOLL101_COVER IMAGE.jpg",
        title: "Work–life balance indicators and talent management approach: a qualitative investigation of Indian luxury hotels",
        content: "This study investigates work–life balance (WLB) experiences of front-office employees to inductively classify a set of WLB ..."
    },
    {
        img: "/images/features/ITHRM02INOLL01_Cover image.jpg",
        title: "Continuous learning and employee performance: a moderated examination of managers’ coaching behavior in India",
        content: "This study investigates the relationship among continuous learning, change-efficacy and contextual performance of  employees..."
    },
    {
        img: "/images/features/BF001_cover image.jpg",
        title: "  Leadership Style & Organizational Effectiveness in Indian Banking Industry",
        content: "An extensive research involving over 100 managers in the leading banks in India was conducted to identify & delve into the leadership styles practiced by the middle management and their correlation with organization..."
    }
]

function Features() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(prevState => !prevState);
    }
    return (
        <div className='relative bg-[#001631] py-10 md:pb-20 flex justify-center'>
            <div>
                <img src="/images/research/flash.svg" className='absolute top-0 left-0' alt="Research" />
            </div>
            <div className='relative  w-[95%] flex flex-col gap-16   '>
                <div>
                    <h1 className='text-white sm:text-[42px] text-[38px] text-center mt-5 font-bold'>Industries in focus</h1>
                </div>
                <div className='flex justify-center'>
                    <div className='bg-[rgba(255,255,255,0.12)] max-lg:overflow-x-scroll  max-lg:w-auto  w-[948px] rounded-[888px] flex md:justify-center px-4 max-lg:py-4 py-2 max-lg:gap-x-[20px]  max-lg:gap-y-[10px] gap-[42px]'>

                        {data.map((item, index) => (
                            <div key={index} className='text-black text-center shadow-featurebox font-medium min-w-[150px] px-[32px] py-[10px] bg-white text-sm rounded-[30px]'>{item}</div>
                        ))
                        }

                    </div>

                </div>

                <div className=' gap-12   flex max-lg:flex-col items-center justify-center '>

                    <div className='flex  flex-col gap-[18px] md:w-[548px]'>
                        <img src="/images/features/BFHRM03INOLL101_cover image.jpg" className='md:w-[548px]' alt="" />
                        <div className='flex flex-col gap-[5px] text-justify'>

                            <p className='text-sm text-[#E8971E]'>May 27, 2022</p>
                            <h2 className='text-2xl font-bold text-white'>Can continuous learning amplify employees’ change-efficacy and contextual performance in a Post merger phase Brings You Success</h2>
                            <p className='text-lg text-[#BDBDBD]'>This study investigates the relationship among continuous learning, change-efficacy and contextual performance of  employees working with a recently merged bank and further explores the mediating role of employees’ change efficacy in relationship between continuous learning and contextual performance of employees....</p>
                        </div>
                    </div>
                    <div className='flex   flex-col gap-6'>
                        {

                            FeatureDate.map((item, index) => (
                                <div key={index} className='flex gap-7 text-justify '>
                                    <img src={item.img} className='w-[150px] max-md:h-[90px] xl:w-[250px]' alt="" />
                                    <div className='text-white xl:w-[280px] flex flex-col gap-2'>
                                        <h2 className='md:text-xl md:w-[317px] font-bold'>{item.title}</h2>
                                        <p className='md:text-[16px] font-normal md:w-[276px] tracking-[0.5px] '>
                                            {isExpanded ? item.content : item.content.substring(0, 20) + "..."}
                                            <span onClick={toggleReadMore} className="text-[#004c92] font-light">{isExpanded ? "Show Less" : "Read More"}</span>

                                        </p>
                                    </div>
                                </div>
                            ))
                        }


                    </div>

                </div>
                {/* <div className='flex items-center justify-center'>
                <Button variant='primary' >Read More</Button>
            </div> */}

            </div>
        </div>
    )
}

export default Features


