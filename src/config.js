const { Joi } = require('celebrate');

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('development', 'test', 'production')
      .required(),
    PORT: Joi.number().integer().required(),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.validate(process.env);
if (error) {
  throw error;
}

const config = {
  environment: envVars.NODE_ENV,
  port: envVars.PORT,
};

module.exports = { config };
