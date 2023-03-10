const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co', 'http://localhost:5500', 'https://3.144.244.212:5000/api/v1/', 'https://3.144.244.212:5000/api/v1/group', 'https://3.144.244.212:5000/api/v1/selection', 'https://3.144.244.212:5000/api/v1/player', 'https://3.144.244.212:5000/api/v1/match'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));



routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Mi port ${port}`);
});


