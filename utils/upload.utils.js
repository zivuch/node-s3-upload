import multerS3 from "multer-s3";
import multer from "multer";
import path from "path";
import { s3 } from "../config/aws.s3.config.js";
import dotenv from "dotenv";
dotenv.config();

export const upload = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: process.env.AWS_BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      const fileName = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;
      cb(null, `${fileName}${path.extname(file.originalname)}`);
    },
  }),
});
