const express = require('express');
const router = express.Router();
const Book = require('../model/Book');
const {check,validationResult} = require('express-validator');
const auth = require('../middleware/auth');
// get all the books datils
router.get('/',auth,async (req,res) =>{
    try {
        const books = await Book.find();
        res.status(200).json({books});
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
  

});
// add the book into database
router.post('/add',
    [
        check("bookId","BookId is required").notEmpty(),
        check("title","Book Name is required").notEmpty(),
        check("autherName","AutherName is required").notEmpty(),
        check("cost","Book price is required").notEmpty(),
    ],async (req,res) => {
    
    try {
        const errors = validationResult(req);
            if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const book = new Book(
            req.body
        )

        await book.save();
        res.status(200).json("success");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
});

// searching books using autherName
router.post('/searchAuther',async (req,res) =>{
    // console.log(req.body);
    const autherName = new RegExp(req.body.autherName,"gi");
    console.log(autherName);
    try {
        const books = await Book.find({autherName});
        
        res.status(200).json({books});
    } catch (err) {
        console.error(err.message);
        
    }
});
// search book using bookId
router.post('/searchBookId', async (req,res) =>{
    try {
        const book = await Book.findOne({bookId:req.body.bookId});

        res.status(200).json({book});
    } catch (err) {
        console.error(err.message);
        
    }
});

router.put('/update', async (req,res) =>{
    try {
        console.log("hiii");
        await Book.findOneAndUpdate({bookId:req.body.bookId},
            { $set: req.body },
          { new: true });

          res.status(200).json({msg: "Update is successfull"})
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
})
// delete the books
router.delete('/delete/:id', async (req,res) =>{
    try {
        await Book.findByIdAndRemove({_id:req.params.id})

        res.status(200).json({msg: "successfully deleted"})
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
    
})

module.exports = router;
