const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.route('/').get(productController.getAllProducts);

router.route('/static').get(productController.getAllProductsStatic);


module.exports = router;