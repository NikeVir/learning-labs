'use client';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const FloatingFooter = () => {
    const router = useRouter();
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Function to check if user has scrolled to the bottom
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    // Allow a small threshold to account for minor discrepancies
    if (scrollTop + windowHeight >= scrollHeight - 5) {
      setIsAtBottom(true);
      setIsMinimized(false);
    } else {
      setIsAtBottom(false);
      setIsMinimized(true);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check in case the user starts at the bottom
    handleScroll();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Expand footer on hover (only when not at the bottom)
  const handleMouseEnter = () => {
    if (!isAtBottom) {
      setIsMinimized(false);
    }
  };

  const handleMouseLeave = () => {
    if (!isAtBottom) {
      setIsMinimized(true);
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-20 flex items-center justify-center transition-all duration-300 mb-2 ${
        isMinimized ? 'h-16' : 'sm:h-[120px] lg:h-[158px]'
      }`}
     
    >
      <div
        className={`relative ${
          isMinimized ? 'w-[270px]' : 'w-[90%] xl:w-[1152px]'
        } h-full flex items-center justify-center overflow-hidden transition-all duration-300`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src="/images/footer/footer3.png"
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          alt="Footer Background"
        />

        <div className="relative max-sm:mx-2 max-sm:py-2 z-10 flex flex-col items-center text-center">
          {isMinimized ? (
            // Minimized state: Show only icons (using SVGs)
            <div className="flex space-x-8">
              {/* Join Community Button with SVG Icon */}
              <button
                onClick={() => {
                  // Handle Join Community action
                }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#4AB371] text-white hover:bg-[#3a8e5f]"
                aria-label="Join Community"
              >
                {/* SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Replace with your SVG path */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v6M15 12h6M9 7a4 4 0 100 8 4 4 0 000-8zM3 21v-2a4 4 0 014-4h4"
                  />
                </svg>
              </button>
              {/* Sign In Button with SVG Icon */}
              <button
                onClick={() => {
                  // Handle Sign In action
                }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#004B96] hover:bg-gray-200"
                aria-label="Sign In"
              >
                {/* SVG Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Replace with your SVG path */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ) : (
            // Expanded state: Show full content
            <>
              <div className="text-[14px] sm:text-[18px] md:text-[22px] lg:text-[24px] text-white">
                Shaping Tomorrow's Competencies{' '}
                <span className="text-[#4AB371]">In Organizations & Teams</span>
              </div>

              <div className="flex space-x-4 mt-4">
              <button
                onClick={() => {
                  router.push('/Communities#community');
                }}
                aria-label="Join Community"
                  className="sm:w-[220px] w-[150px] sm:h-[56px] h-[40px] rounded-lg bg-[#4AB371] text-white text-sm md:text-xl font-bold hover:bg-[#3a8e5f]"
                >
                  Join Community
                </button>
                <button
                 onClick={() => {
                    router.push('/Communities#community');
                  }}
                  aria-label="Join Community"
                  className="sm:w-[220px] w-[150px] sm:h-[56px] h-[40px] rounded-lg bg-white text-[#004B96] text-sm md:text-xl font-medium hover:bg-gray-200"
                >
                  Sign In
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingFooter;
