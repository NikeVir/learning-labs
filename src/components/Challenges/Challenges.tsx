import React from 'react'

function Challenges() {
  return (
    <div className='flex justify-center min-h-[100vh] '>
        <div className='w-[70%] my-16'>
                <div className='flex justify-center'>
                    <h1 className='font-bold text-[2.6rem]'>Challenges</h1>
                </div>
                <div className='flex gap-6 mt-16 min-h-[80vh] '>
                    <div className='relative'>
                        <img src="/images/challenges/challenge1.png" className='absolute w-[368px] h-[501px]' alt="placeholder" />
                        <div className='relative pt-8 px-6'>
                            <h2 className='text-[#FEBF00] font-bold text-2xl'>Operational Efficiency</h2>
                            <p className='text-xl font-medium text-white mt-2'>Ensuring smooth operations while managing costs and improving patient outcomes.</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="/images/challenges/challenge2.png" className='absolute w-[368px] h-[501px]' alt="placeholder" />
                        <div className='relative pt-8 px-6'>
                            <h2 className='text-[#FEBF00] font-bold text-2xl'>Operational Efficiency</h2>
                            <p className='text-xl font-medium text-white mt-2'>Ensuring smooth operations while managing costs and improving patient outcomes.</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="/images/challenges/challenge3.png" className='absolute w-[368px] h-[501px]' alt="placeholder" />
                        <div className='relative pt-8 px-6'>
                            <h2 className='text-[#FEBF00] font-bold text-2xl'>Operational Efficiency</h2>
                            <p className='text-xl font-medium text-white mt-2'>Ensuring smooth operations while managing costs and improving patient outcomes.</p>
                        </div>
                    </div>
                </div>

        </div>
      
    </div>
  )
}

export default Challenges
