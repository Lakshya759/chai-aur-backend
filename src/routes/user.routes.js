import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"

const router = Router()

const uploadMiddleware = (req, res, next) => {
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ])(req, res, (err) => {
    if (err) {
      console.error("Multer error:", err);
      return res.status(400).json({ message: "File upload failed", error: err.message });
    }
    next();
  });
};


router.route("/register").post(
    uploadMiddleware,
    registerUser
)




export default router