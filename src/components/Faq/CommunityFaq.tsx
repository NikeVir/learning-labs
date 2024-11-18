"use client";

import { useState } from 'react';
export default function CommunityFaq({ colortheme }: { colortheme: string }) {
    const [openFaqs, setOpenFaqs] = useState<number[]>([0]); // Default open FAQ box is the first one
    const myStyle = {
        color: '#121118',
    };

    const handleToggle = (index: number) => {
        setOpenFaqs((prevOpenFaqs) =>
            prevOpenFaqs.includes(index)
                ? prevOpenFaqs.filter((faqIndex) => faqIndex !== index)
                : [...prevOpenFaqs, index]
        );
    };

    const faqs = [
        {
            question: "Unlimited access to our knowledge repository",
            color: "green",
            answer: "Compilation of Industry specific white papers, assessments & analysis: trends, future outlook, synopsis of benchmarking researches, leadership styles & challenges, success stories, tech interventions, competency & capability gap researches etc.",
        },
        {
            question: "Participate in our research as well as client projects",
            color: "green",

            answer: "Potential client projects specific in your focus industry and expertise will be visible on your dashboard. You may choose to pursue the same. Key CRM features e.g.add contacts & update prospection stage, sync email, update next steps & due date available to manage your sales funnel in a single private platform.A brief overview of the ongoing & future projects will be visible. Members may opt to join the research team. Members will enrich interacting subject experts as well as receive a certificate on completion.",
        },
        {
            question: "Invitation to webinars with subject experts on global best practices",
            color: "green",

            answer: "Organization Learning Labs actively collaborates with the leading subject experts and practioners on joint research and brainstorming. We invite experts from leading institutions as well as global organizations to share their experiences, perspectives as well as jointly discuss on relevant trends & topics. These sessions are extremely insightful, engaging and generally are prelude to future industry developments. Members will be invited to participate in the same as webinars or active participants in the brainstorming. ",
        },
        {
            question: "Subscribe to our proprietary assessment tools & learning materials ",
            color: "red",

            answer: "OLL community members get access to all tools developed at The Organization Learning Labs. These learning tools employ relevant, appropriate and few of the most well researched techniques to objectively assess capabilities and competencies at organization, business unit, team, job holder as well as mental model levels. The technique deployed are a combination of clinical and non clinical techniques. The assessment reports provide actionable and objective recommendations, which can be the foundation to define relevant development paths. OLL members can subscribe to the available tools and offer to their clients within the community portal.",
        },
        {
            question: "Full fledged white label LMS software platform with proprietary content preloaded",
            color: "red",

            answer: "OLL community members can offer a full fledged LMS software platform in their brand with preloaded learning tools and content with a click of a button. Based on the job scope and grade, the assessments and learning journeys are preset. Each OLL member may choose to put their content in the LMS to offer to their clients. All relevant LMS features including online payment, client & user licence management etc. is incorporated. All new OLL learning tools and content will be available for subscription for the OLL community member’s clients, if OLL community members chooses to.",
        },

    ];

    // type colorTheme = 'blue' | "green" | "purple" | "primary";


    return (
        <section >
            {/* Container */}
            <div className="mx-auto   w-full flex flex-col gap-12 max-w-7xl px-5 ">
                <div className='flex '>


                    <div className=" flex flex-col ">
                        {faqs.map((faq, index) => (
                            <div key={index} onClick={() => handleToggle(index)} className="cursor-pointer  flex w-auto min-w-[320px] lg:w-[670px] flex-col ">
                                {/* FAQ BLOCK */}
                                <div className={`relative flex my-2
                                bg-[#F2F2F2]
                
                 rounded-[10px] border-2 px-12 py-8 ${openFaqs.includes(index) ? 'border-[2px] border-[#ffbf23] shadow-faqbox' : 'border-gray-200'}`}>
                                    <div>
                                        <h2 className={`font-medium text-[20px] text-black`}>
                                            {faq.question}
                                        </h2>
                                        {openFaqs.includes(index) && (
                                            <p className="font-inter mt-4 text-base font-medium text-black ">
                                                {faq.answer}
                                            </p>
                                        )}
                                    </div>
                                    <button

                                        className=" absolute right-5 top-9 cursor-pointer"
                                    >
                                        {/* {faq.color} */}
                                        {
                                            faq.color === "green" ? (
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle cx={12} cy={12} r={12} fill="none" />
                                                    {openFaqs.includes(index) ? (
                                                        <path d="M1.75 1H18.25" stroke="#FEBF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    ) : (
                                                        <>

                                                            <path d="M3.75 12H20.25" stroke="url(#paint0_linear_1_7484)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M12 3.75V20.25" stroke="url(#paint1_linear_1_7484)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <defs>
                                                                <linearGradient id="paint0_linear_1_7484" x1="-3.21094" y1="11.7159" x2="-2.97693" y2="14.7906" gradientUnits="userSpaceOnUse">
                                                                    <stop offset="0.149" stop-color="#22C55E" />
                                                                    <stop offset="0.684" stop-color="#18763C" />
                                                                </linearGradient>
                                                                <linearGradient id="paint1_linear_1_7484" x1="11.5781" y1="-0.9375" x2="14.0351" y2="-0.818922" gradientUnits="userSpaceOnUse">
                                                                    <stop offset="0.149" stop-color="#22C55E" />
                                                                    <stop offset="0.684" stop-color="#18763C" />
                                                                </linearGradient>
                                                            </defs>
                                                        </>
                                                    )}
                                                </svg>
                                            ) : (
                                                <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle cx={12} cy={12} r={12} fill="none" />
                                                    {openFaqs.includes(index) ? (
                                                        <path d="M1.75 1H18.25" stroke="#FEBF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    ) : (
                                                        <>
                                                            <path d="M3.75 12H20.25" stroke="url(#paint0_linear_1_7484)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M12 3.75V20.25" stroke="url(#paint1_linear_1_7484)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            <defs>
                                                                <linearGradient id="paint0_linear_1_7484" x1="-3.21094" y1="11.7159" x2="-2.97693" y2="14.7906" gradientUnits="userSpaceOnUse">
                                                                    <stop offset="0.149" stop-color="#fe393c" />
                                                                    <stop offset="0.684" stop-color="#fe393c" />
                                                                </linearGradient>
                                                                <linearGradient id="paint1_linear_1_7484" x1="11.5781" y1="-0.9375" x2="14.0351" y2="-0.818922" gradientUnits="userSpaceOnUse">
                                                                    <stop offset="0.149" stop-color="#fe393c" />
                                                                    <stop offset="0.684" stop-color="#fe393c" />
                                                                </linearGradient>
                                                            </defs>
                                                        </>
                                                    )}
                                                </svg>
                                            )
                                        }


                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}



