const express = require('express');

const router = express.Router();

// importing controller

const bookControllers = require('../controllers/book_controllers');
router.get("/books", bookControllers.books);
router.post("/add-book", bookControllers.addBooks);
router.get("/read-book/:id", bookControllers.readBook);
router.delete("/delete-book/:id", bookControllers.deleteBook);
router.put("/update-book/:id", bookControllers.updateBook);

module.exports = router;
