import fastify from "fastify";
import fastifyMultipart from '@fastify/multipart';
import fastifyCors from "@fastify/cors";
import { appRoutes } from "./http/routes";
import dotenv from "dotenv";
dotenv.config();
export const app = fastify();

app.register(fastifyCors, {
  origin: "http://localhost:3000", // libera seu frontend React
});
app.register(fastifyMultipart);
app.register(appRoutes);
