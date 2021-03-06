const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const { INTEGER, STRING } = DataTypes;

const Book = sequelize.define("Book", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: STRING, allowNull: false },
  price: { type: STRING, allowNull: false },
  descr: { type: STRING, allowNull: false },
  type: { type: STRING, allowNull: false },
  img_name: { type: STRING, allowNull: false },
});

const Partner = sequelize.define("Partner", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: STRING, allowNull: false },
  descr: { type: STRING, allowNull: false },
  img_name: { type: STRING, allowNull: false },
});

const Topic = sequelize.define("Topic", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  descr: { type: STRING, allowNull: false },
});

const Article = sequelize.define("Article", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: STRING, allowNull: false },
  descr: { type: STRING, allowNull: false },
  date: { type: STRING, allowNull: false },
  img_name: { type: STRING, allowNull: false },
});

module.exports = { Book, Partner, Topic, Article };
