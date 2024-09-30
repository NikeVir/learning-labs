import React from 'react'
import FooterLinks from './FooterLinks'

function Footer() {
  return (
    <div className='flex items-center flex-col gap-16 bg-[#000C19] py-8'>
        <div className='w-[70%] z-0 relative flex h-[383px]   items-center justify-center'>
            <img src="/images/footer/footer1.png" className='rounded-3xl absolute' alt="Logo" />
            <div className='flex items-center flex-col relative justify-center gap-[3.4rem]'>
                <img src="/images/footer/footerlogo.svg" className='z-2' alt="Logo" />
                <p className='text-white text-[2.6rem] font-bold'>Learn. Evolve. Reinvent</p>
            </div>
        </div>

        <div className='w-[80%] relative h-[383px] bg-[#000C19] items-center justify-center'>
            <img src="/images/footer/footer2.png" className='rounded-3xl bg-[#000C19] absolute' alt="Logo" />
            <div className='relative'>
                <FooterLinks/>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
