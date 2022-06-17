const router = new require("express")();
const { getAll } = require("../controllers/authorController");

router.get("/all", getAll);

module.exports = router;
