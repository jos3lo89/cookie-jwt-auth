import app from "./config/app.js";
import { PORT } from "./config/config.js";
import connDB from "./db/connDb.js";

function serverOn() {
  try {
    app.listen(PORT);
    console.log(`Server on port ${PORT}`);

    connDB();
  } catch (error) {
    console.log(error.message);
  }
}

serverOn()
