import React from 'react';

const Filters = ({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  selectedRating,
  onRatingChange,
}) => {
  const categories = [
    'all',
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Books',
    'Sports',
    'Beauty',
    'Toys',
  ];

  const priceRanges = [
    { label: 'All Prices', min: 0, max: 200000 },
    { label: 'Under ₹1,000', min: 0, max: 1000 },
    { label: '₹1,000 - ₹5,000', min: 1000, max: 5000 },
    { label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
    { label: '₹10,000 - ₹25,000', min: 10000, max: 25000 },
    { label: '₹25,000 - ₹50,000', min: 25000, max: 50000 },
    { label: 'Over ₹50,000', min: 50000, max: 200000 },
  ];

  const ratings = [
    { label: 'All Ratings', value: 0 },
    { label: '4 Stars & Up', value: 4 },
    { label: '3 Stars & Up', value: 3 },
    { label: '2 Stars & Up', value: 2 },
    { label: '1 Star & Up', value: 1 },
  ];

  return (
    <aside className="flex-shrink-0">
      <div className="bg-white dark:bg-gray-800 p-4 lg:rounded-lg lg:shadow-md lg:p-4 lg:mb-4 transition-colors">
        <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">Categories</h3>
          <div className="flex flex-col gap-1">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center cursor-pointer text-xs text-gray-700 dark:text-gray-300 hover:text-amazon-orange transition py-0.5"
              >
                <input
                  type="radio"
                  name="category"
                  className="mr-2 cursor-pointer accent-amazon-orange"
                  checked={selectedCategory === category}
                  onChange={() => onCategoryChange(category)}
                />
                <span className="text-sm">{category === 'all' ? 'All' : category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">Price</h3>
          <div className="flex flex-col gap-1">
            {priceRanges.map((range, index) => (
              <label key={index} className="flex items-center cursor-pointer text-xs text-gray-700 dark:text-gray-300 hover:text-amazon-orange transition py-0.5">
                <input
                  type="radio"
                  name="priceRange"
                  className="mr-2 cursor-pointer accent-amazon-orange"
                  checked={
                    priceRange.min === range.min && priceRange.max === range.max
                  }
                  onChange={() => onPriceChange(range.min, range.max)}
                />
                <span className="text-sm">{range.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">Ratings</h3>
          <div className="flex flex-col gap-1">
            {ratings.map((rating, index) => (
              <label key={index} className="flex items-center cursor-pointer text-xs text-gray-700 dark:text-gray-300 hover:text-amazon-orange transition py-0.5">
                <input
                  type="radio"
                  name="rating"
                  className="mr-2 cursor-pointer accent-amazon-orange"
                  checked={selectedRating === rating.value}
                  onChange={() => onRatingChange(rating.value)}
                />
                <span className="text-sm flex items-center gap-1">
                  {rating.label}
                  {rating.value > 0 && (
                    <span className="text-amazon-orange">★</span>
                  )}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
