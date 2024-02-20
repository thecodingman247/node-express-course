const mongoose = require("mongoose");
const connectString = "mongodb://localhost:27017/fcc_node_express";

mongoose
  .connect(connectString)
  .then(() => console.log("DB Connected...."))
  .catch((err) => console.error(err));
