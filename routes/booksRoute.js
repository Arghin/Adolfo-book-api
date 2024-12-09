const express = require("express");
const router = express.Router();

const { getAllbooks, 
    getAllbooksBygenre,
} = require ("../controllers/booksController");

router.get("/books", getAllbooks );
router.get("/books/genre/:genre", getAllbooksBygenre );

module.exports = router;