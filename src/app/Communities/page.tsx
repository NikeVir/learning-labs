import CommunityFaq from '@/components/Faq/CommunityFaq'
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
    <div >
      <Header />
      <section className='relative overflow-hidden '>
        <img src='/images/bann1.jpg' alt='about' className='w-full blur-[2px]  h-[60vh] sm:h-[75vh] absolute' />
        <div className='absolute  bg-[black] opacity-50 w-[100%] h-[60vh] sm:h-[75vh] '></div>

        <div className='relative flex flex-col h-[60vh] sm:h-[75vh] items-center justify-center' >

          <div className='w-[75%] '>
            <p className='text-white text-2xl md:text-3xl xl:text-5xl xl:leading-[55px] font-bold  '>
              "The best collaborations create something bigger than the sum of what each person can create on their own "

            </p>

            <p className=' text-[#ffc000]  text-2xl md:text-3xl xl:text-5xl xl:leading-[55px] font-bold mt-10'>
              We support our community members with our professional tools and indepth knowhow, to augument their exceptional facilitation capabilities to unleash unparalleled growth & prosperity in client organizations.

            </p>
          </div>
        </div>
      </section>
      <section className='flex justify-center items-center my-10'>
        <div className='w-[90%] xl:w-[80%] flex max-md:flex-wrap justify-center max-md:gap-10'>

          <div className=' max-lg:basis-1/3 max-md:min-w-full lg:min-w-[420px]  xl:max-h-[882px]  rounded-xl flex flex-col  gap-4 p-11 bg-[#002060] shadow-logobox'>
            <div className='relative '>
              <img src='/images/communities/background.svg' className='absolute left-[5%] top-[20%]' alt='community' />
              <div className='relative'>

                <div className='text-3xl sm:text-[2.6rem] text-white sm:leading-[50px] font-medium text-center'>
                  Join OLL community
                </div>
                <div className=' mt-2 font-medium text-[#88beda] text-lg '>
                  Join OLL community via linked or gmail.
                  You may also choose to fill our short
                  registration form and submit.
                  <p>

                    Looking forward to co-create with you!!
                  </p>

                </div>
              </div>
            </div>

            <div className='flex flex-col mt-6 justify-center items-center gap-4 mx-4 '>
              <Button variant={'primary'} className='w-full max-w-[344px] max-sm:text-base max-sm:py-4'>Join Community</Button>
              <Button variant={'white'} className='w-full max-w-[344px] flex items-center justify-center gap-4 max-sm:text-base max-sm:py-4'> <img src="images/communities/google.svg" alt='' /> Join Via Google</Button>
              <Button variant={'primary'} className='w-full max-w-[344px] flex items-center justify-center bg-[linear-gradient(135deg,#2489BE_14.64%,#0575B3_85.36%)] gap-4 max-sm:text-base max-sm:py-4'> <img src="images/communities/linkedin.svg" alt='' /> Join Via Linked In</Button>
            </div>

          </div>
          <div className='max:lg:basis-1/2 '>
            <CommunityFaq colortheme='blue' />
          </div>
        </div>
      </section>
      <div className='flex justify-center '>

        <div className='2xl:w-[80%] mt-10` xl:w-[90%] w-[95%] flex  max-lg:flex-col gap-8'>
          {/* <div className='xl:basis-2/3   xl:pr-5 flex flex-col items-center justify-center gap-[66px]'> */}
          <div className=' flex flex-col items-center justify-center gap-[66px]'>
            {/* <div className='flex relative z-10   items-center'>
              <img src='/images/communities/background.svg' className='absolute left-[5%] top-[20%]' alt='community' />
              <div className=' relative flex flex-col gap-16'>
                <div className=' lg:text-left max-sm:my-10  text-center flex justify-center items-center'>
                  <div >
                    <div className='text-[#0E0637] font-bold text-3xl sm:leading-[64px] sm:text-[3.4rem] flex flex-col gap-3'>
                      <p>Simplify Your</p>
                      <p className='font-bold -mt-3 bg-[linear-gradient(128.53deg,#22C55E_-15.65%,#18763C_57.69%)] bg-clip-text text-transparent'>  Learning Experience</p>
                    </div>
                    <p className='text-[#393939] mt-2 max-w-[661px] text-base sm:text-xl font-medium '>Managing a hackathon can be a challenge without the right tools. We simplified this process to create a better platform experience for your organization. </p>
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
            </div> */}
            {/* <div className=' items-center justify-center '>

              <div className='text-center mt-10'>
                <div className='text-3xl sm:text-[2.6rem] sm:leading-[50px] font-bold '>
                  who will benefit by doing the OLL community
                </div>
                <div className='text-[#393939] mt-2 font-medium text-lg '>
                  Managing a hackathon can be a challenge without the right tools. We simplified this process to create a better platform experience for your organization.
                </div>
              </div>

              <div className='flex flex-wrap items-center justify-center mt-4 gap-[18px] '>
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
            </div> */}
            {/* <div className='flex justify-center'>


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

            </div> */}

            {/* <FAQ2s colortheme='blue' /> */}

          </div>
          
          {/* <div className=' max-lg:basis-1/3 lg:w-[442px] border xl:max-h-[882px]  rounded-xl flex flex-col  gap-4 p-11 bg-white shadow-logobox'>
            <div>
              <div className='text-3xl sm:text-[2.6rem] sm:leading-[50px] font-medium text-center'>
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
              <Button variant={'primary'} className='w-full max-w-[344px] max-sm:text-base max-sm:py-4'>Join Community</Button>
              <Button variant={'white'} className='w-full max-w-[344px] flex items-center justify-center gap-4 max-sm:text-base max-sm:py-4'> <img src="images/communities/google.svg" alt='' /> Join Via Google</Button>
              <Button variant={'primary'} className='w-full max-w-[344px] flex items-center justify-center bg-[linear-gradient(135deg,#2489BE_14.64%,#0575B3_85.36%)] gap-4 max-sm:text-base max-sm:py-4'> <img src="images/communities/linkedin.svg" alt='' /> Join Via Linked In</Button>
            </div>

          </div> */}

        </div>

      </div>
      {/* <div className='flex justify-center relative py-10 min-h-screen overflow-hidden'>
              <img src='/images/knowledge/frame.png' className='absolute  min-h-full w-full' alt='partner' />
              <div className='lg:w-[80%] w-[95%] flex max-md:flex-col gap-16 relative pt-24'>
                <div className='md:w-[528px] pt-6 max-md:text-center'>
                  <p className='text-white font-bold  text-[50px]'>Objective</p>
                  <p className='text-[#A8A8A8] text-base'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <Objectives />
              </div>
            </div> */}

      <Footer />

    </div>
  )
}

export default page
