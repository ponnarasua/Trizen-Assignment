import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { useTheme } from '../context/ThemeContext';

const Header = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
      <header className={`bg-amazon-dark/30 dark:bg-gray-900/90 backdrop-blur-md text-white fixed top-0 left-0 right-0 z-50 transition-shadow ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="hidden md:flex items-center gap-5 px-5 py-3">
          <div className="cursor-pointer flex-shrink-0">
            <h1 className="text-xl font-bold whitespace-nowrap">🛒TrizoCart</h1>
          </div>
          
          <div className="flex-1 flex justify-end lg:justify-center">
            <div className="w-full max-w-[600px]">
              <SearchBar onSearch={onSearch} />
            </div>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        <div className="md:hidden flex items-center justify-between px-5 py-3">
          <div className="cursor-pointer">
            <h1 className="text-xl font-bold whitespace-nowrap">🛒 TrizoCart</h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="text-xl hover:text-amazon-orange transition"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            <button 
              onClick={() => setShowSearch(true)}
              className="text-2xl hover:text-amazon-orange transition cursor-pointer bg-transparent border-none"
              aria-label="Open Search"
            >
              🔍
            </button>
          </div>
        </div>
      </header>

      {showSearch && (
        <div className="fixed inset-0 z-[100] flex md:hidden items-start justify-center pt-20 px-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowSearch(false)}
          ></div>
          
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
