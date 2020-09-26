const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

const experiencesRouter = require('./routes/experiences');
const bookingRouter = require('./routes/booking');

require('./connection/MongoConnection');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/experiences', experiencesRouter);
app.use('/booking', bookingRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
