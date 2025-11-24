import React, { useState, useEffect } from 'react';

const HeroBanner = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const scrollToProducts = (e) => {
    e.preventDefault();
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const featuredProducts = products.filter(p => p.rating >= 4).slice(0, 5);
  
  useEffect(() => {
    if (featuredProducts.length === 0) return;
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [featuredProducts.length]);

  const handleSlideChange = (index) => {
    if (index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentProduct = featuredProducts[currentSlide];

  if (!currentProduct || featuredProducts.length === 0) {
    return (
      <section className="relative h-screen overflow-hidden top-3">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
 
            backgroundImage: `url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&h=1080&fit=crop&q=80')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-pink-900/80 dark:from-blue-950/90 dark:via-purple-950/90 dark:to-pink-950/90"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-5 h-full flex items-center justify-center">
          <div className="text-center space-y-6 lg:space-y-8 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-white/30">
                ✨ Welcome to TrizoCart
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-2xl">
              Shop Smart,
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text">
                Live Better
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
              Discover premium quality products at unbeatable prices. Your one-stop destination for everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center">
              <button 
                onClick={scrollToProducts}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-purple-600 bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/20 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Shopping
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={scrollToProducts}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  Explore Categories
                  <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
              </button>
            </div>
            
            <div className="pt-8 flex justify-center gap-8 text-white/80">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-sm">Products</div>
              </div>
              <div className="h-12 w-px bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">7</div>
                <div className="text-sm">Categories</div>
              </div>
              <div className="h-12 w-px bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.5★</div>
                <div className="text-sm">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToProducts} className="text-white/60 hover:text-white transition-colors cursor-pointer bg-transparent border-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen overflow-hidden top-3">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&h=1080&fit=crop&q=80')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-pink-900/80 dark:from-blue-950/90 dark:via-purple-950/90 dark:to-pink-950/90"></div>
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-5 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          <div className="space-y-6 lg:space-y-8 z-10">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-white/30 animate-pulse">
                🔥 Featured Products
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white drop-shadow-2xl">
              Discover
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text">
                Amazing Deals
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-xl">
              Explore our handpicked collection of top-rated products. Quality meets affordability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToProducts}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-purple-600 bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/20 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Shop All Products
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button 
                onClick={scrollToProducts}
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer"
              >
                View Offers
              </button>
            </div>

            <div className="flex gap-6 pt-4 text-white/80">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium">Top Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className={`relative transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl border border-white/20 transform hover:scale-[1.02] transition-all duration-500 group">
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg animate-bounce">
                    FEATURED
                  </span>
                </div>

                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{currentProduct.rating}</span>
                  </div>
                </div>
                
                <div className="relative h-72 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 overflow-hidden group">
                  <img 
                    src={currentProduct.image} 
                    alt={currentProduct.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 md:p-8 bg-white dark:bg-gray-800">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      {currentProduct.category}
                    </span>
                    {currentProduct.reviews && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {currentProduct.reviews.toLocaleString()} reviews
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2 leading-tight">
                    {currentProduct.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    Premium quality product from our curated collection. Experience excellence with every purchase.
                  </p>
                  
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Starting at</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                          ₹{currentProduct.price.toLocaleString()}
                        </span>
                        {currentProduct.originalPrice && currentProduct.originalPrice > currentProduct.price && (
                          <span className="text-lg text-gray-400 line-through">
                            ₹{currentProduct.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {currentProduct.originalPrice && currentProduct.originalPrice > currentProduct.price && (
                        <div className="text-xs text-green-600 dark:text-green-400 font-semibold mt-1">
                          Save ₹{(currentProduct.originalPrice - currentProduct.price).toLocaleString()} ({Math.round((1 - currentProduct.price / currentProduct.originalPrice) * 100)}% OFF)
                        </div>
                      )}
                    </div>
                    
                    <button
                      onClick={scrollToProducts}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      View
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-3 mt-8">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`relative h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-12 bg-white shadow-lg shadow-white/50' 
                      : 'w-3 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === currentSlide && (
                    <span className="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="text-center mt-6">
              <p className="text-white/70 text-sm font-medium">
                {currentSlide + 1} of {featuredProducts.length} Featured Products
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <button onClick={scrollToProducts} className="text-white/60 hover:text-white transition-colors cursor-pointer bg-transparent border-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
