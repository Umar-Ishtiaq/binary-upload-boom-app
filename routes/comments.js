const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.post("/createComment/:id", commentsController.createComment);

//we can give multiple parameters in the route and their order does not matter they can be called in any way
router.delete("/deleteComment/:postid/:commentid", commentsController.deleteComment)
module.exports = router;
