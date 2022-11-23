const mongoose = require('mongoose')
const User = require("../models/User");
const foyerSchema = new mongoose.Schema({
    fullname: { type: String, required: true, uppercase: true, trim: true }, 
    adresse: { type: String, required: true, uppercase: true, trim: true }, 
    image: { type: String },
    createdOn: { type: Date, default: Date.now },
    description: { type: String, trim: true },
    gender: {
    type: String,
    default:"male",
    enum: ["male",'female']
  },
  phone:Number,
user: { type: mongoose.Schema.Types.ObjectId, ref: "user",required:true },
    open:{
        type:Boolean,
        default:true,
    },
    booking:{type: mongoose.Schema.Types.ObjectId, ref: 'Booking'},
    maxCapacity:Number
});
module.exports = Foyer = mongoose.model("foyer", foyerSchema);