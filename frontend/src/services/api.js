import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await api.get(`/search?q=${query}`);
    return response.data; // Direct array response
  } catch (error) {
    console.error('Error searching products:', error);
    return [];
  }
};

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
