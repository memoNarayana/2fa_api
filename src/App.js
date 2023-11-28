const express = require("express");
require('dotenv').config();
const bodyParser = express.json;
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(bodyParser());
app.use("/2fa", routes);

module.exports = app;