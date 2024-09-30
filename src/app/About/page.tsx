import Advisory from '@/components/Advisory/Advisory'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Partners from '@/components/Partners/Partners'
import Teams from '@/components/team/Teams'
import { Button } from '@/components/ui/Button'
import React from 'react'

function page() {
  return (
    <div>
      <Header />
      <section className='flex justify-center'>
        <div className='w-[80%]'>
          <div >
            <div className='flex justify-center'>
              <div className='text-[2.6rem] w-[795px] leading-[50px] font-medium text-center text-[#100D22]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque <span className='text-[#4AB371] font-bold'> et nibh tincidunt bibendum.</span>
              </div>
            </div>
            <div className='flex gap-2 mt-4'>
              <div>
                <img src='/images/about/main1.png' alt='about' className='w-[564px] h-[561px]' />
              </div>
              <div className='flex flex-col gap-2'>
                <img src='/images/about/main2.png' alt='about' className='w-[564px] h-[274px]' />
                <img src='/images/about/main3.png' alt='about' className='w-[564px] h-[274px]' />
              </div>

            </div>
          </div>
          <div className='border-2 border-[#FEBF00] flex flex-col gap-6 rounded-3xl py-[40px] px-[59px]'>
            <h1 className='text-[#0E0637] font-bold text-[2.6rem] leading-[50px]'>Our Story</h1>
            <p className='max-w-[882px] font-medium text-lg text-[#100D22]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed pellentesque posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut nibh enim. </p>
            <p className='max-w-[882px] font-medium text-lg text-[#100D22]'>
              Enim semper nulla quis est. Est scelerisque malesuada maecenas augue elementum integer. Sollicitudin augue in libero eu neque augue diam lectus laoreet. Viverra amet, in massa integer tincidunt ullamcorper. Accumsan massa consequat amet cursus condimentum consectetur. Enim sem cursus viverra at imperdiet.
            </p>
            <div>
              <Button variant={'primary'}>Join Community</Button>
            </div>
          </div>
        </div>
      </section>
      <section className='flex justify-center my-20'>
        <div className='w-[926px] '>
          <div className='text-center'>
            <p className='text-[#FE363A] font-bold text-2xl'>We Partnered with the best</p>
          </div>
          <div className='flex mt-7 flex-wrap gap-6 justify-center'>
            <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
              <img src='/images/logos/maskg (1).svg' alt='partner' />
            </div>
            <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
              <img src='/images/logos/maskg (2).svg' alt='partner' />
            </div>
            <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
              <img src='/images/logos/maskg (3).svg' alt='partner' />
            </div>
            <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
              <img src='/images/logos/maskg (4).svg' alt='partner' />
            </div>
            <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
              <img src='/images/logos/maskg (5).svg' alt='partner' />
            </div>
            <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
              <img src='/images/logos/maskg (6).svg' alt='partner' />
            </div>
            <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
              <img src='/images/logos/maskg (7).svg' alt='partner' />
            </div>

          </div>

        </div>
      </section>
      <Teams />
      <section className='flex justify-center my-20'>
        <div className='w-[80%] flex gap-5'>
          <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] h-[100px] p-[2px] flex justify-center items-center  rounded-lg shadow-featurebox w-[277px]'>
            <div className=' flex items-center justify-center w-full h-full hover:bg-[#FEBF00] rounded-lg'>
              <div className='flex gap-2'>

              <div className='text-[#262626] font-bold text-[2.6rem]'>
                8K+
              </div>
              <div className='text-[#6F6F6F] mt-2'>
                <p>
                  Happy
                </p>
                <p>Ventures</p>
              </div>
              </div>

            </div>
          </div>
          <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] h-[100px] p-[2px] flex justify-center items-center  rounded-lg shadow-featurebox w-[277px]'>
            <div className=' flex items-center justify-center w-full h-full hover:bg-[#FEBF00] rounded-lg'>
              <div className='flex gap-2'>

              <div className='text-[#262626] font-bold text-[2.6rem]'>
                10K+
              </div>
              <div className='text-[#6F6F6F] mt-2'>
                <p>
                Startup
                </p>
                <p>Funded</p>
              </div>
              </div>

            </div>
          </div>
          <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] h-[100px] p-[2px] flex justify-center items-center  rounded-lg shadow-featurebox w-[277px]'>
            <div className=' flex items-center justify-center w-full h-full hover:bg-[#FEBF00] rounded-lg'>
              <div className='flex gap-2'>

              <div className='text-[#262626] font-bold text-[2.6rem]'>
                99+
              </div>
              <div className='text-[#6F6F6F] mt-2'>
                <p>
                  MillionDollar
                </p>
                <p>Pool</p>
              </div>
              </div>

            </div>
          </div>
          <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] h-[100px] p-[2px] flex justify-center items-center  rounded-lg shadow-featurebox w-[277px]'>
            <div className=' flex items-center justify-center w-full h-full hover:bg-[#FEBF00] rounded-lg'>
              <div className='flex gap-2'>

              <div className='text-[#262626] font-bold text-[2.6rem]'>
                10K+
              </div>
              <div className='text-[#6F6F6F] mt-2'>
                <p>
                Startup
                </p>
                <p>Funded</p>
              </div>
              </div>

            </div>
          </div>

        
        </div>
      </section>
      <Partners />
      <Footer />

    </div>
  )
}

export default page
