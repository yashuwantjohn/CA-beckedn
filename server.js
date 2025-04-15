 import express from "express";
 import dotenv from "dotenv";
 import userRoutes from "./index.js";
 
 dotenv.config();
 const app = express();
 const PORT = process.env.PORT || 4000;
 
 app.use(express.json());
 app.use("/users", userRoutes);
 
 app.listen(PORT, () => {
 console.log(`Server is running: http://localhost:${PORT}`);
 });