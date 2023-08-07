import express from "express";
import { upload } from "../utils/upload.utils.js";
import { _uploadSingle } from "../controllers/upload.controllers.js";

export const files_router = express.Router();

files_router.post("/upload-single", upload.single("file"), _uploadSingle);
