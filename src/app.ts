import express, { Application } from "express";

// imp config

// imp routes
import indexRoutes from "./routes/index.routes";

const app: Application = express();

// config
app.set("port", 4000);

// middleware
app.use(express.json());

//routes
app.use(indexRoutes);

export default app;
