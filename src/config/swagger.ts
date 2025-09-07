import swaggerUi from "swagger-ui-express";
import path from "path";
import { Express } from "express";
import swaggerDocument from "../../swagger.json";


export const setupSwagger = (app: Express) => {
  const swaggerDocument = YAML.load(path.join(__dirname, "../../swagger.yaml"));
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
