const { Router } = require("express");
const {
  getTags,
} = require("../controllers/tags.controller");
const router = Router();

router.get("/", getTags);



module.exports = router;
