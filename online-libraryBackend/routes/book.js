const express = require('express');
const router = express.Router();
const Book = require('../model/Book');
const {check,validationResult} = require('express-validator');

router.post('/book',async (req,res) => {
    
    try {
        const book = new Book(
            req.body
        )

        await book.save();
        res.status(200).json("success");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
})

module.exports = router;
