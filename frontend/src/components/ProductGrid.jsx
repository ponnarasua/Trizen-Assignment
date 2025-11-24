import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, loading }) => {
  // Ensure products is always an array
  const productList = Array.isArray(products) ? products : [];

  if (loading) {
    return (
      <div className="flex-1 min-h-[500px] md:min-h-[300px]">
        <div className="flex flex-col items-center justify-center min-h-[400px] md:min-h-[300px] text-gray-600 dark:text-gray-400">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin mb-4"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (productList.length === 0) {
    return (
      <div className="flex-1 min-h-[500px] md:min-h-[300px]">
        <div className="text-center py-15 md:py-10 px-5 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-2xl md:text-xl text-gray-800 dark:text-gray-100 mb-2.5">No products found</h3>
          <p className="text-base md:text-sm text-gray-600 dark:text-gray-400">Try adjusting your filters or search query</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="mb-5">
        <h2 className="text-2xl md:text-xl text-gray-800 dark:text-gray-100 font-semibold">Products ({productList.length})</h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-6 lg:gap-5 sm:gap-4 mb-8">
        {productList.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
