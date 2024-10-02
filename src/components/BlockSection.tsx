'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { title } from "process";
import { color } from "framer-motion";
export default function Blog({ filter }: { filter: string | null }) {
  const cards = [
    {
      'type': 'blog',
      "blog-img": "/images/blog.png",
      title: "Pharmaceutical",
      color: "#34C759",
      heading: "SEO Thought Leaders to Follow (and See) At C3",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint....",
      writtenBy: "CateProxies",
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
      Date: "2024-06-14",
    },

  ];
  const [searchInput, setSearchInput] = useState(filter == null ? "" : filter);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const searchField = (
    <input
      type="text"
      placeholder="Search Blogs"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      className=" border-[#05C067] p-3 border-2 rounded-full text-[#05C067]   w-full 2xl:w-[735px]"
    />
  );

  const filteredCards = cards.filter(card => card.type.toLowerCase().includes(searchInput.toLowerCase()));
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the filteredCards array to only include the items for the current page
  const currentCards = filteredCards.slice(indexOfFirstItem, indexOfLastItem);

  const displayCards = currentCards.map((card, index) => (
    <div key={index} onClick={() => window.open(`/Blog/${card.heading.replace(/\s+/g, '-')}`)} className=" bg-white shadow-sm rounded-lg w-[90%] hover:bg-[#f9f7f7]  sm:w-[358px] cursor-pointer">
      <div className="p-4">

        <div className="rounded-lg  overflow-hidden ">

          <Image src={card["blog-img"]} alt="Blog Image" className="bg-contain   " width={396} height={176} />
        </div>
        <div className="rounded-md  space-y-1 my-3">
          <p style={{ color: `${card.color}` }}>{card.title}</p>
          <h1 className="text-center sm:text-left  font-bold text-xl">{card.heading}</h1>
          <p className="text-center sm:text-left text-base text-[#A8A8A8]">{card.text.substring(0, 191) + "..."}</p>
        </div>
      </div>

    </div>
  ));
  const noBlogsMessage = currentCards.length === 0 ? (
    <div className="text-center my-10">
      <p className="text-xl text-gray-500">No blogs found.</p>
    </div>
  ) : null;

  // Pagination controls
  const paginationControls = (
    <div className="flex justify-between p-2 w-full  space-x-4 my-4">
      <Button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className={`px-4 py-3 w-28  rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-[#05C067] text-white'}`}
      >
        Previous
      </Button>
      <Button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className={`px-4 py-3 w-28 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-[#05C067] text-white'}`}

      >
        Next
      </Button>
    </div>
  );




  return (
    <section className=" overflow-hidden flex justify-center bg-[#f1fff6] mb-10">
      <div className="lg:w-[80%] w-[95%] overflow-hidden flex max-md:flex-col justify-center">

      
      <div className=" flex flex-col gap-16">
        <div className="mt-2 flex gap-2"><a className="m">Home</a>/<a>Blog</a></div>

        <div className="bg-white rounded-xl py-[15px] px-[22px] flex flex-col gap-4 border border-[#F3F3F3]">

        <div className=" flex flex-col gap-4 ">
          <h4 className="font-bold text-base">Industry</h4>
          <div className="flex flex-wrap gap-3 max-md:w-full w-[330px]">
            <span className=" min-w-[92px] py-[10px] px-[32px] text-[12px]  rounded-[30px] shadow-featurebox">Pharmaceutical</span>
            <span className=" min-w-[92px] py-[10px] px-[32px] text-[12px]  rounded-[30px] shadow-featurebox">Healthcare</span>
            <span className=" min-w-[92px] py-[10px] px-[32px] text-[12px]  rounded-[30px] shadow-featurebox">Hospitality</span>
            <span className=" min-w-[92px] py-[10px] px-[32px] text-[12px]  rounded-[30px] shadow-featurebox">BFSI</span>
            <span className=" min-w-[92px] py-[10px] px-[32px] text-[12px]  rounded-[30px] shadow-featurebox">Retail</span>
          </div>
        </div>
        <div className=" bg-[#E0E0E0] h-[1px]"></div>
        <div>
          
          <h4 className="font-bold text-base">Scope of responsibilty</h4>
          <div className="flex flex-wrap gap-3 max-md:w-full  w-[330px]">
            <span className=" min-w-[92px] py-[10px] px-[32px] text-[12px]  rounded-[30px] shadow-featurebox">Sales</span>
            <span className=" min-w-[92px] py-[10px] px-[32px] text-[12px]  rounded-[30px] shadow-featurebox">Marketing</span>
            <span className=" min-w-[92px] py-[10px] px-[32px] text-[12px]  rounded-[30px] shadow-featurebox">Communications</span>
          </div>
        </div>
        <div className=" bg-[#E0E0E0] h-[1px]"></div>
        <div>
          
          <h4 className="font-bold text-base">Grade</h4>
          <div className="flex flex-wrap gap-3 max-md:w-full  w-[330px]">
            <span className=" min-w-[92px] py-[10px] px-[32px] text-[12px]  rounded-[30px] text-center shadow-featurebox">A</span>
            <span className=" min-w-[92px] py-[10px] px-[32px] text-[12px]  rounded-[30px]  text-center shadow-featurebox">B</span>
          
          </div>
        </div>
        <div className=" bg-[#E0E0E0] h-[1px]"></div>
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

      <div className="flex flex-col lg:w-4/5 px-4 lg:px-0  justify-center items-center gap-5">

        {searchField}
        {currentCards.length > 0 ? (
          <div className="flex flex-wrap mt-6 justify-center gap-4">
            {displayCards}
          </div>
        ) : noBlogsMessage}
        {/* {paginationControls} */}
      </div>
      </div>
    </section>
  );
}
