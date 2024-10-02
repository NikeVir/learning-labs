


"use client";
import { useState } from "react";
import Image from 'next/image';
import { Disclosure } from "@headlessui/react";
import { Button } from '../ui/Button';


const faqs = [
  {
    icon: "/images/knowledge/active.svg",
    question: "Comprehensive Case Studies",
    answer:
      "Dive deep into each project with comprehensive case studies that outline challenges, strategies, and outcomes.",
  },
  {
    icon: "/images/knowledge/active.svg",
    question: "Client Testimonials",
    answer:
    "Dive deep into each project with comprehensive case studies that outline challenges, strategies, and outcomes.",
  },
  {
    icon: "/images/knowledge/active.svg",
    question: "Expert Insights",
    answer:
    "Dive deep into each project with comprehensive case studies that outline challenges, strategies, and outcomes.",
  },
  {icon: "/images/knowledge/active.svg",
    question: "Before and After",
    answer:
      "Dive deep into each project with comprehensive case studies that outline challenges, strategies, and outcomes.",
  },
  {
    icon: "/images/knowledge/active.svg",
    question: "Before and After",
    answer:
    "Dive deep into each project with comprehensive case studies that outline challenges, strategies, and outcomes.",
  },

];

type data = {
  image: string;
  color: 'blueOutline' | 'greenOutline' | 'purpleOutline' | 'outline';
};

export default function Objectives() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
      <div className=" mx-auto">
        
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-6 w-full">
              {faqs.map((faq, index) => (
                <Disclosure
                  as="div"
                  key={faq.question}
                  className={`xl:w-[564px] md:w-[400px] sm:w-[500px] w-[380px]  p-6 mx-auto  border rounded-lg ${openIndex === index ? "border-white" :"border-gray-200 border-opacity-40"}  shadow-md`}
                >
                  {({ open }) => (
                    <>
                      <dt className="">
                        <Disclosure.Button
                          className="flex items-center justify-between w-full"
                          onClick={() => handleToggle(index)}
                        >
                          <div className="flex items-center space-x-3 rounded-2xl">
                          {openIndex === index ? (
                            <Image src={faq.icon} alt={faq.question} className="w-[48px] h-[48px]" height={400} width={400} />):(
                                <Image src='/images/knowledge/inactive.svg' alt={faq.question} className="w-[48px] h-[48px]" height={400} width={400} />
                            )}
                            <span className={`text-[16px] ${openIndex === index ? "text-white" :"text-[#E0E0E0]"}  {}`}>
                              {faq.question}
                            </span>
                          </div>
                          <span className="flex items-center ml-6 h-7">
                            {openIndex === index ? (
                              <img src="/images/knowledge/blurt.svg" alt="minus" />
                            ) : (
                                <img src="/images/knowledge/whitet.svg"  alt="minus" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      {openIndex === index ? (
                        <div
                            className="flex flex-col gap-8 items-start mt-4 "
                        >
                          <p className="text-base font-normal text-[#A8A8A8]">
                            {faq.answer}
                          </p>
                          <Button variant={'primary'} className="w-full rounded-[33px]">Read more</Button>
                        </div>
                      ) : ""}
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
      </div>
  );
}

