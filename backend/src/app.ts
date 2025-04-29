import fastify from "fastify";
import { appRoutes } from "./http/routes";
import cors from "@fastify/cors";
import fastifyCookie from "@fastify/cookie";

export const app = fastify();

app.register(fastifyCookie);
app.register(cors);

app.register(appRoutes);
