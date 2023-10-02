const express = require('express');
const prodactsList = require('../../goodsList');
const validation = require('../../middelware/validation');

const router = express.Router();

router.get('/',  (req, res) => {
   res.status(200).json({message: "GET all prodacts", data: prodactsList});
});
router.post('/',  (req, res) => {
   const prodactName = req.body.name;
   if (prodactName) {
      const newProdactList = [...prodactsList, {id: prodactsList.length+1, prodactName: prodactName}];
      res.status(200).json({message:"POST is worked", data: newProdactList});
   } else {
      res.status(401).json({message:"Not new prodact available", data: prodactsList});
   }
});

router.get('/filter', (req, res) => {
   const { productName, price } = req.query;
   let responseData = [...prodactsList];

   if (productName) {
      responseData = responseData.filter(product => product.prodactName === productName);
   }

   if (price) {
      responseData = responseData.filter(product => product.price <= price);
   }

   if (responseData.length < 1) {
      responseData = "not found products";
   }

   res.status(200).json(responseData);
});

router.get('/api/:id',  validation, (req, res) => {
   const {id} = req.params;
   const responseData = prodactsList.find(product => product.id === req.params.id);

   if (responseData) {
      res.status(200).json(responseData);
   } else {
      res.status(404).json({ error: "Product not found" });
   }
});

router.get('*', (req, res) => {
   res.status(404).json({ error: "Wrong URI" });
   
});

module.exports = router;