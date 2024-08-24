// backend/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/products', adminController.getAllProducts);
router.post('/addUser', adminController.addUser);
router.delete('/removeUser/:id', adminController.removeUser);

module.exports = router;
