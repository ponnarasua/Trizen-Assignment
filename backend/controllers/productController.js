const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .select('_id name category price rating image brand originalPrice reviews inStock description')
      .sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching products',
      error: error.message,
    });
  }
};

const searchProducts = async (req, res) => {
  try {
    const { q } = req.query;

    // Return empty array if no query provided
    if (!q || q.trim() === '') {
      return res.status(200).json([]);
    }

    const searchRegex = new RegExp(q, 'i');

    const products = await Product.find({ name: searchRegex })
      .select('_id name category price rating image brand originalPrice reviews inStock description')
      .sort({ rating: -1 });

    res.status(200).json(products);
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
