import tareaModel from "../models/tareasSchema.js";

export const getTareas = async (req, res) => {
  try {
    const { id } = req.params;

    const rows =
      id == undefined ? await tareaModel.find() : await tareaModel.findById(id);

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};

export const postTareas = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    const nuevaTarea = new tareaModel({
      titulo,
      descripcion,
    });

    const tareaGuardada = await nuevaTarea.save();

    res.status(200).json(tareaGuardada);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};

export const putTareas = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion } = req.body;

    const datosTarea = {
      titulo,
      descripcion,
    };

    await tareaModel.findByIdAndUpdate(id, datosTarea);

    const tareaFound = await tareaModel.findById(id);

    res.status(200).json(tareaFound);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};

export const deleteTareas = async (req, res) => {
  try {
    const { id } = req.params;

    await tareaModel.findByIdAndDelete(id);

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(error.message);
  }
};
