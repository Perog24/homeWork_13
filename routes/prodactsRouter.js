const express = require('express');
<<<<<<< HEAD
=======
const productsList = require('../goodsList');
>>>>>>> ca566a07c65b4961116192eff02f9387dcf469b1
const validation = require('../middelware/validation');
const { getProdList, getProdByQuery, getProdByID } = require('../controllers/getControllers');
const {addProduct, updateProdName, deleteProduct} = require('../controllers/anotherControllers');

const router = express.Router();

router.get('/',  getProdList);
router.post('/', addProduct);
<<<<<<< HEAD
router.get('/filter', getProdByQuery);
router.get('/api/:id',  validation, getProdByID);
router.put('/api/:id', validation, updateProdName);
=======

router.get('/filter', getProdByQuery);

router.get('/api/:id',  validation, getProdByID);

router.put('/api/:id', validation, updateProdName);

>>>>>>> ca566a07c65b4961116192eff02f9387dcf469b1
router.delete('/api/:id', validation, deleteProduct);

module.exports = router;