const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json)();

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
