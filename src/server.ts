import "reflect-metadata";
import express from "express";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`🚗 Server running on port ${PORT}`));
