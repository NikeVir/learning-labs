'use client'
import React, { useState } from "react";
import Image from "next/image";

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
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do fsdfjsahfjksahfasfhsiahfksbfs nhfioshfsoifhsio amet sint....",
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
    .filter(card => selectedIndustry && selectedIndustry !== "All" ? card.industry.toLowerCase() === selectedIndustry.toLowerCase() : true)
    .filter(card => selectedResponsibility ? card.responsibility === selectedResponsibility : true)
    .filter(card => selectedHierarchy ? card.Hierarchy === selectedHierarchy : true)
    .filter(card => card.type.toLowerCase().includes(searchInput.toLowerCase()));

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentCards = filteredCards.slice(indexOfFirstItem, indexOfLastItem);

  const displayCards = currentCards.map((card, index) => (
    <div key={index} onClick={() => window.open(`/research-synopsis/${card.heading.replace(/\s+/g, '-')}`)} className=" bg-white border-[3px] border-[#004c92] flex max-md:flex-col shadow-sm rounded-[40px] min-w-full  hover:bg-[#f9f7f7]  cursor-pointer">
      <div className="p-4 basis-1/3">
        <div className="rounded-lg  overflow-hidden ">
          <Image src={card["blog-img"]} alt="Blog Image" className="bg-contain" width={396} height={176} />
        </div>
        <div className="rounded-md  space-y-1 mt-3 ml-4 text-xl font-medium">
          <p style={{ color: `${card.color}` }}>{card.title}</p>
        </div>
      </div>
      <div className="p-4 basis-2/3">
      
        <div className="rounded-md  space-y-1 ">
          <h1 className="text-center sm:text-left  font-bold text-xl">{card.heading}</h1>
          <p className=" sm:text-left text-base text-[#000000] text-justify">{card.text.substring(0, 191) + "..."} <span className="text-[#004c92] font-bold">Read More</span></p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className=" overflow-hidden flex flex-col items-center   ">
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
      <div className=" flex max-md:flex-col w-full gap-5">
        <div className="flex flex-col gap-16 max-md:w-[300px]  max-lg:max-w-[380px]  bg-[#f4f4f4]">
          {/* Industry Filters */}
          <div className="  py-[15px] px-4 lg:px-[22px] flex flex-col gap-4 ">
            <div className=" flex flex-col gap-4 ">
              <h4 className="font-bold text-base">Industry</h4>
              <select
                className="w-[250px] lg:w-[330px] py-[10px] px-[32px] border rounded-lg shadow-sm"
                value={selectedIndustry || "All"}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                {["All", "Pharmaceutical", "Healthcare", "Hospitality"].map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            {/* Responsibility Filters */}
            <div className=" bg-[#E0E0E0] h-[1px]"></div>
            <div>
              <h4 className="font-bold text-base">Scope of Responsibility</h4>
              <select
                className="w-[250px] lg:w-[330px] py-[10px] px-[32px] rounded-lg shadow-sm"
                value={selectedResponsibility || "All"}
                onChange={(e) => setSelectedResponsibility(e.target.value)}
              >
                {["All", "Sales", "Marketing", "Communications"].map((responsibility) => (
                  <option key={responsibility} value={responsibility}>{responsibility}</option>
                ))}
              </select>
            </div>
            {/* Hierarchy Filters */}
            <div className=" bg-[#E0E0E0] h-[1px]"></div>
            <div>
              <h4 className="font-bold text-base">Grade/Hierarchy</h4>
              <select
                className="w-[250px] lg:w-[330px] py-[10px] px-[32px] rounded-lg shadow-sm"
                value={selectedHierarchy || "All"}
                onChange={(e) => setSelectedHierarchy(e.target.value)}
              >
                {["All", "Senior", "Junior", "Team Lead"].map((hierarchy) => (
                  <option key={hierarchy} value={hierarchy}>{hierarchy}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Display Recent Blogs */}
          <div className="flex flex-col px-[22px]  gap-6 max-md:hidden">
            <div className="mt-2 flex  font-bold text-base">Recent</div>
            <div className=" flex gap-4 md:w-[250px] lg:w-[330px]">
              <img src="/images/blog/recent.png" alt="blog" className=" rounded-lg" />
              <div>
                <p className="text-[#100D22] text-sm">Velit officia consequat duis enim velit mollit.</p>
                <p className="text-[#878690] text-[12px] mt-2">8/12/2021</p>
              </div>
            </div>
            <div className=" flex gap-4 w-[310px]">
              <img src="/images/blog/recent.png" alt="blog" className=" rounded-lg" />
              <div>
                <p className="text-[#100D22] text-sm">Velit officia consequat duis enim velit mollit.</p>
                <p className="text-[#878690] text-[12px] mt-2">8/12/2021</p>
              </div>
            </div>
            <div className=" flex gap-4 w-[310px]">
              <img src="/images/blog/recent.png" alt="blog" className=" rounded-lg" />
              <div>
                <p className="text-[#100D22] text-sm">Velit officia consequat duis enim velit mollit.</p>
                <p className="text-[#878690] text-[12px] mt-2">8/12/2021</p>
              </div>
            </div>
          </div>
        </div>
        {/* Display Cards */}
        <div className="w-full">
          <div className="text-[#001d59] font-bold text-2xl max-md:text-center md:text-4xl px-5 mt-5">
            Research Synopsis List
          </div>

        <div className="w-full p-5 flex flex-col gap-5  ">
          {displayCards}
        </div>
        </div>
      </div>
    </section>
  );
}
