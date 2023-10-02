function validation(req, res, next) {
   const validRouteRegex = /^(\/filter)|(\/(api\/\d)*)$/; // Регулярний вираз для шляхів типу /api/{ціле число}
   
   if (!validRouteRegex.test(req.url)) {
      return res.status(404).json({message: "Invalid route"});
   }

   if (req.params.id) {
      const parsedId = Number(req.params.id);
      if (isNaN(parsedId)) {
         return res.status(400).json({message: "Invalid id parameter"});
      }
      req.params.id = parsedId; // Оновлюємо req.params.id
   }

   if (req.query.price) {
      const parsedPrice = Number(req.query.price);
      if (isNaN(parsedPrice)) {
         return res.status(400).json({message: "Invalid price parameter"});
      }
      req.query.price = parsedPrice;
   }

   next();
}


module.exports = validation;