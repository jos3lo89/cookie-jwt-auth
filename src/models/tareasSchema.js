import mongoose from "mongoose";

const tareasSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const tareasModel = mongoose.model("tarea", tareasSchema);
export default tareasModel;
