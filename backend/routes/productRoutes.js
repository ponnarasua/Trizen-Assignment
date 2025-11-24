const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  searchProducts,
  getProductById,
} = require('../controllers/productController');

/**
 * @route   GET /api/products
 * @desc    Get all products with optional filters (category, price range)
 * @access  Public
 */
router.get('/products', getAllProducts);

/**
 * @route   GET /api/search
 * @desc    Search products (autosuggest) - returns max 5 products
 * @query   q - search query string
 * @access  Public
 */
router.get('/search', searchProducts);

/**
 * @route   GET /api/products/:id
 * @desc    Get single product by ID
 * @access  Public
 */
router.get('/products/:id', getProductById);

module.exports = router;
