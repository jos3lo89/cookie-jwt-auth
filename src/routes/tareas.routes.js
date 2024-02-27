import { Router } from "express";
import {
  deleteTareas,
  getTareas,
  postTareas,
  putTareas,
} from "../controllers/tareasController.js";
import { atenticacion } from "../middlewares/autenticacion.js";

const tareaRoute = Router();

tareaRoute.get("/tareas", atenticacion, getTareas);
tareaRoute.get("/tareas/:id", atenticacion, getTareas);
tareaRoute.post("/tareas", atenticacion, postTareas);
tareaRoute.put("/tareas/:id", atenticacion, putTareas);
tareaRoute.delete("/tareas/:id", atenticacion, deleteTareas);

export default tareaRoute;
