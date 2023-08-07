import { uploadSingle } from "../models/upload.models.js";

export const _uploadSingle = async (req, res) => {
  // req.file contains a file object
  try {
    const row = await uploadSingle(req.file);
    res.json(row);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
