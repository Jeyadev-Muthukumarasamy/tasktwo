const express = require("express");
const { postProduct, fetchProductsByIncreasingPriceOrder, fetchProductsByDecreasingOrder, fetchProduct } = require("../controller/productController");
const { signUp, login, profile } = require("../controller/userController");
const { createOrder, getOrderById } = require("../controller/orderController");
const { checkAuth } = require("../util/checkAuth");
// const { createOrder } = require("../controller/orderController");
const router = express.Router();

router.post("/postProducts",postProduct)
router.get("/getProducts",fetchProduct)
router.get("/fetchPriceIncreasing",fetchProductsByIncreasingPriceOrder)
router.get("/fetchPriceDecreasing",fetchProductsByDecreasingOrder)
router.post("/signup",signUp)
router.post("/login",login)
router.post("/createOrder", createOrder)
router.get("/fetchById/:userId", getOrderById);
router.get("/profile",checkAuth,profile);
// router.get("/fetchDataByAscending",fetchProductsByIncreasingPr   iceOrder)


module.exports = router