const mongoose = require("mongoose");
// console.log(process.env)
require('dotenv').config({path:"./BACK/.env"});
async function connectDB() {
  try {
    // console.log(process.env)
    await mongoose.connect("mongodb+srv://jaafer:aqwerty6@cluster0.v3z3exv.mongodb.net/mProj?retryWrites=true&w=majority");
    console.log("Database successfully connected");
  } catch (error) {
    console.log(error.message);
  }

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
// module.exports = mongoose.model("Shops", shopSchema);
module.exports = connectDB;