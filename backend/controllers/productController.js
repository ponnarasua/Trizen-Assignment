const Product = require('../models/Product');

/**
 * Get all products with optional filtering
 * Query params: category, minPrice, maxPrice
 */
const getAllProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;
    let filter = {};

    // Apply category filter if provided
    if (category && category !== 'all') {
      filter.category = category;
    }

    // Apply price range filter if provided
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // Fetch products from database
    const products = await Product.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching products',
      error: error.message,
    });
  }
};

/**
 * Search products with autosuggest
 * Returns max 20 products for autosuggest dropdown
 * Query param: q (search query)
 */
const searchProducts = async (req, res) => {
  try {
    const { q } = req.query;

    // Return empty array if no query provided
    if (!q || q.trim() === '') {
      return res.status(200).json({
        success: true,
        count: 0,
        data: [],
      });
    }

    // Case-insensitive, partial match search using regex
    const searchRegex = new RegExp(q, 'i'); // 'i' flag for case-insensitive

    // Search in name, description, category, and brand fields
    const products = await Product.find({
      $or: [
        { name: searchRegex },
        { description: searchRegex },
        { category: searchRegex },
        { brand: searchRegex },
      ],
    })
    .limit(20) // Return maximum 20 results for autosuggest
    .select('name price image rating category'); // Select only necessary fields

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).json({
      success: false,
      message: 'Error searching products',
      error: error.message,
    });
  }
};

/**
 * Get single product by ID
 */
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching product',
      error: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
  searchProducts,
  getProductById,
};
