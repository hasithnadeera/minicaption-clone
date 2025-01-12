export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0 space-y-2 md:space-y-4 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold font-roboto leading-tight">
              We Believe We are Going to Change the YouTube Culture in Sri Lanka
            </h1>
              
            <p className="text-lg md:text-xl text-gray-700 font-roboto">
              Become YouTube Hero and Change Your Life Forever!
            </p>
              
            {/* Money Back Guarantee */}
                  <div>
                    <h3 className="text-base md:text-lg text-black font-roboto">
                    30-Days Money Back Guarantee
                    </h3>
                  </div>
                    
                  {/* Step Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Step-by-Step Map to Become a Pro
            </h2>

            {/* CTA Buttons - keeping these centered on all screens */}
                  <div className="flex items-center justify-center md:justify-start space-x-4 md:space-x-6 mt-8 md:mt-10">
                    <button className="
                    bg-yellow-400 md:bg-black 
                    text-black md:text-white 
                    px-6 md:px-8 
                    py-2 md:py-3 
                    text-sm md:text-base 
                    rounded-full 
                    font-bold 
                    font-poppins 
                    hover:bg-yellow-500 md:hover:bg-gray-900 
                    transition-colors
                    shadow-lg md:shadow-none
                    ">
                    WATCH FREE
                    </button>
                    <img 
                    src="Youtube-Heroes-Glory-logo-1081-300x72.png" 
                    alt="YouTube Heroes Logo" 
                    className="h-8 md:h-12 object-contain"
                    />
                  </div>
                  </div>
                </div>

                {/* Right Image */}
        <div className="md:w-1/2">
          <img 
            src="02 1.png" 
            alt="YouTuber with Play Button" 
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>

      {/* Why Join Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-3xl md:text-5xl font-bold leading-tight">
          Why you should Join with this Treasure Map 👇
        </p>
      </div>
    </div>
  );
}