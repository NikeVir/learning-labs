import React from 'react'
interface ChallengesData {
    title: string,
    description: string,
    image: string,
  
  
  }

const data:ChallengesData[] = [
    {
        title: "Operational Efficiency",
        description: "Ensuring smooth operations while managing costs and improving patient outcomes.",
        image: "/images/challenges/challenge1.png",
    },
    {
        title: "Operational Efficiency",
        description: "Providing ongoing training for healthcare professionals to keep up with new technologies and procedures.",
        image: "/images/challenges/challenge3.png",
    },
    {
        title: "Patient-Centered Care",
        description: "Balancing the growing demand for personalized care while maintaining quality across services.",
        image: "/images/challenges/challenge3.png",
    },
]


function Challenges() {
  return (
    <div className='flex justify-center min-h-[100vh] '>
        <div className='w-[95%] xl:w-[80%] my-16'>
                <div className='flex justify-center'>
                    <h1 className='font-bold text-[2.6rem]'>Challenges</h1>
                </div>
                <div className='flex justify-center max-lg:flex-wrap w-full gap-6 mt-16 min-h-[80vh] '>
                    {
                        data.map((item, index) => (
                            <div className='relative min-w-[368px] lg:min-w-[320px] xl:min-w-[368px] h-[501px]' key={index}>
                                <img src={item.image} className='absolute min-w-[368px] lg:min-w-[320px] xl:min-w-[368px] h-[501px]' alt="placeholder" />
                                {/* <div className='absolute border bg-[linear-gradient(180deg,#000000_3.2%,#00000000_100%)] w-[100%] h-[501px] rounded-[20px]'></div> */}
                                <div className='relative pt-8 px-6 w-[323px]'>
                                    <h2 className='text-[#FEBF00] font-bold text-2xl'>{item.title}</h2>
                                    <p className='text-xl font-medium text-white mt-2'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>

        </div>
      
    </div>
  )
}

export default Challenges
