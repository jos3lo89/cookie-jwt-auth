import mongoose from "mongoose";
import { DB_URL } from "../config/config.js";

const connDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(">>> DB is connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connDB;
