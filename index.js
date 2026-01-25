import express from "express";
import projectRoutes from "./src/routes/projectRoutes.js";

const app = express();
app.use(express.json());

// Rotas
app.use(projectRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "API online" });
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});
