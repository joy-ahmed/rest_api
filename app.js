const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
// eslint-disable-next-line no-unused-vars
const db = mongoose.connect('mongodb://localhost/bookAPI');

const port = process.env.PORT || 4242;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(port, () => console.log(`Server up and running on ${port}`));
