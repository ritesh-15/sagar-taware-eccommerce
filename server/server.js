import express from "express";
import cors from "cors";
import authRouter from "./routes/auth-routes.js";
import { config } from "dotenv";
import connection from "./db.js";

config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

connection();

app.use("/api", authRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
