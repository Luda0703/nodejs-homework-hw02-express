const express = require("express");
const controll = require("../../controllers/contacts");
const router = express.Router();

const {
  validateBody,
  isValidId,
  validateBodyFavorite,
  authenticate,
} = require("../../middlewapres");

const { schemas } = require("../../models/contact");

router.get("/", authenticate, controll.getAll);

router.get("/:contactId", authenticate, isValidId, controll.getById);

router.post("/", authenticate, validateBody(schemas.addSchema), controll.add);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBodyFavorite(schemas.updateFavoriteSchema),
  controll.updateFavorite
);

router.delete("/:contactId", authenticate, isValidId, controll.removeById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  controll.updateById
);

module.exports = router;
