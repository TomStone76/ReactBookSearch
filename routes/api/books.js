const router = require("express").Router();
const axios = require("axios");
const booksController = require("../../client/controllers/controller");

// router.get("/books", (req, res) => {
//     axios
//         .get("https://www.googleapis.com/books/v1/volumes?q=" 
//         + /*title*/ + "+inauthor:" + /*author*/ + "&key=AIzaSyCeTGHrURWDPgpQKn0ej5EkzWFdN6k2SrQ", 
//         { params: req.query })
//         .then(({ data: { results } }) => res.json(results))
//         .catch(err => res.status(422).json(err));
// })

router.route("/api/books")
    .get(booksController.findAll)
    .post(booksController.create);

router.route("/api/books/:id")
    .delete(booksController.delete);

router.route("*")
    .get(/*load html page from client folder*/)

module.exports = router