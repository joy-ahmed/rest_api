const express = require('express');

function routes(Book) {
  const bookRouter = express.Router();

  bookRouter.route('/books')
    .post((req, res) => {
      const book = new Book(req.body);
      book.save();
      res.status(201).json(book);
    })
    .get((req, res) => {
      const query = {};
      if (req.query.genre) {
        query.genre = req.query.genre;
      }
      // eslint-disable-next-line array-callback-return
      Book.find(query, (err, books) => {
        if (err) res.send(err);
        res.json(books);
      });
    });

  bookRouter.route('/books/:bookId')
    .get((req, res) => {
    // eslint-disable-next-line array-callback-return
      Book.findById(req.params.bookId, (err, book) => {
        if (err) res.send(err);
        res.json(book);
      });
    });
  return bookRouter;
}

module.exports = routes;
