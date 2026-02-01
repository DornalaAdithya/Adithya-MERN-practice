import exp from "express";
//create mini - express(Seperate Route) app
export const productApp = exp.Router();

//products api 
//local test data
let products = [];

//get req handling route(Read products)
productApp.get("/products", (req, res) => {
  //send products data in response, to client
  res.status(200).json({ message: "All products", payload: products }); //message,payload
});

//post req handling route(Create product)
productApp.post("/products", (req, res) => {
  //get user resourse from req
  let newProduct = req.body;
  //console.log("new product is",newProduct);
  //insert newProduct into the products
  products.push(newProduct);
  //send response to client
  res.status(201).json({ message: "product created successfully" });
});

//put req handling route(Update product)
productApp.put("/products", (req, res) => {
  //get modified product from req
  let newProduct = req.body;
  //find the product with id exists in array
  let pid = newProduct.productId;
  let isProductExists = products.findIndex(
    (product) => pid === product.productId,
  );
  //if product not fount,sen res as "product not found"
  if (isProductExists === -1) {
    res.status(404).json({ message: "product not found" });
  } else {
    products.splice(isProductExists, 1, newProduct);
    //send res as "product modified"
    res.status(200).json({ message: "product modified" });
  }
});

//delete req handling route(Delete product)
productApp.delete("/product/:id", (req, res) => {
  let pid = Number(req.params.id);
  let productIndx = products.findIndex(
    (productObj) => productObj.productId === pid,
  );
  if (productIndx === -1) {
    return res.status(404).json({ message: "product not found" });
  }
  let deletedProduct = products.splice(productIndx, 1);
  return res.status(200).json({ message: "deleted", payload: deletedProduct });
});

//get products by id
productApp.get("/products-id/:id", (req, res) => {
  let pid = Number(req.params.id);
  let productsById = products.filter((product) => product.productId === pid);
  if (!productsById || productsById?.length === 0) {
    return res.status(404).json({ message: "not found" });
  }
  //console.log(productsById);
  res.status(200).json({ message: "products by id", payload: productsById });
});

//get products by brand
productApp.get("/products-brand/:brand", (req, res) => {
  let pbrand = req.params.brand.toLowerCase();
  let productsBybrand = products.filter((product) => product.brand.toLowerCase() === pbrand);
  if (!productsBybrand || productsBybrand?.length === 0) {
    return res.status(404).json({ message: "not found" });
  }
  res.status(200).json({ message: "products by brand", payload: productsBybrand });
});
