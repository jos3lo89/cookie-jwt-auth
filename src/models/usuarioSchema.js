import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    usuario: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
    },
    clave: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const usuarioModelo = mongoose.model("usuario", usuarioSchema);
export default usuarioModelo;
