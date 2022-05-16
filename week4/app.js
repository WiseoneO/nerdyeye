const express = require("express");
const mongoose = require("mongoose");

// connecting to databse
const connectDB = ()=>{
    mongoose.connect("mongodb+srv://ogboroge:dorothy%4095@cluster0.tlbyc.mongodb.net/Nerdyeyedatabase?retryWrites=true&w=majority");
        console.log("Connected successfully");
}

connectDB();

// firing express
const app = express();

app.use(express.json());

// importing routes
const router = require("./routes/router");

app.use( "/api", router);


// Listing port
app.listen(3000, ()=>{
    console.log(`Server is running on port: 3000`);
});