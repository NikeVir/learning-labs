"use client";

import { useState } from 'react';
export default function FAQs({ colortheme }: { colortheme: string }) {
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
            question: "How this theme is different from others in market?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
        },
        {
            question: "What other themes do you have?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
        },
        {
            question: "Is it possible to get a discount?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
        },
        {
            question: "How can I contribute to Flowspark?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna",
        },

    ];

    type colorTheme = 'blue' | "green" | "purple" | "primary";

    return (
        <section>
            {/* Container */}
            <div className="mx-auto w-full flex flex-col gap-12 max-w-7xl px-5 my-10">


                {/* Component */}
                <div className="mx-auto flex max-w-xl flex-col items-center gap-4 justify-center px-6 text-center lg:max-w-3xl lg:px-10">
                    <h2 className="mx-auto text-center  text-[#0E0637] font-medium text-[42px] lg:text-[32px]">
                        Frequently Asked Questions
                    </h2>
                    <p className='text-[#6F6F6F] text-lg'>
                        Use premium webflow components to ship your product
                        faster  to your customers. Build better and faster with Flowspark
                    </p>
                </div>
                {/* FAQs */}
                <div className='flex justify-center'>


                    <div className=" flex flex-col justify-between ">
                        {faqs.map((faq, index) => (
                            <div key={index} onClick={() => handleToggle(index)} className="cursor-pointer mx-4 flex lg:w-[963px] md:w-[600px] sm:w-[500px] w-[380px]   flex-col ">
                                {/* FAQ BLOCK */}
                                <div className={`relative flex my-2 xl:w-[963px] 
                hover:border-[#FEBF00]
                 rounded-[10px] border px-12 py-8 ${openFaqs.includes(index) ? 'border-[1px] border-[#FEBF00] shadow-faqbox' : 'border-[#E0E0E0]'}`}>
                                    <div>
                                        <h2 className={`font-medium text-[20px] text-black`}>
                                            {faq.question}
                                        </h2>
                                        {openFaqs.includes(index) && (
                                            <p className="font-inter mt-4 text-base font-light text-gray-500">
                                                {faq.answer}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        
                                        className=" absolute right-5 top-9 cursor-pointer"
                                    >
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



