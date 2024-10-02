import React from 'react'
import AdvisoryCards from './AdvisoryCards'

function Advisory() {
  return (
    <div className='flex flex-col gap-16 min-h-[80vh] py-12'>
        <div>
        <p className='text-center font-bold text-[42px]'>
        Our Advisory
            </p></div>
        <div className='flex max-md:flex-wrap justify-center gap-6'>
            <AdvisoryCards/>
            <AdvisoryCards/>
            <AdvisoryCards/>
        </div>
    </div>
  )
}

export default Advisory
