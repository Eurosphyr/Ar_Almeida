import { FastifyInstance } from "fastify";
import { handleBudgetRequest } from "./controllers/budget/budgetRequest.controller";

export async function appRoutes(app: FastifyInstance) {
  app.post("/orcamento", handleBudgetRequest);
}
