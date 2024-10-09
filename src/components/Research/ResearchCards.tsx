import React from 'react'

interface CardData {
  image: string,
  title: string,
  description: string,
  status: string
}

function ResearchCards({ data }: { data: CardData }) {
  return (
    <div className='max-w-[368px] relative flex flex-col items-center xl:min-h-[500px] py-[22px] px-[22px] rounded-3xl bg-[#141f2b]'>
      <div className='flex flex-col gap-5'>
        <img src={data.image} className='rounded-3xl max-w-[324px] min-h-[224px]' alt="Research" />
        <div className='flex flex-col gap-3 '>
          <p className='text-xl  font-bold text-white '>
            {data.title}
          </p>
          <p className=' font-normal mb-5 xl:text-sm leading-6 text-white'>
            {data.description.substring(0, 200)}
          </p>
          <div className={`${data.status == "Ongoing" ? "text-[#ffbf23]" : "text-[#00b84d]"} absolute bottom-5`}>

            {data.status}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchCards
