const router = new require("express")();
const {
  getBooks,
  getPartners,
  getTopics,
  getArticles,
  addTestsEntries,
} = require("../controllers/Controller");

router.get("/books", getBooks);
router.get("/partners", getPartners);
router.get("/topics", getTopics);
router.get("/articles", getArticles);
router.get("/addTestsEntries", addTestsEntries);

module.exports = router;
