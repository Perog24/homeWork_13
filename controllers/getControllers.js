const productsList = require("../goodsList");

const getProdList = (req, res) => {
   res.status(200).json({message: "GET all prodacts", data: productsList});
};
const getProdByQuery= (req, res) => {
   const { productName, price } = req.query;
   let responseData = [...productsList];

   if (productName) {
      responseData = responseData.filter(product => product.productName === productName);
   }

   if (price) {
      responseData = responseData.filter(product => product.price <= price);
   }

   if (responseData.length < 1) {
      responseData = "not found products";
   }

   res.status(200).json(responseData);
};
const getProdByID = (req, res) => {
   const {id} = req.params;
   const responseData = productsList.find(product => product.id === id);

   if (responseData) {
      res.status(200).json(responseData);
   } else {
      res.status(404).json({ error: "Product not found" });
   }
}
module.exports = {
   getProdList,
   getProdByQuery, 
   getProdByID}