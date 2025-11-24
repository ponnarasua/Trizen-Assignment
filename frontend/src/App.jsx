import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Filters from './components/Filters';
import ProductGrid from './components/ProductGrid';
import { getAllProducts, searchProducts } from './services/api';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [selectedRating, setSelectedRating] = useState(0);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const searchQuery = searchParams.get('search') || '';
  const hasSearched = searchQuery !== '';
  const showFilters = hasSearched && products.length > 0; // Show filters only on searched page when there are products

  // Fetch products when search query changes
  useEffect(() => {
    fetchProducts();
  }, [searchQuery]);

  // Apply filters whenever filter criteria change
  useEffect(() => {
    applyFilters();
  }, [products, selectedCategory, priceRange, selectedRating]);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);
      let data;
      if (searchQuery) {
        data = await searchProducts(searchQuery);
      } else {
        data = await getAllProducts();
      }
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Apply category, price, and rating filters
  const applyFilters = () => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Filter by rating
    if (selectedRating > 0) {
      filtered = filtered.filter(
        (product) => product.rating >= selectedRating
      );
    }

    setFilteredProducts(filtered);
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Handle price range change
  const handlePriceChange = (min, max) => {
    setPriceRange({ min, max });
  };

  // Handle rating change
  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  // Handle search action - Update URL with search query
  const handleSearch = (query) => {
    if (query && query.trim()) {
      setSearchParams({ search: query.trim() });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full overflow-x-hidden">
      {/* Header with search functionality */}
      <Header onSearch={handleSearch} />

      {/* Hero Banner Section - Only show when not searched */}
      <div className={!hasSearched ? 'pt-[10px]' : ''}>
        {!hasSearched && <HeroBanner />}
      </div>

      {/* Main Content Container */}
      <div className={`px-5 py-7 w-full ${hasSearched ? 'pt-[calc(80px+1.75rem)]' : ''}`}>
        <div className={`flex gap-5 ${showFilters ? 'items-start' : ''}`}>
          {/* Filters Sidebar - Show only on searched page above 1100px */}
          {showFilters && (
            <div className="hidden lg:block w-2/12 min-w-[150px] max-w-[200px] flex-shrink-0 fixed left-5 top-[80px] h-[calc(100vh-80px)] overflow-y-auto">
              <Filters
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                priceRange={priceRange}
                onPriceChange={handlePriceChange}
                selectedRating={selectedRating}
                onRatingChange={handleRatingChange}
              />
            </div>
          )}

          {/* Products Grid - 10/12 width above 1100px with left margin for fixed sidebar, full width below 1100px */}
          <div className={showFilters ? 'w-full lg:w-10/12 lg:ml-[calc(16.666%+1.25rem)] flex-1 min-w-0' : 'w-full'}>
            <ProductGrid products={filteredProducts} loading={loading} />
          </div>
        </div>
      </div>

      {/* Fixed Floating Filter Button - Bottom Right - Show on searched page below 1100px */}
      {showFilters && (
        <button
          onClick={() => setShowMobileFilters(true)}
          className="flex lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-amazon-orange text-white rounded-full shadow-lg items-center justify-center hover:bg-opacity-90 transition-all hover:scale-110 active:scale-95"
          aria-label="Open Filters"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </button>
      )}

      {/* Filter Modal - Show on searched page below 1100px with blur backdrop */}
      {showMobileFilters && (
        <>
          {/* Backdrop with blur */}
          <div 
            className="fixed inset-0 z-[199] bg-black bg-opacity-50 backdrop-blur-sm block lg:hidden"
            onClick={() => setShowMobileFilters(false)}
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 z-[200] flex lg:hidden flex-col pointer-events-none">
            <div className="ml-auto w-full max-w-md h-full bg-white shadow-2xl pointer-events-auto flex flex-col animate-slide-in">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-amazon-dark text-white">
                <h2 className="text-lg font-bold">Filters</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="text-2xl font-bold hover:opacity-80 transition p-2"
                  aria-label="Close filters"
                >
                  ✕
                </button>
              </div>

              {/* Filters Content */}
              <div className="flex-1 overflow-y-auto p-4">
                <Filters
                  selectedCategory={selectedCategory}
                  onCategoryChange={handleCategoryChange}
                  priceRange={priceRange}
                  onPriceChange={handlePriceChange}
                  selectedRating={selectedRating}
                  onRatingChange={handleRatingChange}
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full px-4 py-3 bg-amazon-orange text-white rounded-lg font-medium hover:bg-opacity-90 transition"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
