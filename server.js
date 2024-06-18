import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { connectDB } from "./data/database.js";

import twilioRoute from "./routes/twilio.routes.js";
import embeddingRoute from "./routes/embedding.routes.js";

config({
  path: "./data/config.env",
});

console.log(process.env.GROQ_API_KEY);

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/twilio", twilioRoute);
app.use("/api/productembedding", embeddingRoute);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port: ${process.env.PORT}`);
});
