const express = require('express');
const router = express.Router();
const User = require("../model/User");
const {check,validationResult} = require('express-validator');

router.post('/singup', async (req,res) =>{
    try {
        const userExist = await User.findOne({email:req.body.email});
        if(userExist){
            res.status(400).json({error: "email is already exist"})
        }

        const user = await new User(
            req.body
        )
        await user.save();
        res.json("success");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
})

module.exports = router;