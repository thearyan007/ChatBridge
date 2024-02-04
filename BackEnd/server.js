import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connctToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () => {
  connctToMongoDB();
  console.log(`Server is up and running on port no. ${PORT}`);
});
