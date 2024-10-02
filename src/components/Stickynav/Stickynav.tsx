'use client'

import { useEffect, useRef, useState } from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import clsx from 'clsx'
import Tools from '../ui/scrollsvgs/tools'
import Business from '../ui/scrollsvgs/Business'
import Message from '../ui/scrollsvgs/Message'
import CustomLearning from '../ui/scrollsvgs/CustomLearning'

const sections = [
  {
    id: 'table-of-contents',
    title:'Maturity assessment tools',
    icon:<Tools/>
  },
  { id: 'screencasts', title: 'Immersive Business simulations',icon:<Business/> },
  { id: 'resources', title: 'On-demand research & consultation',icon:<Message/> },
  { id: 'pricing', title: 'Custom learning program development',icon:<CustomLearning/> },
  { id: 'feature', title: 'Custom learning program development',icon:<CustomLearning/> },

]

function MenuIcon({
  open,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  open: boolean
}) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d={open ? 'M17 7 7 17M7 7l10 10' : 'm15 16-3 3-3-3M15 8l-3-3-3 3'}
      />
    </svg>
  )
}

export function Stickynav() {
  let navBarRef = useRef<React.ElementRef<'div'>>(null);
  let [activeIndex, setActiveIndex] = useState<number | null>(null);
  let [isNavBarVisible, setIsNavBarVisible] = useState(true);
  let mobileActiveIndex = activeIndex === null ? 0 : activeIndex;

  useEffect(() => {
    function updateActiveIndex() {
      if (!navBarRef.current) {
        return;
      }
      console.log(activeIndex)

      let newActiveIndex = null;
      let elements = sections
        .map(({ id }) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);
      let bodyRect = document.body.getBoundingClientRect();
      let offset = bodyRect.top + navBarRef.current.offsetHeight + 1;

      // Check if the scroll position is at or beyond the bottom of the last section
      const lastSection = elements[elements.length - 1];
      const lastSectionBottom = lastSection.getBoundingClientRect().bottom + window.scrollY;

      if (window.scrollY + window.innerHeight >= lastSectionBottom) {
        setActiveIndex(sections.length - 1);
        setIsNavBarVisible(false); // Hide navbar when the last section is fully in view
        return;
      }

      for (let index = 0; index < elements.length; index++) {
        if (
          window.scrollY >=
          elements[index].getBoundingClientRect().top - offset
        ) {
          newActiveIndex = index;
        } else {
          break;
        }
      }

      setActiveIndex(newActiveIndex);
      setIsNavBarVisible(true); // Show navbar when not at the last index
    }

    window.addEventListener('scroll', updateActiveIndex);
    return () => window.removeEventListener('scroll', updateActiveIndex);
  }, []);

  return (
    <div ref={navBarRef} className={`${activeIndex==sections.length-1?"":"sticky"}  top-0 z-50`}>
      <Popover className="sm:hidden">
        {({ open }) => (
          <>
            <div
              className={clsx(
                'relative flex items-center px-4 py-3',
                !open &&
                  'bg-white/95 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur',
              )}
            >
              {!open && (
                <>
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-blue-600"
                  >
                    {(mobileActiveIndex + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="ml-4 text-base font-medium text-slate-900">
                    {sections[mobileActiveIndex].title}
                  </span>
                </>
              )}
              <PopoverButton
                className={clsx(
                  '-mr-1 ml-auto flex h-8 w-8 items-center justify-center',
                  open && 'relative z-10',
                )}
                aria-label="Toggle navigation menu"
              >
                {!open && (
                  <>
                    {/* Increase hit area */}
                    <span className="absolute inset-0" />
                  </>
                )}
                <MenuIcon open={open} className="h-6 w-6 stroke-slate-700" />
              </PopoverButton>
            </div>
            <PopoverPanel className="absolute inset-x-0 top-0 bg-white/95 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
              {sections.map((section, sectionIndex) => (
                <PopoverButton
                  as="a"
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center px-4 py-1.5"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-blue-600"
                  >
                    {(sectionIndex + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="ml-4 text-base font-medium text-slate-900">
                    {section.title}
                  </span>
                </PopoverButton>
              ))}
            </PopoverPanel>
            <div className="absolute inset-x-0 bottom-full z-10 h-4 bg-white" />
          </>
        )}
      </Popover>
      <div className="hidden sm:flex  sm:h-32 sm:justify-center  ">
        <div
          role="list"
          className="mb-[-2px] flex gap-4 bg-white text-base font-medium text-slate-900 [counter-reset:section]"
        >
          {sections.slice(0,-1).map((section, sectionIndex) => (
            <div key={section.id} className="flex relative  w-[276px] h-[124px]  ">
              <a
                href={`#${section.id}`}
                className={clsx(
                  'flex w-full flex-col items-center justify-center border-b-2 before:mb-2 before:font-mono',
                  sectionIndex === activeIndex
                    ? 'border-blue-600 bg-[#FEBF00]  text-blue-600 before:text-blue-600'
                    : 'border-transparent before:text-slate-500 hover:bg-blue-50/40 hover:before:text-slate-900',
                )}
              > 
              <div className='flex flex-col gap-2 text-center w-[160px] text-black font-bold'>
                <div className='flex justify-center'>
                {section.icon}

                </div>
                {section.title}
              </div>
              </a>
              {
                sectionIndex === activeIndex ? (
                  <div className='w-full bottom-0 absolute rounded-full h-1 bg-white'></div>
                ):(<div className='w-full bottom-0 absolute rounded-full h-1 bg-[#E0E0E0]'></div>)
              }
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
