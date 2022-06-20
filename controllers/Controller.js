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

  addTestsEntries(req, res) {
    const new_books = [
      {
        title: "Atomic One’s",
        price: "13.84",
        descr:
          "As the book contains theoretical content as well as solved questions.",
        type: "Printed Book",
        img_name: "book1.png",
      },
      {
        title: "The Dark Light",
        price: "86.11",
        descr:
          "As the book contains theoretical content as well as solved questions.",
        type: "Printed Book",
        img_name: "book2.png",
      },
    ];
    Book.bulkCreate(new_books);

    const new_partners = [
      {
        title: "Amazen Corp.",
        descr:
          "They has been helping readers, music lovers, and videophiles find quality material.",
        img_name: "partner1.png",
      },
      {
        title: "Megan Books",
        descr:
          "We help physical bookstores manage their overstock to the book inventory.",
        img_name: "partner2.png",
      },
      {
        title: "Megank",
        descr:
          "Bookstore serving up the full spectrum of Black literature and wine black books.",
        img_name: "partner3.png",
      },
      {
        title: "Urban Store",
        descr:
          "We also carry the latest records, issues of all of your favorite comic books.",
        img_name: "partner4.png",
      },
    ];
    Partner.bulkCreate(new_partners);

    const new_topics = [
      {
        descr: "Use HDFS & Map Reduce for storing & analyzing data at scale.",
      },
      {
        descr:
          "Consume streaming data using Spark Streaming, Flink, and Storm.",
      },
      {
        descr:
          "Choose an appropriate data storage technology for your application.",
      },
      {
        descr:
          "Analyze non-relational data using HBase, Cassandra, and MongoDB.",
      },
    ];
    Topic.bulkCreate(new_topics);

    const new_articles = [
      {
        title: "Significant reading has more info number",
        descr:
          "Override the digital divide with additional clickthroughs from DevOps for real-time schemas.",
        date: "October 6, 2021",
        img_name: "article1.png",
      },
      {
        title: "Many variations of pass majority have suffered",
        descr:
          "Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.",
        date: "October 6, 2021",
        img_name: "article2.png",
      },
      {
        title: "Words which don’t look even slightly believable",
        descr:
          "Podcasting operational change management inside of workflows to establish a framework.",
        date: "October 6, 2021",
        img_name: "article3.png",
      },
    ];
    Article.bulkCreate(new_articles);

    return res.send(true);
  }
}

module.exports = new Controllers();
