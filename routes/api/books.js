const router = require("express").Router();
const axios = require("axios");
const booksController = require("../../client/controllers/controller");

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);  

router.route("/:id")
    .delete(booksController.remove);

module.exports = router