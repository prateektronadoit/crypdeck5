import React, { useRef, useEffect } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Autoplay video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);
  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-[#0c0c14]">
      {/* Full-screen video background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Video covering entire screen */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <video 
            ref={videoRef} 
            className="absolute w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/home.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c14]/90 via-[#0c0c14]/70 to-[#0c0c14]/50 z-20"></div>
        
        {/* Purple glow effects */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[80px] z-10"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-purple-800/20 rounded-full blur-[60px] z-10"></div>
      </div>
      

      
      {/* Main content container */}
      <div className="container mx-auto px-4 h-screen flex items-center relative z-20">
        <div className="flex items-center w-full">
          
          {/* Left-aligned content */}
          <div className="w-full lg:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sans tracking-wide leading-tight">
              <span className="text-purple-500">Accelerating</span><br />
              <span className="text-purple-500">the Future</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-white font-medium mb-6 max-w-md leading-tight">
              The Next Generation Blockchain Solution
            </h2>
            <p className="text-base mb-8 text-gray-300 max-w-md">
              Empowering the future through blockchain innovation and strategic investments.
            </p>
            <button 
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300 text-lg font-medium shadow-lg flex items-center"
              onClick={() => {
                const element = document.getElementById('products');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Explore Products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Right side space for video */}
          <div className="hidden lg:block w-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
