const express = require("express");
const controll = require("../../controllers/auth");

const router = express.Router();

const { validateBody, authenticate } = require("../../middlewapres");

const { schemas } = require("../../models/user");

router.post(
  "/register",
  validateBody(schemas.registerShema),
  controll.register
);

router.post("/login", validateBody(schemas.loginShema), controll.login);

router.get("/current", authenticate, controll.getCurrent);

router.post("/logout", authenticate, controll.logout);

module.exports = router;
