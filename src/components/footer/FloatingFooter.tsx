const FloatingFooter = () => {
    return (
        <div className="fixed bottom-5 w-full sm:h-[120px] lg:h-[158px] z-20 flex items-center justify-center">
            <div className="relative w-[90%] xl:w-[1152px] h-full flex items-center justify-center pb-4 overflow-hidden">
                
               
                <img 
                    src="/images/footer/footer3.png" 
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl" 
                    alt="Footer Background" 
                />
                
                
                <div className="relative max-sm:mx-2 max-sm:py-2 z-10 flex flex-col items-center text-center">
                  
                    <div className="text-[14px]  sm:text-[18px] md:text-[22px] lg:text-[24px]  text-white">
                        Shaping Tomorrow's Competencies <span className="text-[#4AB371]">In Organizations & Teams</span>
                    </div>

                    
                    <div className="flex space-x-4 mt-4">
                        <button className="sm:w-[220px] w-[150px] sm:h-[56px] h-[40px] rounded-lg bg-[#4AB371] text-white text-sm md:text-xl font-bold hover:bg-[#3a8e5f]">
                            Join Community
                        </button>
                        <button className="sm:w-[220px] w-[150px] sm:h-[56px] h-[40px] rounded-lg bg-white text-[#004B96] text-sm md:text-xl font-medium hover:bg-gray-200">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FloatingFooter;
