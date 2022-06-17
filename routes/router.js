const router = new require("express")();
const { getBooks } = require("../controllers/Controller");

router.get("/books", getBooks);

module.exports = router;
