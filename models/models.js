const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const { INTEGER, STRING } = DataTypes;

const Book = sequelize.define("Book", {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: STRING, allowNull: false },
  price: { type: INTEGER, allowNull: false },
  comment: { type: STRING, allowNull: false },
});

module.exports = { Article, Author };
