import express from "express";
import { uploadImage, removeImage } from "../controllers/course";
const router = express.Router();
import { requireSignin } from "../middlewares";


router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

module.exports = router;
