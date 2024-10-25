import React from 'react';

function Partners2() {
  return (
    <div className='py-20 flex justify-center items-center'>
      <div className='w-[95%] xl:w-[80%]'>
        <div className='flex justify-center text-center'>
          <div className='max-w-[774px] flex flex-col gap-4'>
            <div className='text-[2.6rem] font-bold text-white'>Founding Team</div>
          </div>
        </div>
        <div className='flex justify-center max-lg:flex-wrap mt-[50px] gap-16'>
          <div className='relative bg-[rgba(250,250,250,0.08)] rounded-[20px] w-[400px] h-[405px] border border-[#E6E6E6] flex justify-center items-center hover:border-[#FF3438] hover:border-[3px] hover:bg-[#001631] group transition-all duration-300'>
            <div className='text-white h-[274px] text-center flex flex-col items-center justify-center gap-2'>
              <img src='/images/mem1.jpg' className='min-w-[201px] max-w-[201px] max-h-[201px] min-h-[201px] rounded-[100%]' alt='' />
              <div className='text-2xl font-medium'>Parikshit Roy Chowdhury</div>
              <div className='text-base text-[#ffbf23]'>Cofounder & Chief Executive Officer</div>
              <a href='https://www.linkedin.com/in/parikshit-roy-chowdhury-86a7b4165' target='_blank' className='flex justify-center'>
                <img src='/images/logos/linkedin.svg' className='w-[31.5px] h-[31.5px]' alt='' />
              </a>
            </div>
            {/* Hidden Description on hover */}
            <div className='absolute top-0 left-0 w-full h-full flex-col rounded-[20px] gap-2 bg-black bg-opacity-80 text-white p-4 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300'>
              <p>Parikshit has spreadheaded large global business operations for 2 decades in India, China, Asia Pacific, Europe & Latin America. He has been a founding member of a few startups in India and participates as a board member in varied companies.</p>
              <a href='https://www.linkedin.com/in/shafeeq-ahmed-9a5030b9' target='_blank' className='flex justify-center'>
                <img src='/images/logos/linkedin.svg' className='w-[31.5px] h-[31.5px]' alt='' />
              </a>
            </div>
          </div>

          <div className='relative bg-[rgba(250,250,250,0.08)] rounded-[20px] w-[400px] h-[405px] border border-[#E6E6E6] flex justify-center items-center hover:border-[#FF3438] hover:border-[3px] hover:bg-[#001631] group transition-all duration-300'>
            <div className='text-white h-[274px] text-center flex flex-col items-center justify-center gap-2'>
              <img src='/images/mem2.jpg' className='min-w-[201px] max-w-[201px] max-h-[201px] min-h-[201px] rounded-[100%]' alt='' />
              <div className='text-2xl font-medium'>Shafeeq Ahmed</div>
              <div className='text-base text-[#ffbf23]'>Cofounder & Chief Product Officer</div>
              <a href='https://www.linkedin.com/in/shafeeq-ahmed-9a5030b9' target='_blank' className='flex justify-center'>
                <img src='/images/logos/linkedin.svg' className='w-[31.5px] h-[31.5px]' alt='' />
              </a>
            </div>
            {/* Hidden Description on hover */}
            <div className='absolute top-0 left-0 w-full h-full rounded-[20px] flex-col gap-2 bg-black bg-opacity-80 text-white p-4 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300'>
              <p>Shafeeq is highly regarded by India's leading blue-chip companies for his groundbreaking strategic interventions that drive transformation and growth. Known for his innovative and deeply engaging content, his delivery sets a benchmark in the L&D community. As the Founder of Learning Labs, Shafeeq’s passion for practical, resultsdriven learning solutions empowers organizations and teams to continuously reinvent themselves, unlocking new levels of performance and excellence.  </p>
              <a href='https://www.linkedin.com/in/shafeeq-ahmed-9a5030b9' target='_blank' className='flex justify-center'>
                <img src='/images/logos/linkedin.svg' className='w-[31.5px] h-[31.5px]' alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners2;
