import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import routes from "./routes";
import { notFound } from "./middleware/notFound";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.get("/", (_req, res) => {
  res.json({ success: true, data: null, message: "Mini E-Commerce API" });
});

// API routes
app.use("/api", routes);

// 404 & error handler
app.use(notFound);
app.use(errorHandler);

export default app;
