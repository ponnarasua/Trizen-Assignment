import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative h-[400px] md:h-[300px] sm:h-[250px] bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(255,255,255,0.5)_35px,rgba(255,255,255,0.5)_70px)] animate-[slideBackground_20s_linear_infinite]"></div>
      
      <div className="relative z-10 text-center text-white px-5">
        <h2 className="text-5xl md:text-4xl sm:text-3xl font-bold mb-4 md:mb-2.5 drop-shadow-lg">
          Welcome to ProductStore
        </h2>
        <p className="text-xl md:text-lg sm:text-base mb-8 md:mb-6 sm:mb-5 drop-shadow-md">
          Discover amazing products at unbeatable prices
        </p>
        <button className="bg-amazon-orange text-amazon-dark px-10 py-4 md:px-8 md:py-3 sm:px-6 sm:py-2.5 text-lg md:text-base sm:text-sm font-bold rounded transition-all hover:bg-amazon-orange-hover hover:-translate-y-0.5 hover:shadow-xl">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
