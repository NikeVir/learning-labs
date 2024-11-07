'use client';

import React, { useState } from 'react';

const data = [
    "Healthcare",
    "Pharmaceuticals",
    "BFSI",
    "Hospitality",
    "Retail"
];

const FeatureDate = [
    {
        img: "/images/features/HOHRM02INOLL101_COVER IMAGE.jpg",
        title: "Work–life balance indicators and talent management approach: a qualitative investigation of Indian luxury hotels",
        content: "This study investigates work–life balance (WLB) experiences of front-office employees to inductively classify a set of WLB indicators for the locally owned Indian luxury hotels. Four clusters of WLB indicators that are grounded in the experiences of front-office employees are identified and presented. Interview data from human resource representatives unveil that hotels consider existing WLB practices as key HRM practices with an inclusive TM approach. The findings also surface the differences in expectations of front-office employees and WLB practices followed by the hotels."
    },
    {
        img: "/images/features/ITHRM02INOLL01_Cover image.jpg",
        title: "Continuous learning and employee performance: a moderated examination of managers’ coaching behavior in India",
        content: "This study investigates the relationship among continuous learning, change-efficacy and contextual performance of employees..."
    },
    {
        img: "/images/features/BF001_cover image.jpg",
        title: "Leadership Style & Organizational Effectiveness in Indian Banking Industry",
        content: "An extensive research involving over 100 managers in the leading banks in India was conducted to identify & delve into the leadership styles practiced by the middle management and their correlation with organization..."
    }
];

function Features() {
    const [isExpanded, setIsExpanded] = useState<boolean[]>(Array(FeatureDate.length).fill(false));
    const [isExpanded1, setIsExpanded1] = useState(false);
    const toggleReadMore = (index: number) => {
        setIsExpanded(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const singleToggleReadMore = ()=>{
        setIsExpanded1(prevState => !prevState);
    }
    let singleText = 'This study investigates the relationship among continuous learning, change-efficacy and contextual performance of employees working with a recently merged bank and further explores the mediating role of employees’ change efficacy in relationship between continuous learning and contextual performance of employees....'

    return (
        <div className='relative bg-[#001631] py-10 md:pb-20 flex justify-center'>
            <div>
                <img src="/images/research/flash.svg" className='absolute top-0 left-0' alt="Research" />
            </div>
            <div className='relative w-[95%] flex flex-col gap-8'>
                <div>
                    <h1 className='text-white sm:text-[42px] text-[38px] text-center mt-5 font-bold'>Industries in focus</h1>
                </div>
                <div className='flex justify-center'>
                    <div className='bg-[rgba(255,255,255,0.12)] max-lg:overflow-x-scroll w-[948px] rounded-[888px] flex md:justify-center px-4 py-2 gap-[42px]'>
                        {data.map((item, index) => (
                            <div key={index} className='text-black text-center shadow-featurebox font-medium min-w-[150px] px-[32px] py-[10px] bg-white text-sm rounded-[30px]'>{item}</div>
                        ))}
                    </div>
                </div>

                <div className='flex gap-12 flex-wrap items-start justify-center'>
                    <div className='flex flex-col gap-[18px] md:w-[548px]'>
                        <img src="/images/features/BFHRM03INOLL101_cover image.jpg" className='w-full h-full object-cover' alt="" />
                        <div className='flex flex-col gap-[5px] text-justify'>
                            <p className='text-sm text-[#E8971E]'>May 27, 2022</p>
                            <h2 className='text-2xl font-bold text-white'>Can continuous learning amplify employees’ change-efficacy and contextual performance in a Post merger phase Brings You Success</h2>
                            <p className='text-lg text-[#BDBDBD]'>{isExpanded1 ? singleText: singleText.substring(0, 20) + "... "}
                                <span onClick={singleToggleReadMore} className="text-[#E8971E] font-light cursor-pointer">
                                    {isExpanded1 ? "Show Less" : "Read More"}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        {FeatureDate.map((item, index) => (
                            <div key={index} className='flex gap-4 max-w-[700px] text-justify'>
                                <img src={item.img} className='w-[150px] h-full max-md:h-[90px] xl:w-[250px] object-cover rounded' alt="" />
                                <div className='text-white flex flex-col gap-2'>
                                    <h2 className='md:text-xl font-bold'>{item.title}</h2>
                                    <p className='md:text-[16px] font-normal tracking-[0.5px]'>
                                        {isExpanded[index] ? item.content : item.content.substring(0, 20) + "... "}
                                        <span onClick={() => toggleReadMore(index)} className="text-[#E8971E] font-light cursor-pointer">
                                            {isExpanded[index] ? "Show Less" : "Read More"}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
