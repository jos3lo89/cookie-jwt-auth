import { Router } from "express";
import {
  loginUsuario,
  logout,
  perfilUsuario,
  registrarUsuario,
} from "../controllers/usuariocontroller.js";
import { atenticacion } from "../middlewares/autenticacion.js";

const userRoute = Router();

userRoute.post("/usuario/registrar", registrarUsuario);
userRoute.post("/usuario/login", loginUsuario);

// ruta protegida
userRoute.post("/usuario/logout", atenticacion, logout);
userRoute.get("/usuario/perfil/:id", atenticacion, perfilUsuario);

export default userRoute;
