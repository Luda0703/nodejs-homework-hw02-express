const express = require('express');
const controll = require("../../controllers/auth");

const router = express.Router();

const {validateBody} = require('../../middlewapres');

const {schemas} = require('../../models/user');

router.post('./register', validateBody(schemas.registerShema), controll.register);

router.post('./login', validateBody(schemas.loginShema), controll.login);


module.exports = router;