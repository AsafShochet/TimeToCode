// Importing node modules
import express from 'express';
var bodyParser = require('body-parser')

// Importing source files
import routes from './routes/main.routes';
// consts
const app = express();
app.use(bodyParser.json())
app.use('/', routes);

// arrow functions
const server = app.listen(3030, () => {
	// destructuring
  const {address, port} = server.address();

  // string interpolation:
  console.log(`Example app listening at http://${address}:${port}`);
});
