import { config } from "dotenv";

//config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });
config({ path: ".env.development.local" });

export const { PORT, ESTETE_JWT_SECRET_KEY } = process.env;
