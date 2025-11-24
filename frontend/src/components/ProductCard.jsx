import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Calculate discount percentage
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Generate star rating display
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const decimal = rating - fullStars;
    const hasPartialStar = decimal > 0;
    const emptyStars = hasPartialStar ? 5 - fullStars - 1 : 5 - fullStars;
    const partialWidth = `${(decimal * 100).toFixed(0)}%`;

    return (
      <div className="flex items-center gap-1">
        <div className="flex items-center text-base">
          {[...Array(fullStars)].map((_, i) => (
            <span key={`full-${i}`} className="text-yellow-500">★</span>
          ))}
          {hasPartialStar && (
            <span className="relative inline-block">
              <span className="text-gray-300">★</span>
              <span className="absolute top-0 left-0 text-yellow-500 overflow-hidden" style={{ width: partialWidth }}>★</span>
            </span>
          )}
          {[...Array(emptyStars)].map((_, i) => (
            <span key={`empty-${i}`} className="text-gray-300">★</span>
          ))}
        </div>
        <span className="text-xs text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer flex flex-col">
      <div className="relative w-full h-[250px] lg:h-[200px] sm:h-[180px] bg-gray-100 dark:bg-gray-700 overflow-hidden">
        {!imageLoaded && !imageError && <div className="flex items-center justify-center h-full text-gray-400 text-sm">Loading...</div>}
        {imageError ? (
          <div className="flex flex-col items-center justify-center h-full bg-gray-200 text-gray-500 text-sm font-medium">
            <span className="text-3xl mb-2">📦</span>
            <span>No Image</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
          />
        )}
        {discountPercent > 0 && (
          <span className="absolute top-2.5 left-2.5 bg-red-500 text-white px-2.5 py-1 rounded text-xs font-bold z-10 sm:text-[11px] sm:px-2 sm:py-1">
            {discountPercent}% OFF
          </span>
        )}
        {!product.inStock && (
          <span className="absolute top-2.5 right-2.5 bg-gray-600 text-white px-2.5 py-1 rounded text-xs font-bold z-10 sm:text-[11px] sm:px-2 sm:py-1">
            Out of Stock
          </span>
        )}
      </div>

      <div className="p-4 sm:p-3 flex flex-col flex-1">
        <span className="text-xs text-amazon-link uppercase font-semibold mb-1.5">{product.category}</span>

        <h3 className="text-base lg:text-[15px] sm:text-sm text-gray-800 dark:text-gray-100 font-semibold mb-1.5 overflow-hidden line-clamp-2 leading-[1.4] min-h-[44px] lg:min-h-[42px] sm:min-h-[40px]" title={product.name}>
          {product.name}
        </h3>

        {product.brand && <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{product.brand}</p>}

        <div className="flex items-center gap-1.5 mb-2.5">
          {renderStars(product.rating)}
          <span className="text-xs text-gray-600 dark:text-gray-400">({product.reviews} reviews)</span>
        </div>

        <div className="flex items-center gap-2.5 mb-4">
          <span className="text-2xl lg:text-[22px] sm:text-xl font-bold text-blue-600 dark:text-blue-600">₹{product.price}</span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-base lg:text-sm text-gray-400 dark:text-gray-500 line-through">₹{product.originalPrice}</span>
          )}
        </div>

        <button
          className={`w-full px-2.5 py-2.5 sm:py-2 rounded-lg text-sm sm:text-xs font-semibold transition mt-auto ${
            !product.inStock 
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
              : 'bg-[#ffd814] text-[#0f1111] hover:bg-[#f7ca00] hover:shadow-md'
          }`}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
