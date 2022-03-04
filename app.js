const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const bookRouter = express.Router();
const port = process.env.PORT || 4242;
const Book = require('./models/bookModel');

bookRouter.route('/books')
  .get((req, res) => {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    // eslint-disable-next-line array-callback-return
    Book.find((_query, err, books) => {
      if (err) res.send(err);
      res.json(books);
    });
  });

app.use('/api', bookRouter);
app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(port, () => console.log(`Server up and running on ${port}`));
