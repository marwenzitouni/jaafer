const express = require('express');
const connectDB = require("./Config/connectDB");
const path = require('path')
const cors = require('cors');

const userRoutes = require("./routes/userRoutes");
const foyerRoutes = require('./routes/foyerRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
require('dotenv').config({path:"./BACK/.env"});
const mongoose = require('mongoose');
const { logger } = require('./middlewares/logger');
const app = express();
const port =5005;
const errorHandler = require('./middlewares/errorHandler')

//connect database 
connectDB();
app.use(express.json());
app.use(cors());


app.use("/api/users", userRoutes);
app.use("/api/foyers",foyerRoutes);
app.use("/api/bookings",bookingRoutes);




// app.use("/",express.static(path.join(__dirname+"/public")))
// app.use("/",require('./routes/root'))
// app.all('*', (req, res) => {
//     res.status(404)
//     if (req.accepts('html')) {
//         res.sendFile(path.join(__dirname, 'views', '404.html'))
//     } else if (req.accepts('json')) {
//         res.json({ message: '404 Not Found' })
//     } else {
//         res.type('txt').send('404 Not Found')
//     }
// })




app.use(errorHandler)
app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});