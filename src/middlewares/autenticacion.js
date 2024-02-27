import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config/config.js";

export const atenticacion = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ token: false });

    jwt.verify(token, TOKEN_SECRET, (error, decoded) => {
      if (error) {
        return res.sendStatus(401);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
    console.log(error.message);
  }
};
