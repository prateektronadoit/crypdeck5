import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string | null) => {
    if (id === null) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 relative">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/crypquuelogo1.png" alt="Crypquue" className="h-8 w-auto" />
            <span className="ml-2 text-xl font-bold text-white">Crypquue</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection(null)}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              About Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#0c0c14] border-t border-white/10 md:hidden">
            <div className="px-4 py-3 space-y-2">
              <button
                onClick={() => scrollToSection(null)}
                className="block w-full text-left px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="block w-full text-left px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors duration-200"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors duration-200"
              >
                About Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
