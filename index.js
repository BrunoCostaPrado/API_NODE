const express = require("express");
const app = express();
const mongoose=require("mongoose");
// const { MongoClient } = require("mongodb");
require("dotenv").config();
const PORT = 8080;
app.use( express.json());
const uri= process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(uri,{
  useNewUrlParser: true, 
  // useCreateIndex:true,
  useUnifiedTopology:true,
});
const connection=mongoose.connection;
connection.once("open",()=>{
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
app.listen(PORT, () => console.log(`Esta vivo em http://localhost:${PORT}`));
