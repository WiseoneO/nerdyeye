const express = require("express");
const router = express.Router();

// import the controllers
const {getShop, getAllProducts, getSingleProduct, CreateProduct,updateProduct,deleteProduct} = require("../controllers/productControllers");

// router.route("/").get(getShop);

// shop route
router.route("/all").get(getAllProducts);

// Get one product from the param
router.route("/one/:id" ).get(getSingleProduct);

// Create Record (CREATE)
router.route("/add").post(CreateProduct);

// update an existing record
router.route("/edit/:id").put(updateProduct)

// Reomve record
router.route("/remove/:id").delete(deleteProduct)


module.exports = router;