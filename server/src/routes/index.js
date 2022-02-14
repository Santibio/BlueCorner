const {Router} = require("express")
const products = require("./products")
const tags = require("./tags");
const router = Router()

router.use("/products", products);
router.use("/tags", tags);

module.exports = router