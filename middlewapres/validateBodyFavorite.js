const {HttpError} = require('../helpers');

const validateBodyFavorite = (schema) => {
    const func = (req, res, next) => {
      if (Object.keys(req.body).length === 0) {
        next(HttpError(400, "missing field favorite"));
      }
      const { error } = schema.validate(req.body);
      if (error) {
        const name = error.details[0].message;
        next(HttpError(400, `${name}`));
      }
      next();
    };
    return func;
  };

// const validateBodyFavorite = (req, res, next) => {
//     if (Object.keys(req.body).length === 0) {
//         next(HttpError(400, "missing field favorite"));
//       }
//     next();
// };

module.exports = validateBodyFavorite;