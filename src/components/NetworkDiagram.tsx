import React from 'react';

interface ProductNode {
  name: string;
  imageName: string;
  position: 'top-left' | 'top-right' | 'middle-left' | 'middle-right' | 'bottom-left' | 'bottom-right';
}

const productItems: ProductNode[] = [
  { 
    name: 'Business Centres', 
    imageName: 'circle/co-working.png',
    position: 'top-left'
  },
  { 
    name: 'CRYP App', 
    imageName: 'circle/crypapp.png',
    position: 'top-right'
  },
  { 
    name: 'TRODO TOKEN', 
    imageName: 'circle/token.png',
    position: 'middle-left'
  },
  { 
    name: 'Real Estate Tokenisation', 
    imageName: 'circle/dreamrealirty.png',
    position: 'middle-right'
  },
  { 
    name: 'GAMING CONTENT', 
    imageName: 'circle/gaming.png',
    position: 'bottom-left'
  },
  { 
    name: 'TRDO-Powered Digital Lottery', 
    imageName: 'circle/lottery.png',
    position: 'bottom-right'
  }
];

const NetworkDiagram: React.FC = () => {
  return (
    <section className="py-20 bg-[#0e0a1f] relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Our Ecosystems</h2>
        
        <div className="flex justify-center items-center">
          <div className="relative h-[400px] w-full max-w-[800px]">
            {/* Center node with logo */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-gradient-to-br from-purple-600/50 to-purple-800/50 w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30 shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                <img src="/crypquuelogo1.png" alt="Crypquue" className="w-16 h-16 object-contain" />
              </div>
            </div>
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {/* Top-left line */}
              <line 
                x1="30%" y1="25%" 
                x2="50%" y2="50%" 
                stroke="#6137B2" 
                strokeWidth="1.5" 
              />
              {/* Top-right line */}
              <line 
                x1="70%" y1="25%" 
                x2="50%" y2="50%" 
                stroke="#6137B2" 
                strokeWidth="1.5" 
              />
              {/* Middle-left line */}
              <line 
                x1="25%" y1="50%" 
                x2="50%" y2="50%" 
                stroke="#6137B2" 
                strokeWidth="1.5" 
              />
              {/* Middle-right line */}
              <line 
                x1="75%" y1="50%" 
                x2="50%" y2="50%" 
                stroke="#6137B2" 
                strokeWidth="1.5" 
              />
              {/* Bottom-left line */}
              <line 
                x1="30%" y1="75%" 
                x2="50%" y2="50%" 
                stroke="#6137B2" 
                strokeWidth="1.5" 
              />
              {/* Bottom-right line */}
              <line 
                x1="70%" y1="75%" 
                x2="50%" y2="50%" 
                stroke="#6137B2" 
                strokeWidth="1.5" 
              />
            </svg>
            
            {/* Product nodes */}
            {productItems.map((product) => {
              let positionClass = '';
              
              switch(product.position) {
                case 'top-left':
                  positionClass = 'left-[30%] top-[25%]';
                  break;
                case 'top-right':
                  positionClass = 'left-[70%] top-[25%]';
                  break;
                case 'middle-left':
                  positionClass = 'left-[25%] top-[50%]';
                  break;
                case 'middle-right':
                  positionClass = 'left-[75%] top-[50%]';
                  break;
                case 'bottom-left':
                  positionClass = 'left-[30%] top-[75%]';
                  break;
                case 'bottom-right':
                  positionClass = 'left-[70%] top-[75%]';
                  break;
              }
              
              return (
                <div 
                  key={product.name}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${positionClass}`}
                >
                  <div className="bg-[#0e0a1f] border border-purple-900/50 rounded-lg p-2 flex items-center shadow-lg hover:border-purple-500/50 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-purple-900/30 overflow-hidden flex items-center justify-center mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-white text-sm font-medium pr-3">{product.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkDiagram;
