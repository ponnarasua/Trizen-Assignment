const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  searchProducts,
  getProductById,
} = require('../controllers/productController');

router.get('/products', getAllProducts);
router.get('/search', searchProducts);
router.get('/products/:id', getProductById);

module.exports = router;
