import FAQs from '@/components/Faq/Faq'
import FAQ2s from '@/components/Faq/Faq2'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Objectives from '@/components/Objectives/Objectives'
import { Button } from '@/components/ui/Button'
import React from 'react'
/* Simplify Your Learning Experience */

function page() {
  return (
    <div className='bg-[#f1fff6]'>
      <Header />
      <div className='flex justify-center '>

        <div className='2xl:w-[80%] xl:w-[90%] w-[95%] flex  max-lg:flex-col gap-8'>
          <div className='xl:basis-2/3   pr-5 flex flex-col items-center justify-center gap-[66px]'>
            <div className='flex relative z-10  items-center'>
              <img src='/images/communities/background.svg' className='absolute left-[5%] top-[20%]' alt='community' />
              <div className=' relative flex flex-col gap-16'>
                <div className=' lg:text-left  text-center flex justify-center items-center'>
                  <div >
                    <div className='text-[#0E0637] font-bold leading-[64px] text-[3.4rem] flex flex-col gap-3'>
                      <p>Simplify Your</p>
                      <p className='font-bold -mt-3 bg-[linear-gradient(128.53deg,#22C55E_-15.65%,#18763C_57.69%)] bg-clip-text text-transparent'>  Learning Experience</p>
                    </div>
                    <p className='text-[#393939] mt-2 max-w-[661px] text-xl font-medium '>Managing a hackathon can be a challenge without the right tools. We simplified this process to create a better platform experience for your organization. </p>
                  </div>
                </div>

                <div>
                  <section className='flex justify-center  '>
                    <div className='lg:w-[690px]  '>

                      <div className='flex flex-wrap max-lg:justify-center gap-6 '>

                        <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] h-[66px] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md  shadow-logobox w-[189px]'>
                          <img src='/images/logos/maskg (1).svg' alt='partner' />
                        </div>
                        <div className='p-[1px] shadow-logobox rounded-md flex justify-center '>
                          <div className='bg-[#FEBF00] flex justify-center items-center py-[9.33px] h-[66px] px-[11.88px] rounded-md  w-[189px]'>
                            <img src='/images/logos/maskg (2).svg' alt='partner' />
                          </div>
                        </div>
                        <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] h-[66px] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
                          <img src='/images/logos/maskg (3).svg' alt='partner' />
                        </div>
                        <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] h-[66px] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
                          <img src='/images/logos/maskg (4).svg' alt='partner' />
                        </div>
                        <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] h-[66px] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
                          <img src='/images/logos/maskg (5).svg' alt='partner' />
                        </div>
                        <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] h-[66px] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
                          <img src='/images/logos/maskg (6).svg' alt='partner' />
                        </div>
                        <div className='bg-[linear-gradient(180deg,#FAFAFA_0%,#FFFFFF_100%)] h-[66px] flex justify-center items-center py-[9.33px] px-[11.88px] rounded-md shadow-logobox w-[189px]'>
                          <img src='/images/logos/maskg (7).svg' alt='partner' />
                        </div>

                      </div>

                    </div>
                  </section>
                </div>


              </div>

            </div>
            <div>

              <div className='max-lg:text-center'>
                <div className='text-[2.6rem] leading-[50px] font-bold '>
                  who will benefit by doing the OLL community
                </div>
                <div className='text-[#393939] mt-2 font-medium text-lg '>
                  Managing a hackathon can be a challenge without the right tools. We simplified this process to create a better platform experience for your organization.
                </div>
              </div>

              <div className='flex flex-wrap justify-center mt-4 gap-[18px] '>
                <div className='flex flex-col gap-4'>
                  <div className='w-[184px] h-[184px] rounded-[100%] flex justify-center items-center shadow-featurebox bg-white'>
                    <img src='/images/communities/Ellipse 4517.png' alt='feature' />
                  </div>
                  <p className='w-[201px] text-sm font-medium text-center'>Learning and Development professionals</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='w-[184px] h-[184px] rounded-[100%] flex justify-center items-center shadow-featurebox bg-white'>
                    <img src='/images/communities/Ellipse 4519.png' alt='feature' />
                  </div>
                  <p className='w-[201px] text-sm font-medium text-center'>Learning and Development professionals</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='w-[184px] h-[184px] rounded-[100%] flex justify-center items-center shadow-featurebox bg-white'>
                    <img src='/images/communities/Ellipse 4520.png' alt='feature' />
                  </div>
                  <p className='w-[201px] text-sm font-medium text-center'>Learning and Development professionals</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='w-[184px] h-[184px] rounded-[100%] flex justify-center items-center shadow-featurebox bg-white'>
                    <img src='/images/communities/Ellipse 4521.png' alt='feature' />
                  </div>
                  <p className='w-[201px] text-sm font-medium text-center'>Learning and Development professionals</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='w-[184px] h-[184px] rounded-[100%] flex justify-center items-center shadow-featurebox bg-white'>
                    <img src='/images/communities/Ellipse 4523.png' alt='feature' />
                  </div>
                  <p className='w-[201px] text-sm font-medium text-center'>Learning and Development professionals</p>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='w-[184px] h-[184px] rounded-[100%] flex justify-center items-center shadow-featurebox bg-white'>
                    <img src='/images/communities/Ellipse 4524.png' alt='feature' />
                  </div>
                  <p className='w-[201px] text-sm font-medium text-center'>Learning and Development professionals</p>
                </div>

              </div>
            </div>
            <div className='flex justify-center'>


              <div className='md:w-[691px] h-[940px]  rounded-xl  relative overflow-hidden'>
                <img src='/images/knowledge/frame.png' className='absolute  h-full' alt='partner' />
                <div className='relative py-[74px] px-4 sm:px-[44px] flex flex-col gap-[60px]'>
                  <div>
                    <p className='font-bold max-lg:text-center md:text-[2.6rem] text-3xl text-white md:leading-[50px] '>Benefits of joining the OLL community</p>
                  </div>
                  <div className=' flex justify-start'>

                    <Objectives />
                  </div>
                </div>
              </div>
              <div>
              </div>

            </div>
              <FAQ2s colortheme='blue' />

          </div>
          <div className=' max-lg:basis-1/3 lg:w-[442px] border max-h-[882px]  rounded-xl flex flex-col  gap-4 p-11 bg-white shadow-logobox'>
            <div>
              <div className='text-[2.6rem] leading-[50px] font-medium text-center'>
                Join Community
              </div>
              <div className='text-[#393939] mt-2 font-medium text-lg text-center'>
                Managing a hackathon can be a challenge without the right tools. We simplified this process to create a better platform experience for your organization.
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex gap-4  text-[#525252] text-lg font-medium'><div className=' mt-[10px] w-[11px] h-[11px] rounded-full bg-[#004B96]' ></div>
                Define an implementation path</div>
              <div className='flex gap-4  text-[#525252] text-lg font-medium'><div className=' mt-[10px] min-w-[11px] h-[11px] rounded-full bg-[#FE363A]' ></div>
                Identify best practices and conceptual models regarding the topic</div>
              <div className='flex gap-4  text-[#525252] text-lg font-medium'><div className=' mt-[10px] min-w-[11px] h-[11px] rounded-full bg-[#4AB371]' ></div>
                Identify best practices and conceptual models regarding the topic</div>
              <div className='flex gap-4  text-[#525252] text-lg font-medium'><div className='mt-[10px] w-[11px] h-[11px] rounded-full bg-[#525252]' ></div>
                Define an implementation path</div>
              <div className='flex gap-4  text-[#525252] text-lg font-medium'><div className=' mt-[10px] w-[11px] h-[11px] rounded-full bg-[#525252]' ></div>
                Design joint tools & interventions</div>
              <div className='flex gap-4  text-[#525252] text-lg font-medium'><div className='mt-[10px] w-[11px] h-[11px] rounded-full bg-[#FEBF00]' ></div>
                Joint client projects & interventions</div>
            </div>
            <div className='flex flex-col mt-6 justify-center items-center gap-4 mx-4 '>
              <Button variant={'primary'} className='w-full max-w-[344px]'>Join Community</Button>
              <Button variant={'white'} className='w-full max-w-[344px] flex items-center justify-center gap-4'> <img src="images/communities/google.svg" alt='' /> Join Via Google</Button>
              <Button variant={'primary'} className='w-full max-w-[344px] flex items-center justify-center bg-[linear-gradient(135deg,#2489BE_14.64%,#0575B3_85.36%)] gap-4'> <img src="images/communities/linkedin.svg" alt='' /> Join Via Linked In</Button>
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default page
