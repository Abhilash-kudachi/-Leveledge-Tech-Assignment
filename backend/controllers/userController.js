// backend/controllers/userController.js
const Product = require('../models/productModel');

exports.viewProduct = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};
