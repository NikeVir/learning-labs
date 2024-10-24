'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";

export default function Blog({ filter }: { filter: string | null }) {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>("All");
  const [selectedResponsibility, setSelectedResponsibility] = useState<string | null>(null);
  const [selectedHierarchy, setSelectedHierarchy] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState(filter == null ? "" : filter);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const cards = [
    {
      'type': 'blog',
      "blog-img": "/images/blog.png",
      title: "Pharmaceutical",
      color: "#34C759",
      heading: "SEO Thought Leaders to Follow (and See) At C3",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint....",
      writtenBy: "CateProxies",
      industry: "healthcare",
      responsibility: "sales & marketing",
      Hierarchy: "junior mangement",
      Date: "2024-06-14",
    },
    {
      'type': 'blog',
      "blog-img": "/images/blog.png",
      title: "Healthcare",
      color: "#FFCC00",
      heading: "SEO Thought Leaders to Follow (and See) At C3",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint....",
      writtenBy: "CateProxies",
      industry: "pharmaceutical",
      responsibility: "sales & marketing",
      Hierarchy: "junior mangement",
      Date: "2024-06-14",
    },
    {
      'type': 'guide',
      "blog-img": "/images/blog.png",
      title: "Hospitality",
      color: "#007AFF",
      heading: "SEO Thought Leaders to Follow (and See) At C3",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
      writtenBy: "CateProxies",
      industry: "healthcare",
      responsibility: "sales & marketing",
      Hierarchy: "junior mangement",
      Date: "2024-06-14",
    },
    {
      'type': 'guide',
      "blog-img": "/images/blog.png",
      title: "Hospitality",
      color: "#5856D6",
      heading: "SEO Thought Leaders to Follow (and See) At C3",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
      writtenBy: "CateProxies",
      industry: "healthcare",
      responsibility: "sales & marketing",
      Hierarchy: "junior mangement",
      Date: "2024-06-14",
    },
  ];

  // Filter cards based on selected filters
  const filteredCards = cards
    .filter(card => selectedIndustry && selectedIndustry !== "All" ? card.industry === selectedIndustry.toLowerCase() : true)
    .filter(card => selectedResponsibility ? card.responsibility === selectedResponsibility : true)
    .filter(card => selectedHierarchy ? card.Hierarchy === selectedHierarchy : true)
    .filter(card => card.type.toLowerCase().includes(searchInput.toLowerCase()));

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentCards = filteredCards.slice(indexOfFirstItem, indexOfLastItem);

  const displayCards = currentCards.map((card, index) => (
    <div key={index} onClick={() => window.open(`/Blog/${card.heading.replace(/\s+/g, '-')}`)} className=" bg-white border shadow-sm rounded-lg w-[90%] hover:bg-[#f9f7f7]  sm:w-[358px] cursor-pointer">
      <div className="p-4">
        <div className="rounded-lg  overflow-hidden ">
          <Image src={card["blog-img"]} alt="Blog Image" className="bg-contain" width={396} height={176} />
        </div>
        <div className="rounded-md  space-y-1 my-3">
          <p style={{ color: `${card.color}` }}>{card.title}</p>
          <h1 className="text-center sm:text-left  font-bold text-xl">{card.heading}</h1>
          <p className="text-center sm:text-left text-base text-[#A8A8A8]">{card.text.substring(0, 191) + "..."}</p>
        </div>
      </div>
    </div>
  ));

  // Utility function to handle filter click
  const handleFilterClick = (filterType: string, value: string) => {
    if (filterType === 'industry') {
      setSelectedIndustry(selectedIndustry === value ? null : value);
    } else if (filterType === 'responsibility') {
      setSelectedResponsibility(selectedResponsibility === value ? null : value);
    } else if (filterType === 'Hierarchy') {
      setSelectedHierarchy(selectedHierarchy === value ? null : value);
    }
  };

  return (
    <section className=" overflow-hidden flex flex-col items-center  mb-10 ">
      <section className='relative overflow-hidden '>
        <img src='/images/bann3.jpg' alt='about' className='w-full blur-[2px]  h-[80vh] absolute' />
        <div className='absolute  bg-[black] opacity-50 w-[100%] h-[70vh] '></div>
        <div className='relative flex flex-col h-[70vh] items-center justify-center' >
          <div className='w-[75%] '>
            <p className='text-white text-2xl md:text-3xl xl:text-5xl xl:leading-[55px] font-bold '>
              “Research is seeing what everybody else has seen and thinking what nobody else has thought”
            </p>
            <p className='text-right mt-5 text-white md:text-xl lg:text-2xl font-medium '>
              - Albert Szent-Györgyi,
            </p>
            <p className='text-right text-2xl text-white lg:text-2xl mb-5  font-medium ' >  Nobel Prize winner</p>
            <p className=' text-[#e9bd16] md:text-3xl xl:text-5xl xl:leading-[55px] font-bold mt-10'>
              "A synopsis of the research inhouse as well as from our learned community is provided here."
            </p>
          </div>
        </div>
      </section>
      <div className="lg:w-[80%] w-[95%]  mt-10 overflow-hidden flex max-md:flex-col justify-center">
        <div className="flex flex-col gap-16">
          {/* Industry Filters */}
          <div className="bg-white shadow-sm border rounded-xl py-[15px] px-[22px] flex flex-col gap-4 ">
            <div className=" flex flex-col gap-4 ">
              <h4 className="font-bold text-base">Industry</h4>
              <div className="flex flex-wrap gap-3 max-md:w-full w-[330px]">
                {["All", "Pharmaceutical", "Healthcare", "Hospitality"].map((industry) => (
                  <span
                    key={industry}
                    onClick={() => handleFilterClick('industry', industry)}
                    className={`min-w-[92px] py-[10px] px-[32px] text-[12px] rounded-[30px] shadow-featurebox cursor-pointer ${selectedIndustry === industry ? 'bg-yellow-300' : ''}`}>
                    {industry}
                  </span>
                ))}
              </div>
            </div>
            {/* Responsibility Filters */}
            <div className=" bg-[#E0E0E0] h-[1px]"></div>
            <div>
              <h4 className="font-bold text-base">Scope of Responsibility</h4>
              <div className="flex flex-wrap gap-3 max-md:w-full  w-[330px]">
                {["Sales", "Marketing", "Communications"].map((responsibility) => (
                  <span
                    key={responsibility}
                    onClick={() => handleFilterClick('responsibility', responsibility)}
                    className={`min-w-[92px] py-[10px] px-[32px] text-[12px] rounded-[30px] shadow-featurebox cursor-pointer ${selectedResponsibility === responsibility ? 'bg-yellow-300' : ''}`}>
                    {responsibility}
                  </span>
                ))}
              </div>
            </div>
            {/* Hierarchy Filters */}
            <div className=" bg-[#E0E0E0] h-[1px]"></div>
            <div>
              <h4 className="font-bold text-base">Grade/Hierarchy</h4>
              <div className="flex flex-wrap gap-3 max-md:w-full w-[330px]">
                {["Senior", "Junior", "Team Lead"].map((hierarchy) => (
                  <span
                    key={hierarchy}
                    onClick={() => handleFilterClick('Hierarchy', hierarchy)}
                    className={`min-w-[92px] py-[10px] px-[32px] text-[12px] rounded-[30px] shadow-featurebox cursor-pointer ${selectedHierarchy === hierarchy ? 'bg-yellow-300' : ''}`}>
                    {hierarchy}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 max-md:hidden">
<div className="mt-2 flex  font-bold text-base">Recent</div>
<div className=" flex gap-4 w-[310px]">
  <img src="/images/blog/recent.png" alt="blog" className=" rounded-lg" />
  <div>
    <p className="text-[#100D22] text-sm">
      Velit officia consequat duis enim velit mollit.
    </p>
    <p className="text-[#878690] text-[12px] mt-2" >
      8/12/2021
    </p>
  </div>

</div>
<div className=" flex gap-4 w-[310px]">
  <img src="/images/blog/recent.png" alt="blog" className=" rounded-lg" />
  <div>
    <p className="text-[#100D22] text-sm">
      Velit officia consequat duis enim velit mollit.
    </p>
    <p className="text-[#878690] text-[12px] mt-2" >
      8/12/2021
    </p>
  </div>

</div>
<div className=" flex gap-4 w-[310px]">
  <img src="/images/blog/recent.png" alt="blog" className=" rounded-lg" />
  <div>
    <p className="text-[#100D22] text-sm">
      Velit officia consequat duis enim velit mollit.
    </p>
    <p className="text-[#878690] text-[12px] mt-2" >
      8/12/2021
    </p>
  </div>

</div>
</div>

        </div>
        {/* Display Cards */}
        <div className="md:w-[75%] w-full flex flex-wrap items-center  justify-around gap-5">
          {displayCards}
        </div>
      </div>
    </section>
  );
}


