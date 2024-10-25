import React from 'react'
import AdvisoryCards from './AdvisoryCards'
import SliderCard from '../Overview/SliderCard'

interface CardData {
    image: string,
    name: string,
    position: string,
    company: string,
    details:string
}
const cardData:CardData[] = [
    {
        image: '/images/advisory/adv1.jpeg',
        name: 'Mr. Viraj Varma',
        position: ' Org. Development & Change Management',
        company: 'Indian Institute of Management, Ranchi',
        details:"Dr. Viraj Varma is the Chairperson at IIM, Ranchi as well as visiting faculty at XLRI. He is an authority in Performance Management, Organization Development and Change, Organizational Design, and Leadership and Change. Before he started his illustrious academic career he served in senior management positions in large multinational companies. In addition to mentoring doctoral students, he consults senior managers of large PSUs and private enterprises on a regular basis."
    },
    {
        image: '/images/advisory/adv2.jpg',
        name: 'Dr. Sunil Budhiraja',
        position: 'Org. diagnostics & analytics',
        company: ' Tata Institute of Social Sciences',
        details:"Dr. Sunil Budhiraja is a well know authority in conducting psychometric tests, building learning organizations, driving organization change, and enhancing employee performance in large global enterprises. His 18 years of rich consulting and research experience has culminated in over 50 management development programs across India."
    },
    // {
    //     image: '/images/advisory/adv3.png',
    //     name: 'Dhriti Shetty',
    //     position: 'Organization Psychologist',
    //     company: 'Learning & Development',
    //       details:"Ms. Dhriti Shetty holds a masters degree in Organization Psychology and Psychiatry. She is an certified expert in Thematic Apperception testing."
    // },
]


function Advisory() {
  return (
    <div className='flex flex-col gap-16 py-16 lg:py-24'>
        <div>
        <p className='text-center font-bold text-[42px]'>
        Our Advisors
            </p></div>
        <div className='flex  max-md:flex-wrap justify-center gap-16'>
            {cardData.map((data, index) => (
                <AdvisoryCards key={index} data={data} />
            ))}
        </div>
        {/* <div className=' w-full'>

            <SliderCard />
        </div> */}
    </div>
  )
}

export default Advisory
