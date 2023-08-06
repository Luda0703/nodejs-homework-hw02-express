const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      next(HttpError(400, "missing fields"));
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

module.exports = validateBody;
