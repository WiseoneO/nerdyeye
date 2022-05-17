const express = require("express");
const connectDB = require("./config/config")
const dotenv = require("dotenv");
dotenv.config();
// importing the routes
const productRouter = require("./src/routes/productRouter");
// firing express
const app = express();

connectDB();//connect to database
app.use(express.json());
const PORT = process.env.PORT || 6000;

app.get("/", (req, res, next)=>{
    res.status(200).json({
        success: true,
        message: "Welcome to my crud api"
    })
})


// firing the route
app.use("/api", productRouter);








app.listen(PORT, ()=>{
    console.log(`Server running at ${PORT}`);
});