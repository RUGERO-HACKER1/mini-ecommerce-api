import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import routes from "./routes";
import { notFound } from "./middleware/notFound";
import { errorHandler } from "./middleware/errorHandler";
import { setupSwagger } from "./config/swagger";

dotenv.config();

const app = express();

// Core middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dev logging
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Swagger documentation
setupSwagger(app);

// Health check route
app.get("/", (_req, res) => {
  res.json({ success: true, data: null, message: "Mini E-Commerce API" });
});

// API routes
app.use("/api", routes);

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;
