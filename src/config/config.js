import { config } from "dotenv";

config();

export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;
export const TOKEN_SECRET  = process.env.TOKEN_SECRET ;
