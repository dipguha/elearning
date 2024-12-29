import express from "express";
import { uploadImage, removeImage, create } from "../controllers/course";
const router = express.Router();
import { requireSignin, isInstructor } from "../middlewares";


router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

router.post("/course", requireSignin, isInstructor, create);

module.exports = router;
