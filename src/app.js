const express = require("express");
const sugestoesRoutes = require("./routes/sugestoes");

const app = express();
app.use(express.json());

app.use("/sugestoes", sugestoesRoutes);

module.exports = app;
