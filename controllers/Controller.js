const { Book } = require("../models/models");

class Controllers {
  async getBooks(req, res) {
    const books = await Book.findAll();
    return res.send(books);
  }
}

module.exports = new Controllers();