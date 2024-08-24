// backend/controllers/stockManagerController.js
const Product = require('../models/productModel');

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedProduct);
};

exports.manageStock = async (req, res) => {
  const { id } = req.params;
  const { stockQuantity } = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(id, { stockQuantity }, { new: true });
  res.json(updatedProduct);
};
