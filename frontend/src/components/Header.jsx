import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const Header = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Add shadow to header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`bg-amazon-dark text-white fixed top-0 left-0 right-0 z-50 transition-shadow ${isScrolled ? 'shadow-lg' : ''}`}>
        {/* Desktop/Tablet Layout - Show above 768px */}
        <div className="hidden md:flex items-center gap-5 px-5 py-3">
          {/* Logo - Left */}
          <div className="cursor-pointer flex-shrink-0">
            <h1 className="text-xl font-bold whitespace-nowrap">🛒 ProductStore</h1>
          </div>
          
          {/* Search Bar - Right-aligned for medium screens, centered for large screens */}
          <div className="flex-1 flex justify-end lg:justify-center">
            <div className="w-full max-w-[600px]">
              <SearchBar onSearch={onSearch} />
            </div>
          </div>
        </div>

        {/* Mobile Layout - Show below 768px */}
        <div className="md:hidden flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <div className="cursor-pointer">
            <h1 className="text-xl font-bold whitespace-nowrap">🛒 ProductStore</h1>
          </div>

          {/* Search Icon */}
          <button 
            onClick={() => setShowSearch(true)}
            className="text-2xl hover:text-amazon-orange transition cursor-pointer bg-transparent border-none"
            aria-label="Open Search"
          >
            🔍
          </button>
        </div>
      </header>

      {/* Search Overlay Modal - Mobile only (below 768px) */}
      {showSearch && (
        <div className="fixed inset-0 z-[100] flex md:hidden items-start justify-center pt-20 px-4">
          {/* Backdrop - Blurred overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowSearch(false)}
          ></div>
          
          {/* Search Bar Container - Full width with padding */}
          <div className="relative z-10 w-full max-w-[90%]">
            <SearchBar 
              onSearch={(query) => {
                onSearch(query);
                setShowSearch(false);
              }} 
              autoFocus={true}
              onClose={() => setShowSearch(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
