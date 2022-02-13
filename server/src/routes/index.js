const {Router} = require("express")
const products = require("./products")
const etiquetas = require("./etiquetas");
const router = Router()

router.use("/products", products);
router.use("/etiquetas", etiquetas);

module.exports = router