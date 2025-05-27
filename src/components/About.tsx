import React from 'react';

const About: React.FC = () => {
  // Data for ecosystem cards
  const ecosystemCards = [
    {
      title: "Crypque Education",
      description: "A comprehensive learning platform focused on blockchain, crypto investments, and Web3 technologies — designed to educate and empower the next generation of innovators and investors."
    },
    {
      title: "Crypque Investment",
      description: "A trusted gateway for users and institutions to explore strategic investment opportunities in vetted blockchain projects, tokens, and decentralized technologies."
    },
    {
      title: "Real-World Tokenization",
      description: "Bringing tangible assets on-chain — from real estate to intellectual property — through secure and transparent tokenization solutions, enhancing liquidity and accessibility."
    },
    {
      title: "Blockchain & Tech Innovation",
      description: "Developing scalable, user-centric platforms and infrastructure to solve real-world challenges through blockchain technology and decentralized applications."
    }
  ];
  
  return (
    <section id="about" className="py-20 relative z-20 overflow-hidden bg-[#0e0a1f]">
      {/* Simple dark background */}
      <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-b from-[#0e0a1f] to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">ABOUT US</h2>
          <div className="h-1 w-24 bg-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="text-white max-w-4xl mx-auto text-lg">
          {/* First paragraph */}
          <p className="mb-6">
            Over the past 4.5 years, Crypque has cultivated a robust global community under the leadership of 
            founders who bring a collective experience of 25+ years in the blockchain, finance, and technology 
            sectors. Recognized with multiple national awards, our team is committed to building a sustainable, 
            revenue-generating ecosystem that empowers users and transforms industries through innovation.
          </p>
          
          {/* Second paragraph */}
          <p className="mb-10">
            Crypque's vision goes beyond traditional boundaries — we aim to redefine how users interact with technology, 
            investments, and education through real-world blockchain applications.
          </p>
          
          <h3 className="text-3xl font-bold text-purple-400 mb-10 text-center">
            Our Ecosystem
          </h3>
          
          {/* Ecosystem description */}
          <p className="mt-8 mb-10 max-w-4xl mx-auto text-gray-300">
            A powerful ecosystem offering a utility token (TRDO), a global crypto-fiat banking platform, real estate tokenization 
            in the UAE, and premium business centers, all designed to unlock high-growth opportunities across Web3, finance, 
            real estate, and enterprise solutions
          </p>
        </div>

        {/* Ecosystem cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ecosystemCards.map((card, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-filter backdrop-blur-lg border border-gray-800 rounded-lg p-6 overflow-hidden relative hover:border-purple-500/50 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-white mb-3">{card.title}</h4>
              <p className="text-gray-300 text-sm">{card.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default About;
