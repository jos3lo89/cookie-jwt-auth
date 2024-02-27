import express from "express";
import cookieParser from "cookie-parser";
import userRoute from "../routes/usuario.routes.js";
import tareaRoute from "../routes/tareas.routes.js";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(userRoute);
app.use(tareaRoute);

app.use((req, res) => {
  res.status(404).json({ mensaje: "NO content" });
});

export default app;
