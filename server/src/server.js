const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const cors = require("cors");


const server = express();

// Configurations
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.use(cors());

// Initial route
server.use("/api", routes);



module.exports = server;
