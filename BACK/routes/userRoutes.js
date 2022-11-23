const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require("bcrypt");
// const isAuth = require('../middlewares/isAuth')
const jwt = require("jsonwebtoken");
const isAuth = require('../middlewares/isAuth');

//register
router.post('/register', async (req,res)=>{
    const { email, password } = req.body;
    try {
        const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).send({ msg: "user already exists" });
    }
        const newUser = new User(req.body)
        const hashedPassword = await bcrypt.hash(password, 10);
        newUser.password = hashedPassword;
        
        await newUser.save()
        res.send({msg:"registred successfully", newUser})
    } catch (error) {
        res.status(400).send(error);
        console.log(error.message)
    }
})
//login
router.post('/login',async (req,res)=>{
    const { email, password } = req.body;
    try {
        const existUser = await User.findOne({email});
        if (!existUser){ return res.status(400).send({ msg: "You are not registered yet" });}
        const isMatched = await bcrypt.compare(password, existUser.password);
        if (!isMatched){ return res.status(400).send({ msg: "You are not registered yet,password" });}
        const payload = { id: existUser._id };
    const token = await jwt.sign(payload, "secret");
    res.send({ user: existUser, token });
    } catch (error) {
        res.status(400).send(error);
        console.log(error.message)
    }
})


//get current user
router.get("/current", isAuth(), async (req, res) => {
    res.send(req.user);
  });


router.get('/', async (req,res)=>{
    try {
        const users = await User.find({})
        res.send(users)
    } catch (error) {
        res.status(400).send(error);
        console.log(error)
    }
});


//delete users
router.delete("/:idDelete",async (req,res)=>{
    try {
        const deleted = await User.deleteOne({_id:req.params.idDelete});
        (deleted.deletedCount)? res.send({msg:'User deleted successfully'}):res.send({msg:"User is already deleted"})
    } catch (error) {
        res.status(400).send(error.message);
        console.log(error);
    }
})

// UPDATE USER  
router.put('/:idUpdate',async (req,res)=>{
    try {
        const updating = await User.updateOne({_id:req.params.idUpdate},{...req.body});
        const updated = await User.findOne({_id:req.params.idUpdate}) 
        res.send({msg:"updated successfully",updated})
    } catch (error) {
        res.status(400).send(error.message);
        console.log(error); 
    }
})
module.exports = router;