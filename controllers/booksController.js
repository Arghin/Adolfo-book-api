const books = require ("../models/booksModel");

const getAllbooks=(req,res) =>{
    res.json(books);
};

const getAllbooksBygenre=(req,res ) =>{
    const genre= req.params.genre;
    const filteredBooks= books.filter((book)=> book.genre === genre);

    if(filteredBooks.length === 0){
        res.status(404).json({message: "Genre not found"});
    }

    res.json(filteredBooks);
    
};

module.exports ={
    getAllbooks,
    getAllbooksBygenre
};