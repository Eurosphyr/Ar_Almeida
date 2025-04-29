import { FastifyInstance } from "fastify";
import { home } from "./controllers/home/home";
import { budget } from "./controllers/budget/budget";
import { solutions } from "./controllers/solutions/solutions";
import { partners } from "./controllers/partners/partners";

export async function appRoutes(app: FastifyInstance) {
  app.get("/", home);
  app.get("/budget", budget);
  app.get("/solutions", solutions);
  app.get("/partners", partners);
}
