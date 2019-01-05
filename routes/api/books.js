const router = require("express").Router();
const axios = require("axios");
const booksController = require("../../client/controllers/controller");

// router.route("/books/:search").get(function(req, res) {

    // var searchQuery = req.params.search;

    // axios.get(
    // "https://www.googleapis.com/books/v1/volumes?q=" + searchQuery + "&key=AIzaSyCeTGHrURWDPgpQKn0ej5EkzWFdN6k2SrQ"
    
    // {
    //     // params: {
    //     //     q:searchQuery,
    //     //     key:"AIzaSyCeTGHrURWDPgpQKn0ej5EkzWFdN6k2SrQ"
    //     // }
    // })
//     ).then(({ data: { results } }) => res.json(results))
//         .catch(err => res.status(422).json(err));
// })

router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);  

router.route("/:id")
    .delete(booksController.remove);

module.exports = router