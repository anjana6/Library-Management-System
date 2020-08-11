const express = require('express');
const router = express.Router();
const Book = require('../model/Book');
const {check,validationResult} = require('express-validator');
const auth = require('../middleware/auth');

router.get('/',auth,async (req,res) =>{
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
});

router.get('/details/:id',auth,async(req,res)=>{
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
        
    }
})

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


router.post('/searchAuther',async (req,res) =>{
   
    const autherName = new RegExp(req.body.autherName,"gi");
    
    try {
        const books = await Book.find({autherName});
        
        res.status(200).json(books);
    } catch (err) {
        console.error(err.message);
        
    }
});

router.post('/searchBookId', async (req,res) =>{

    const bookId = new RegExp(req.body.bookId,"gi");
    try {
        const books = await Book.find({bookId});

        res.status(200).json(books);
    } catch (err) {
        console.error(err.message);
        
    }
});

router.put('/update/:id',auth, async (req,res) =>{
    try {
            const book = await Book.findOneAndUpdate({_id:req.params.id},
                { $set: req.body },
                { new: true }
                );
            
        res.status(200).json({msg: "Update is successfull"})

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
})

router.delete('/delete/:id',auth, async (req,res) =>{
    try {
        await Book.findByIdAndRemove({_id:req.params.id})

        res.status(200).json({msg: "successfully deleted"})
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
    }
    
})

module.exports = router;
