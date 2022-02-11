const Producto = require("./models/Producto");
const Etiqueta = require("./models/Etiqueta");


Producto.hasMany(Etiqueta)
Etiqueta.belongsTo(Producto);
