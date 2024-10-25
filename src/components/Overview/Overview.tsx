'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
const logos = [
    '/images/logos/lnt.svg',
    '/images/logos/sam.svg',
    '/images/logos/chayo.svg',
    '/images/logos/pwc (2).svg',
    '/images/logos/rel.svg',
]

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
        <div className='flex flex-col  items-center justify-center'>

        <div className=' max-md:w-[100%] w-full bg-[#001631]    flex-col flex justify-center items-center '>
            {/* <div className=' w-full '>
                <div className=" sm:flex w-full sm:h-32 sm:justify-center  ">
                    <div
                        role="list"
                        className="mb-[-2px]  flex gap-4   max-md:overflow-x-scroll md:justify-center w-full   bg-white text-base font-medium text-slate-900"
                        >
                        {sections.map((section, sectionIndex) => (
                            <div key={section.id} className="flex relative m-auto min-w-[150px] min-h-[80px] lg:w-[236px]  xl:w-[276px] md:min-w-[150px] lg:h-[124px]  ">
                                <a
                                    onClick={() => setActiveIndex(sectionIndex)}
                                    className={clsx(
                                        'flex w-full flex-col items-center  justify-center border-b-2 before:mb-2 before:font-mono',
                                        sectionIndex === activeIndex
                                            ? 'border-blue-600 bg-[#004c92]  text-blue-600 before:text-blue-600'
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
            </div> */}
            <div className='w-full   flex justify-center '>

                <div className='w-full px-2 sm:px-5  py-[2%] '>
                    <iframe  className='min-h-[50vh] border-white border lg:min-h-[80vh] min-w-[100%]' src={sections[activeIndex].link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>

                </div>

            </div>

        </div>
        {/* <div className='flex max-lg:flex-wrap items-center justify-center my-10 mb-20 gap-4 md:gap-8 '>
                {
                    logos.map((logo, index) => (
                        <div className=' md:min-w-[188px] min-h-[40px] md:min-h-[66px] flex justify-center items-center min-w-[188px] border border-[#FAFAFA33]  rounded-[50px]'>
                            <img key={index} src={logo} className='max-sm:min-h-[25px] max-sm:max-h-[80px] max-sm:min-w-[200px]' alt="" />
                        </div>
                    ))
                }

            </div> */}
                        </div>
    )
}

export default Overview
