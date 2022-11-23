const express = require('express')
const router = express.Router()
const Booking = require('../models/Booking')
const Foyer = require('../models/Foyer')


// apply a new booking 

router.post('/:idFoyer',isAuth(), async (req,res)=>{
    try {
        const newBooking = new Booking({...req.body,user:req.user._id})
        const bookedFoyer = await Foyer.findOne({_id:req.params.idFoyer}).populate("Name","Adresse") // ,user:req.user._id,foyer:req.foyer._id
        await newBooking.save()
        res.send({...newBooking,bookedFoyer})
    } catch (error) {
        res.status(400).send(error); 
    }
})


// get bookings list 
router.get("/", async (req,res)=> {
    try {
        const booksList = await Booking.find({})
        res.send(booksList)
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;