import React from 'react'

const data = [
    {
        title: 'Maturity Assessment tools',
        img:'/images/scrollcontent/oursol (1).svg',
        desc:"Based on extensive research and in consultation with industry experts, our assessments assess various mental model, job holder maturity, team dynamics, organization agility & leadership relevant parameters. These assessments are available in our online platform. On completion of the same, a professional report with an overview of capability gaps and strengths is sent to the respondent.",
        color:'#fe393c',
        containerCol:'#FFF4F1'
    },
    {
        title: 'Immersive Business simulation',
        img:'/images/scrollcontent/oursol (2).svg',
        desc:"These business simulation games foster self-discovery, self evaluation & cultivates new perspectives in an non-intrusive fashion. These are table top games, which can be played in an informal & casual group ambience. The relevant evaluation is at individual level. It is ideal for evaluating team dynamics, high potentials and senior leadership.",
        color:'#ffbf23',
        containerCol:'#FFFCF1'
    },
    {
        title: 'On-demand research & consultation',
        img:'/images/scrollcontent/oursol (3).svg',
        desc:"Organization research is our core activity, based on which our relevant tools are conceived, formulated and built. We do receive request from various organizations to undertake topic or organization specific research e.g. benchmarking. Other than our own research team, relevant subject experts & practitioners are involved into such projects. We do support one on one consultation sessions with any of our global subject experts, in case client organizations request.",
        color:'#004c92',
        containerCol:'#F1F5FF'
    },
    {
        title: 'Custom learning program development',
        img:'/images/scrollcontent/oursol (4).svg',
        desc:"On a regular basis, we do support organizations on building custom learning programs. Generally, such requests are topic specific. Need Diagnostic Study (NDS) is followed by a recommendation report from our team. Once approved, the relevant learning program is built from scratch and delivered.",
        color:'#00b84d',
        containerCol:'#F1FFF6'
    },
]

export default function OurSolution() {
  return (
    <div>
        <div className=' py-10 pb-20 w-full border flex flex-col gap-8 items-center border-black'>
            <div>
                <h1 className='text-center text-[#001631]  font-bold sm:text-[42px] text-[38px]'>Our Solutions</h1>
            </div>

            <div className=' w-[85%] sm:w-[95%] lg:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4'>
                {
                    data.map((item, index) => (
                        <div key={index} style={{background:item.containerCol}} className={`max-[300px] flex flex-col   `}>
                            <div  className='flex  mb-2 items-center  min-h-[100px] bg-white justify-center '>
                                <img src={item.img} className='w-[80px] h-[80px]' alt="" />
                            </div>
                            <div style={{background:item.color}}>
                                <p className='text-white text-center flex items-center justify-center text-xl font-bold py-2 px-3 min-h-[75px]'>
                                    {item.title}
                                </p>
                            </div>
                            <div className='px-4 py-2'>
                                <p className='text-sm text-[#004B96] text-justify font-medium'>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))
                }
  

            </div>

        </div>
      
    </div>
  )
}
