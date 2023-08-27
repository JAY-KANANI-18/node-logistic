
const mongoose = require("mongoose");


const cors = require("cors");
const bodyParser = require("body-parser");





mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/node-logistic");

const expressConfig =  require("./src/express/express");

const express = require("express");



const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

expressConfig.init(app)




app.listen(3000, () => {
  console.log("port is runiing...(at 3000)");
});
