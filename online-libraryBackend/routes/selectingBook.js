const express = require('express');
const router = express.Router();

const SelectingBook = require("../model/SelectingBook");

router.post('/selectbook',async (req,res)=>{
    try {
        const selectingBook = new SelectingBook(
            req.body
        )
        await selectingBook.save();
        res.status(200).json("success");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
})

module.exports = router;