import { Router } from "express";
import {
  loginUsuario,
  logout,
  perfilUsuario,
  registrarUsuario,
} from "../controllers/usuariocontroller.js";
import { atenticacion } from "../middlewares/autenticacion.js";
import { validarSchema } from "../middlewares/validator.miidleware.js";
import { loginSchema, registrarSChema } from "../schemas/authSchema.js";

const userRoute = Router();

userRoute.post(
  "/usuario/registrar",
  validarSchema(registrarSChema),
  registrarUsuario
);
userRoute.post("/usuario/login", validarSchema(loginSchema), loginUsuario);

// ruta protegida
userRoute.post("/usuario/logout", atenticacion, logout);
userRoute.get("/usuario/perfil/:id", atenticacion, perfilUsuario);

export default userRoute;
