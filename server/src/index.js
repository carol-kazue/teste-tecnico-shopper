const express = require("express");
const cors = require("cors");
const orderRoutes = require("./routes/orders");
const app = express();
const db = require("../db");

var corsOptions = {
  origin: "http://localhost:3003",
};

db.sync();

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.use("/orders", orderRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
