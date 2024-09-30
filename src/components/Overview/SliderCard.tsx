import React from 'react'
import LeftCard from '../Tools&Features/LeftCard'
import RightCard from '../Tools&Features/RightCard';
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
function SliderCard() {
  return (
    <div className='mt-20'>
        <LeftCard data={DataLeft}/>
       
    </div>
  )
}

export default SliderCard
