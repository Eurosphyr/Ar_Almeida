import { FastifyInstance } from "fastify";
import { home } from "./controllers/home/home";
import {
  budgetRequestSchemaJson,
  submitBudgetRequest,
} from "./controllers/budget/budgetRequest.controller";
import { solutions } from "./controllers/solutions/solutions";
import { partners } from "./controllers/partners/partners";
import { budgetRequestSchema } from "../schemas/budget/budgetRequest.schema";

export async function appRoutes(app: FastifyInstance) {
  app.get("/", home);
  app.post(
    "/budget",
    {
      schema: {
        body: budgetRequestSchemaJson,
      },
    },
    submitBudgetRequest
  );
  app.get("/solutions", solutions);
  app.get("/partners", partners);
}
