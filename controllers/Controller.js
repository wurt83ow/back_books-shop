const { Book, Partner, Topic, Article } = require("../models/models");

class Controllers {
  async getBooks(req, res) {
    const books = await Book.findAll();
    return res.send(books);
  }

  async getPartners(req, res) {
    const partners = await Partner.findAll();
    return res.send(partners);
  }

  async getTopics(req, res) {
    const topics = await Topic.findAll();
    return res.send(topics);
  }

  async getArticles(req, res) {
    const articles = await Article.findAll();
    return res.send(articles);
  }
}

module.exports = new Controllers();
