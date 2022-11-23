const express = require('express')
const router = express.Router()
const Foyer = require('../models/Foyer')
const isAuth = require('../middlewares/isAuth')
const isOwner = require('../middlewares/isOwner')

//get all foyers
router.get("/", async (req, res) => {
    // console.log(req.query.Name)
    const foyers = await Foyer.find({});
    res.send(foyers);
});

// delete foyer 
router.delete("/:idDelete",isAuth(),async (req,res)=>{
    if(req.user.role === 'director'){
        try {
            const deleted = await Foyer.deleteOne({_id:req.params.idDelete});
            (deleted.deletedCount)? res.send({msg:'Foyer deleted successfully'}):res.send({msg:"Foyer is already deleted"})
        } catch (error) {
            res.status(400).send(error.message);
            console.log(error);
        }
    }
    else{res.status(401).send({msg:"Only directors are allowed"});}
})


//add foyer 
router.post('/add',isAuth(), async (req,res)=>{
    if(req.user.role === 'director'){
        try {
            const newFoyer = new Foyer({...req.body,user: req.user._id});
            await newFoyer.save()
            res.send(newFoyer);
        } catch (error) {
            res.status(400).send(error.message);
          console.log(error);
        }
    }
    else{res.status(401).send({msg:"Only directors are allowed"});}
   
})

 



//update foyer 
router.put('/:idUpdate',isAuth(),async (req,res)=>{
    if(req.user.role === 'director'){
        try {
            const updating = await Foyer.updateOne({_id:req.params.idUpdate},{...req.body});
            const updated = await Foyer.findOne({_id:req.params.idUpdate}) 
            res.send({msg:"updated successfully",updated})
        } catch (error) {
            res.status(400).send(error.message);
            console.log(error); 
        }
    }
    else{res.status(401).send({msg:"Only directors are allowed"});}
})


//get One FOYER
router.get("/:id", async (req, res) => {
    try {
      const findOneFoyer = await Foyer.findOne({ _id: req.params.id });
      res.send(findOneFoyer);
    } catch (error) {
      res.status(400).send(error.message);
      console.log(error);
    }
  });
module.exports = router;