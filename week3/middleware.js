// req==> middleware ==>res

// TYPES OF MIDDLE WARES

// application level middlewares(used accros the entire middleware)
// router level middlewares()
// embedded middlwares


const express = require("express")

const app = express();

// const logger = (req, res, next)=>{
//     const method =req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method,url,time);
// }

// app.use(logger);

app.get("/", (req, res, next)=>{
    res.send("Homepage");
});

app.get("/about", (req, res, next)=>{
    res.send(`about`);
});
app.get("/*", (req, res, next)=>{
    res.status(404).send({
        status : 404,
        success : false,
        result : "Page not found",

    });
});





app.listen(4000, ()=>{
    console.log("runnign")
})