const { Joi } = require('celebrate');

const envVarsSchema = Joi.object()
  .keys({
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().integer().required(),
    DB_NAME: Joi.string().required(),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
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
  db: {
    host: envVars.DB_HOST,
    port: envVars.DB_PORT,
    name: envVars.DB_NAME,
    user: envVars.DB_USER,
    passwd: envVars.DB_PASSWORD,
  },
  environment: envVars.NODE_ENV,
  port: envVars.PORT,
};

module.exports = { config };
