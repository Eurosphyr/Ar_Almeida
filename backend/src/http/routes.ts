import { FastifyInstance } from "fastify";

export async function appRoutes(app: FastifyInstance) {
  app.get("/health", async () => {
    return { status: "ok" };
  });

  app.get("/hello", async () => {
    return { message: "Hello World!" };
  });

  app.get("/goodbye", async () => {
    return { message: "Goodbye World!" };
  });
}
