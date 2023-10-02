const express = require('express');
const validation = require('../middelware/validation');
const { getProdList, getProdByQuery, getProdByID } = require('../controllers/getControllers');
const {addProduct, updateProdName, deleteProduct} = require('../controllers/anotherControllers');

const router = express.Router();

router.get('/',  getProdList);
router.post('/', addProduct);
router.get('/filter', getProdByQuery);
router.get('/api/:id',  validation, getProdByID);
router.put('/api/:id', validation, updateProdName);
router.delete('/api/:id', validation, deleteProduct);

module.exports = router;