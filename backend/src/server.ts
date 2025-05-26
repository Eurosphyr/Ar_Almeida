import { app } from "./app";
import "dotenv/config";

app
  .listen({
    host: "0.0.0.0",
    port: Number(process.env.PORT) || 3333,
  })
  .then(() =>
    console.log(`🚀HTTP Server is running on port ${process.env.PORT || 3333}`)
  );
