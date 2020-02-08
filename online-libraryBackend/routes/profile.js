const express  = require('express');
const router = express.Router()
const User = require("../model/User");
const SelectingBook = require("../model/SelectingBook");

router.get('/detail/:id',async (req,res) =>{
    try {
        console.log(req.params.id);
        // const user =await User.findOne({studentNo: req.params.id});
        // res.status(200).json(user);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
    
    
})

module.exports = router;