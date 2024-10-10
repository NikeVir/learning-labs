'use client'
import React, { useState } from 'react'
import clsx from 'clsx'

const sections = [
    {
        id: 'table-of-contents',
        title: 'Maturity assessment tools',
        link:"https://www.youtube.com/embed/lJIrF4YjHfQ?si=M7HF6ymgxgallexH"
    },
    { id: 'screencasts', title: 'Immersive Business simulations',link:"https://www.youtube.com/embed/kwaVP3JTtR8?si=tMg2NCNWFuqVz0fU" },
    { id: 'resources', title: 'On-demand research & consultation',link:"https://www.youtube.com/embed/w5wwwEUf_iA?si=jTg_pRJo-B6_rSNd" },
    { id: 'pricing', title: 'Custom learning program development',link:"https://www.youtube.com/embed/7ic6lrYyQuI?si=Tbf9A7nsUoayyg9G" },

]
function Overview() {
    let [activeIndex, setActiveIndex] = useState<number >(0);
    return (
        <div className='flex justify-center'>

        <div className=' w-[95%] lg:w-[80%] flex-col flex  lg:min-h-screen my-10 justify-center items-center '>
            <div className=' w-full'>
                <div className=" sm:flex  sm:h-32 sm:justify-center  ">
                    <div
                        role="list"
                        className="mb-[-2px]  flex max-md:flex-wrap gap-4  w-full justify-center border-black bg-white text-base font-medium text-slate-900 [counter-reset:section]"
                        >
                        {sections.map((section, sectionIndex) => (
                            <div key={section.id} className="flex relative w-[150px] h-[100px] lg:w-[236px]  xl:w-[276px] lg:h-[124px]  ">
                                <a
                                    onClick={() => setActiveIndex(sectionIndex)}
                                    className={clsx(
                                        'flex w-full flex-col items-center justify-center border-b-2 before:mb-2 before:font-mono',
                                        sectionIndex === activeIndex
                                            ? 'border-blue-600 bg-[#4AB371]  text-blue-600 before:text-blue-600'
                                            : 'border-transparent bg-[#f2f2f2]',
                                        )}
                                        >
                                    <div className={`flex flex-col gap-2 max-sm:px-2 text-sm md:text-lg text-center lg:w-[160px] ${sectionIndex === activeIndex ? "text-white " : "text-[#004c92]"} font-bold`}>
                                        {section.title}
                                    </div>
                                </a>
                                {
                                    sectionIndex === activeIndex ? (
                                        <div className='w-full bottom-0 absolute rounded-full h-1 bg-[white]'></div>
                                    ) : (<div className='w-full bottom-0 absolute rounded-full h-1 bg-[#004c92]'></div>)
                                }

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full border  flex justify-center my-5'>

                <div className='w-full border'>
                    <iframe  className='min-h-[50vh] lg:min-h-[70vh] min-w-[100%]' src={sections[activeIndex].link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>

                </div>

            </div>

        </div>
                        </div>
    )
}

export default Overview
