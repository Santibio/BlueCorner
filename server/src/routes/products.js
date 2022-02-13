const { Router } = require("express");
const {
  getProducts,
  createProduct,
  deleteProduct,
} = require("../controllers/products.controller");
const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
