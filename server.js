const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const petRouter = require("./routes/petRoute");

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use("/api/pet", petRouter);

// ROUTES
app.get("/", (req, res) => {
  res.json({ message: "Home Page" });
});

// 404
app.use((req, res) => {
  res.status(404).json({ message: "404" });
});

mongoose.connect(process.env.DB_CONNECTION, { dbName: "Pets" }, () => {
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
});
