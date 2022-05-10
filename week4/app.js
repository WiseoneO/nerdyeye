const express = require("express");


const app = express()
// Hom route

app.use(express.json())

const router = require("./router")

app.use("/api", router);






app.listen(3000, ()=>{
    console.log(`Server is running on port: 3000`);
})