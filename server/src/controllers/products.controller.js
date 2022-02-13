const Etiqueta = require("../database/models/Etiqueta");
const Producto = require("../database/models/Producto");

const getProducts = async (req, res) => {
  try {
    const products = await Producto.findAll({ include: { model: Etiqueta } });
    res.json(products);
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (req, res) => {
  try {
    const { name_product, etiquetas } = req.body;
    const product = await Producto.create({
      nombre: name_product,
    });
    etiquetas.forEach((e) => {
      Etiqueta.create({ nombre: e }).then((etiqueta) => {
        product.setEtiqueta(etiqueta);
      });
    });
    res.status(201).json({ product, msg: "Product successfully created" });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Producto.destroy({
      where: {
        id,
      },
    });
    const deleteEtiqueta = await Etiqueta.destroy({
      where: {
        ProductoId: null,
      },
    });

    if (deleteProduct >= 1 && deleteEtiqueta >= 1) return res.status(201).json({msg:"Product deleted"});
    res.status(401).json({msg: "Product could't be deleted"})
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProducts, createProduct, deleteProduct };
