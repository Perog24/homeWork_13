const productsList = require("../goodsList");

const addProduct = (req, res) => {
   const productName = req.body.name;
   if (productName) {
      const newProductList = [...productsList, {id: productsList.length+1, productName: productName}];
      res.status(200).json({message:"POST is worked", data: newProductList});
   } else {
      res.status(401).json({message:"Not new prodact available", data: productsList});
   }
};

const updateProdName = (req, res) => {
   const {id} = req.params;
   const updateData = req.body.name;

   if (id && updateData) {
      const updProduct = productsList.find(product => product.id === id);
      if (updProduct) {
         updProduct.productName = updateData;
const newProductList = productsList.map(product => product.id === id ? updProduct : product)
         res.status(200).json({ message: "Product updated", data: newProductList });
      } else {
         res.status(404).json({ error: "Product not found" });
      }
   } else {
      res.status(400).json({ error: "Invalid request" });
   }
};

const deleteProduct = (req, res) => {
   const {id} = req.params;

   if (id) {
      const deletedProduct = productsList.find(product => product.id === id);
      if (deletedProduct) {
         const newProductList = productsList.filter(prodact => prodact.id !== id)
         res.status(200).json({ message: "Product updated", data: newProductList });
      } else {
         res.status(404).json({ error: "Product not found" });
      }
   } else {
      res.status(400).json({ error: "Invalid request" });
   }
};

module.exports = { addProduct,
                   updateProdName,
                   deleteProduct
                  };