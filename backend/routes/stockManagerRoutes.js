// backend/routes/stockManagerRoutes.js
const express = require('express');
const router = express.Router();
const stockManagerController = require('../controllers/stockManagerController');

router.put('/updateProduct/:id', stockManagerController.updateProduct);
router.put('/manageStock/:id', stockManagerController.manageStock);

module.exports = router;
