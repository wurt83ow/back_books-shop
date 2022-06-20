const router = new require("express")();
const {
  getBooks,
  getPartners,
  getTopics,
  getArticles,
} = require("../controllers/Controller");

router.get("/books", getBooks);
router.get("/partners", getPartners);
router.get("/topics", getTopics);
router.get("/articles", getArticles);

module.exports = router;
