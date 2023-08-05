const express = require('express');
const controll = require('../../controllers/contacts')
const router = express.Router();

const {validateBody} = require('../../middlewapres');

const schemas = require('../../schemas/contacts');

router.get('/', controll.getAll);

router.get('/:contactId', controll.getById);

router.post('/', validateBody(schemas.addSchema), controll.add);

router.delete('/:contactId', controll.removeById);

router.put('/:contactId', validateBody(schemas.addSchema), controll.updateById);

module.exports = router
