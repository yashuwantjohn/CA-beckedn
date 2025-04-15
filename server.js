const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./index");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`);
});