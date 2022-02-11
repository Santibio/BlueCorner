require("dotenv").config();
const server = require("./src/server");
const sequelize = require("./src/database/db.js");
require("./src/database/asociations");
const PORT = process.env.PORT || 3001;


 server.listen(PORT, () => {
   console.log(`%s listening at ${PORT}`);
   sequelize.sync({force:false}).then(()=>{
       console.log('Todo piola');
   }).catch(error=>console.log('No piola', error))
 });


