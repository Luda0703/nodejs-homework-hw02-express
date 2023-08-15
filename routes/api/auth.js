const express = require("express");
const controll = require("../../controllers/auth");

const router = express.Router();

const { validateBody, authenticate, upload } = require("../../middlewapres");

const { schemas } = require("../../models/user");

router.post(
  "/register",
  validateBody(schemas.registerShema),
  controll.register
);

router.get("/verify/:verificationToken", controll.verify);

router.post('/verify', validateBody(schemas.emailShema), controll.resendVerify);

router.post("/login", validateBody(schemas.loginShema), controll.login);

router.get("/current", authenticate, controll.getCurrent);

router.post("/logout", authenticate, controll.logout);

router.patch('/avatars', authenticate, upload.single('avatar'), controll.updateAvatar);

module.exports = router;
