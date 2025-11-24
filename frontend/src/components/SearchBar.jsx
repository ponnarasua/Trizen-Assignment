import React, { useState, useEffect, useRef } from 'react';
import { searchProducts } from '../services/api';

const SearchBar = ({ onSearch, autoFocus = false, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Debounce timeout for search
  const debounceTimeout = useRef(null);

  // Autofocus on mount
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // Handle search input change with debouncing
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Clear previous timeout
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // If search query is empty, clear suggestions
    if (value.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    // Set new timeout for API call (300ms delay)
    debounceTimeout.current = setTimeout(async () => {
      setIsLoading(true);
      try {
        const results = await searchProducts(value);
        setSuggestions(results.slice(0, 5));
        setShowSuggestions(results.length > 0);
      } catch (error) {
        console.error('Search error:', error);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);
  };

  // Handle suggestion click
  const handleSuggestionClick = (productName) => {
    setSearchQuery(productName);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch(productName);
    }
  };

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSuggestions(false);
      if (onSearch) {
        onSearch(searchQuery);
      }
    }
  };

  return (
    <div className={`w-full ${!onClose ? 'max-w-[600px]' : ''} relative`} ref={searchRef}>
      <form onSubmit={handleSearchSubmit} className="flex items-stretch w-full rounded overflow-hidden shadow-md">
        <input
          ref={inputRef}
          type="text"
          className={`flex-1 px-3 text-sm md:text-base border-none outline-none text-gray-900 dark:text-gray-100 dark:bg-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 ${!onClose ? 'py-2.5' : 'py-2.5'}`}
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
        />
        {onClose && (
          <button 
            type="button" 
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-3 text-base border-none cursor-pointer hover:bg-gray-300 transition flex-shrink-0 flex items-center justify-center self-stretch"
            aria-label="Close"
          >
            ✕
          </button>
        )}
        <button type="submit" className="bg-blue-300 text-white px-3 text-base border-none cursor-pointer hover:bg-opacity-90 transition flex-shrink-0 flex items-center justify-center self-stretch" aria-label="Search">
          🔍
        </button>
      </form>

      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 border-t-0 rounded-b shadow-lg max-h-[400px] overflow-y-auto z-50 mt-0.5">
          {isLoading ? (
            <div className="flex justify-center items-center p-3 border-b border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400 cursor-default">Loading...</div>
          ) : (
            suggestions.map((product) => (
              <div
                key={product._id}
                className="flex items-center p-3 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                onClick={() => handleSuggestionClick(product.name)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 md:w-10 md:h-10 object-cover rounded mr-4 md:mr-2.5"
                />
                <div className="flex flex-col flex-1">
                  <span className="text-sm text-gray-800 dark:text-gray-200 mb-1 font-medium overflow-hidden text-ellipsis whitespace-nowrap">{product.name}</span>
                  <span className="text-sm text-amazon-link dark:text-blue-400 font-semibold">₹{product.price}</span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
