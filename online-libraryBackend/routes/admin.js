const express = require('express');
const router = express.Router();
const Admin = require("../model/Admim");
const {check,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/singUp',
    [
        check("name","Name is required").notEmpty(),
        check("nic","NIC is required").notEmpty(),
        check("email","Please include a valid email").isEmail(),
        check("password","password with 6 or more character").isLength({min:6})
    ], async (req,res) =>{
    try {
        const errors = validationResult(req);
            if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const emailExist = await Admin.findOne({email:req.body.email});
        if(emailExist){

            return res.status(400).json({error: "Email is already exist"});
        }


        const admin = new Admin(
            req.body
        )
        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash(req.body.password,salt);

        await admin.save();
        res.json("success");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
        
    }
})

router.post('/singIn',[
    check("email","Please include a valid email").isEmail(),
    check("password","password with 6 or more character").isLength({min:6})
],async (req,res)=>{
    try {
        const errors = validationResult(req);
            if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const admin = await Admin.findOne({email:req.body.email});
        if(!admin){
            return res.status(400).json({error:"You can't loging"});
        }
        const isMatchPassword = await bcrypt.compare(req.body.password,admin.password);
        if(!isMatchPassword){
            return res.status(400).json({error:"Your password is not Match"});
        }

        jwt.sign(
            {id: admin._id},
            config.get("jwtSecret"),
            {expiresIn: 360000},
            (err,token) =>{
                if(err) throw err;
                res.json({token});
            }
        );

        // res.status(200).json("success");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
    
    
})

module.exports = router;