const joi = require("joi");

const registerValidation = (data) => {
  const schema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().required().email(),
    isAdmin: joi.boolean(),
    password: joi.string().min(5).required(),
    contactNo: joi.number(),
    profileURL: joi.string(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = { registerValidation, loginValidation };
