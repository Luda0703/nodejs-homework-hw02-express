const validateBody = require('./validateBody');
const isValidId = require('./isValidId');
const validateBodyFavorite = require('./validateBodyFavorite');
const authenticate = require('./aythenticate');
const upload = require('./upload');

module.exports = {
    validateBody,
    isValidId,
    validateBodyFavorite,
    authenticate,
    upload,
};