const { dbConnection } = require('./dbconnection/connection');
const http = require('./app');
require('dotenv').config();

dbConnection();

http.listen(process.env.SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor corriendo en el puerto ${process.env.SERVER_PORT}`);
});
