const express = require("express");
const controll = require("../../controllers/contacts");
const router = express.Router();

const {
  validateBody,
  isValidId,
  validateBodyFavorite,
} = require("../../middlewapres");

const { schemas } = require("../../models/contact");

router.get("/", controll.getAll);

router.get("/:contactId", isValidId, controll.getById);

router.post("/", validateBody(schemas.addSchema), controll.add);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBodyFavorite(schemas.updateFavoriteSchema),
  controll.updateFavorite
);

router.delete("/:contactId", isValidId, controll.removeById);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  controll.updateById
);

module.exports = router;
