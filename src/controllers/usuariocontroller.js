import usuarioModelo from "../models/usuarioSchema.js";
import bcrypt from "bcryptjs";
import { crearToken } from "../libs/jwt.js";

export const registrarUsuario = async (req, res) => {
  try {
    const { usuario, correo, clave } = req.body;
    const claveHash = await bcrypt.hash(clave, 10);
    const nuevoUsuario = new usuarioModelo({
      usuario: usuario,
      correo: correo,
      clave: claveHash,
    });

    const usuarioGuardado = await nuevoUsuario.save();

    const token = await crearToken({ id: usuarioGuardado._id });

    res.cookie("token", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.status(201).json({
      id: usuarioGuardado._id,
      usuario: usuarioGuardado.usuario,
      correo: usuarioGuardado.correo,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};

export const loginUsuario = async (req, res) => {
  try {
    const { correo, clave } = req.body;

    const usuarioFound = await usuarioModelo.findOne({ correo: correo });
    if (!usuarioFound) {
      return res.status(400).json({ mensaje: "usuario no encontrado" });
    }

    const claveMatch = await bcrypt.compare(clave, usuarioFound.clave);
    if (!claveMatch) {
      return res
        .status(400)
        .json({ mensaje: "cooreo o contraseña no coinciden" });
    }

    const token = await crearToken({ id: usuarioFound._id });

    res.cookie("token", token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.status(200).json({
      id: usuarioFound._id,
      usuario: usuarioFound.usuario,
      correo: usuarioFound.correo,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};

export const perfilUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const userFound = await usuarioModelo.findById({ _id: id });
    if (!userFound) {
      return res.status(400).json({ mensaje: "el usuario no existe" });
    }

    res.status(200).json({
      id: userFound._id,
      usuario: userFound.usuario,
      correo: userFound.correo,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};
