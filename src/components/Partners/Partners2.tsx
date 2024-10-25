import React from 'react'
import PartnerCard from './PartnerCard'

function Partners2() {
  return (
    <div className=' py-20 flex justify-center items-center'>
      <div className='w-[95%] xl:w-[80%]  '>
        <div className=' flex justify-center text-center'>
          <div className='max-w-[774px] flex flex-col gap-4'>

            <div className='text-[2.6rem] font-bold text-white' >Founding Team</div>
            {/* <div className='text-[#E0E0E0] text-base'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div> */}
          </div>
        </div>
        <div className='flex justify-center max-lg:flex-wrap mt-[50px] gap-16'>
          <div className='bg-[rgba(250,250,250,0.08)] rounded-[20px] w-[400px] h-[405px] border border-[#E6E6E6] flex justify-center items-center hover:border-[#FF3438] hover:border-[3px] hover:bg-[#040509]'>
            <div className=' text-white h-[274px] text-center flex flex-col items-center justify-center gap-2'>
              <img src='/images/mem1.jpg' className='min-w-[201px] max-w-[201px] max-h-[201px] min-h-[201px] rounded-[100%]' alt='' />
              <div className='text-2xl font-medium' > Parikshit Roy Chowdhury
              </div>
              <div className='text-base text-[#ffbf23]'> Cofounder & Chief Executive Officer</div>
              {/* <div className='text-lg text-[#FEBF00]'>IIM Ranchi</div> */}
              <a href='https://www.linkedin.com/in/parikshit-roy-chowdhury-86a7b4165' target='_blank' className='flex justify-center'>

                <img src='/images/logos/linkedin.svg' className='w-[31.5px] h-[31.5px]' alt='' />
              </a>
            </div>
          </div>
          <div className='bg-[rgba(250,250,250,0.08)] rounded-[20px] w-[400px] h-[405px] border border-[#E6E6E6] flex justify-center items-center hover:border-[#FF3438] hover:border-[3px] hover:bg-[#040509]'>
            <div className=' text-white h-[274px] text-center flex flex-col items-center justify-center gap-2'>
              <img src='/images/mem2.jpg' className='min-w-[201px] max-w-[201px] max-h-[201px] min-h-[201px] rounded-[100%]' alt='' />
              <div className='text-2xl font-medium' >Shafeeq Ahmed
              </div>
              <div className='text-base text-[#ffbf23]'> Cofounder & Chief Product Officer
              </div>
              {/* <div className='text-lg text-[#FEBF00]'>IIM Ranchi</div> */}
              <a href='https://www.linkedin.com/in/shafeeq-ahmed-9a5030b9' target='_blank' className='flex justify-center'>

                <img src='/images/logos/linkedin.svg' className='w-[31.5px] h-[31.5px]' alt='' />
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Partners2
