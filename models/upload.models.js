import { db } from "../config/pg.config.js";

export const uploadSingle = ({ key, mimetype, location, originalname }) => {
  return db("uploads").insert({ key, mimetype, location, originalname }, [
    "key",
    "mimetype",
    "location",
    "originalname",
  ]);
};
