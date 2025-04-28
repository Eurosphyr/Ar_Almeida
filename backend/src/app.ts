import fastify from "fastify";
import fastifyCookie from "@fastify/cookie";
import cors from "@fastify/cors";
import { appRoutes } from "./http/routes";

export const app = fastify();

app.register(cors);
app.register(appRoutes);
