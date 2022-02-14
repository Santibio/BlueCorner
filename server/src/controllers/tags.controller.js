const Etiqueta = require("../database/models/Etiqueta");


const getTags = async (req, res) => {
  try {
    const tags = await Etiqueta.findAll();
    res.json(tags);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTags };
