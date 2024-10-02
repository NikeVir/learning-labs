import Challenges from '@/components/Challenges/Challenges'
import IndustryFeature from '@/components/Features/IndustyFeature'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import IndustryMain from '@/components/IndustryMain/IndustryMain'
import Partners from '@/components/Partners/Partners'
import SuccessStories from '@/components/SuccesStories/SuccessStories'
import LastCard from '@/components/Tools&Features/LastCard'
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
    image: "/images/industry/ind3.svg",
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
  interface ContentItem {
    title: string;
    description: string;
  }
  
  interface RightProps {
    title: string;
    description: string;
    content: ContentItem[];
  }
  
  const DataRight:RightProps = {
    title: "Immersive Business simulations",
    description: "The Iceberg Model and Maturity at Different Levels",
    content: [
        {
            title: "The Iceberg Model",
            description: " Uncover hidden organizational dynamics, from surface events to deep-rooted challenges, with our Iceberg Model for organizational maturity."
        },
        {
            title: "Maturity at Different Levels",
            description: "Evaluate your organization’s progress across leadership, team performance, and structural maturity."
        },
    ]
  }

  const DataLast:RightProps = {
    title: "On-demand research & consultation",
    description: "Comprehensive Reports and Learning Journey",
    content: [
        {
            title: "Gap Assessment and Learning Journey",
            description: "Identify critical gaps within your organization and embark on a tailored learning journey to bridge these gaps effectively."
        },
    ]
  }
  




function page() {
    return (
        <div>
            <div className='bg-[linear-gradient(345.39deg,#FFFFFF_9.63%,#FFFCF1_51.2%)]'>
                <Header />
                <IndustryMain data={data} />
            </div>
            <Challenges />
            <div className='flex flex-col my-16 gap-32'>
                <LeftCard data = {DataLeft} />
                <RightCard data = {DataRight} />
                <LastCard data = {DataLast} />
            </div>
            <IndustryFeature/>
            <Partners/>
            <SuccessStories/>
            <Footer />
        </div>
    )
}

export default page

