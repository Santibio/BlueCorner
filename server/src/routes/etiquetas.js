const { Router } = require("express");
const {
  getEtiquetas,
  deleteEtiquetas,
} = require("../controllers/etiquetas.controller");
const router = Router();

router.get("/", getEtiquetas);
router.delete("/:id", deleteEtiquetas);


module.exports = router;
