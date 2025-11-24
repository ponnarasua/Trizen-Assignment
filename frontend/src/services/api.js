import axios from 'axios';

// Base URL for API calls
// Vite uses import.meta.env instead of process.env
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Get all products with optional filters
 * @param {Object} params - Query parameters (category, minPrice, maxPrice)
 * @returns {Promise<Array>} - Array of products
 */
export const getAllProducts = async (params = {}) => {
  try {
    const response = await api.get('/products', { params });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

/**
 * Search products for autosuggest (returns max 5 results)
 * @param {string} query - Search query string
 * @returns {Promise<Array>} - Array of matching products (max 5)
 */
export const searchProducts = async (query) => {
  try {
    if (!query || query.trim() === '') {
      return [];
    }
    const response = await api.get('/search', {
      params: { q: query },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
};

/**
 * Get single product by ID
 * @param {string} id - Product ID
 * @returns {Promise<Object>} - Product object
 */
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export default api;
