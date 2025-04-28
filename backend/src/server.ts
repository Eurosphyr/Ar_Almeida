import { app } from "./app";

app
  .listen({
    port: Number(process.env.PORT) || 3000,
  })
  .then(() => console.log("🚀HTTP Server is running!"));
