import React from 'react'

const blogs = [
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
export default function BlogContent({ title }: { title: string }) {
  const blog = blogs.find(blog => blog.heading === title);
  return (
    <div className='mt-5 mb-20 md:w-4/5 mx-auto '>
      {blog ? (
        <div>
          <div className='flex flex-col gap-5 mt-4'>
            <h1 className=' text-4xl font-bold'>{title}</h1>
            {/* <div className='flex justify-between p-4'>

              <p>Written by: {blog.writtenBy}</p>
              <p>Date: {blog.Date}</p>
            </div> */}
          </div>
          <div className=' py-5 '>
            <div className='flex justify-center mb-5'>

          <img src={blog["blog-img"]} className='w-full' alt={blog.heading} height={500} width={500} />
          
        </div>
        <p className='font-semibold'>Description</p>
        <p>{blog.text}</p>

        </div>
        </div>
      ) : (
        <p>No blog found with the title &quot;{title}&quot;.</p>
      )}
    </div>
  )
}
