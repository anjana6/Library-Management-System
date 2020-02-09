const express  = require('express');
const router = express.Router()
const User = require("../model/User");
const SelectingBook = require("../model/SelectingBook");
const auth = require('../middleware/auth');

router.get('/profile',auth,async (req,res) =>{
    try {
        
        const user =await  User.findOne({_id:req.userId}).populate('Fname,Lname,studentNo');
        res.status(200).json(user);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
    
    
})

module.exports = router;