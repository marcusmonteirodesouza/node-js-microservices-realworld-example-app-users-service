const { app } = require('./app');
const { config } = require('./config');

app.listen(config.port, () => {
  console.log(`Users Service listening on port ${config.port}`);
});
