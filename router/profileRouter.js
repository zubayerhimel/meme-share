import express from "express";
import { getProfile, forgotPassword, verifyOTP, changePassword } from "../controllers/profileController";

const router = express.Router();

router.route("/:id").get(getProfile);
router.post("/forgot", forgotPassword);
router.post("/forgot/otpverify", verifyOTP);
router.post("/forgot/changepassword", changePassword);
export default router;
