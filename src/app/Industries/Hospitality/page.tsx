import Challenges from '@/components/Challenges/Challenges'
import IndustryFeature from '@/components/Features/IndustyFeature'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import IndustryMain from '@/components/IndustryMain/IndustryMain'
import Partners from '@/components/Partners/Partners'
import SuccessStories from '@/components/SuccesStories/SuccessStories'
import LeftCard from '@/components/Tools&Features/LeftCard'
import RightCard from '@/components/Tools&Features/RightCard'
import React from 'react'
interface DataProps {
    title: string,
    description: string,
    image: string,
    color: string,

}
const data: DataProps =
{
    title: "Empower Your Healthcare Organization to Overcome Today’s Challenges",
    description: "we provide cutting-edge tools and insights to help healthcare organizations navigate complex regulatory landscapes, enhance operational efficiency, and deliver patient-centered care.",
    image: "/images/industry/ind1.svg",
    color: "#FFD700",

}

interface DataLeftProps {
    title: string;
    description: string;
    content: string;
  }
  const DataLeft:DataLeftProps = {
    title: "Tools & Features",
    description: "Assess and Elevate Your Organizational Maturity",
    content: "Transform your organization’s learning and development journey with our comprehensive Maturity Assessment Tools. These tools are designed to help you understand, benchmark, and improve across various levels of organizational maturity."
  }
  /* Frame 1000006783 */




function page() {
    return (
        <div>
            <div className='bg-[#f1fff6]'>
                <Header />
                <IndustryMain data={data} />
            </div>
            <Challenges />
            <div className='flex flex-col my-16 gap-32'>
                <LeftCard data = {DataLeft} />
                <RightCard data = {DataLeft} />
                <LeftCard data = {DataLeft} />
            </div>
            <IndustryFeature/>
            <Partners/>
            <SuccessStories/>
            <Footer />
        </div>
    )
}

export default page
