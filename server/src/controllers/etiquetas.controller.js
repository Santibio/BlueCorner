const Etiqueta = require("../database/models/Etiqueta");


const getEtiquetas = async (req, res) => {
  try {
    const etiquetas = await Etiqueta.findAll();
    res.json(etiquetas);
  } catch (error) {
    console.log(error);
  }
};



const deleteEtiquetas = async (req, res) => {
  const { id } = req.params;
   await Etiqueta.destroy({
    where: {
      id,
    },
  });

  res.send('Delete');
}
module.exports = { getEtiquetas, deleteEtiquetas };
