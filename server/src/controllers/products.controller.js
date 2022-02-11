const Etiqueta = require("../database/models/Etiqueta")
const Producto = require("../database/models/Producto")

const getProducts = async (req,res)=>{
    try{
        const products = await Producto.findAll({include:[{model:Etiqueta}]})
        res.json(products);
    }catch(error){
        console.log(error);
    }
}

const createProduct = async (req, res) => {
  const product = await Producto.create({

  });
  await product.addEtiqueta()
  res.json(product);
};

module.exports = { getProducts, createProduct };