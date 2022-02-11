const express = require("express");
const res = require("express/lib/response");
const app = express();
const mongoose = require("mongoose");
const Cust = require("./model/cust");
require("dotenv").config();
const PORT = 8080;
app.use(express.json());
const uri = process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(uri, {
  useNewUrlParser: true,
  // useCreateIndex:true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Coneção com a database feita");
});

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "5",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "Logo agora!" });
  }
  res.send({
    tshirt: `5 com ${logo} e ID de ${id}`,
  });
});

app.post("/cust", async (req, res) => {
  try {
    console.log("req.body:", req.body);
    const newcust = new Cust({
      custFirstName: req.body.custFirstName,
      CustLastName: req.body.CustLastName,
    });
    await Cust.create(newcust);
    res.send("Cust adicionado");
  } catch (err) {
    console.log("error: ", err);
  }
});
app.listen(PORT, () => console.log(`Esta vivo em http://localhost:${PORT}`));
