// req.params
// req.query
// req.body
const  express = require("express");
const path = require("path")
const people = require("./data");

const app = express();
const PORT = 3000;

app.get("/people", (req, res, next)=>{
    
    res.status(200).send(people);
});

// req.params
app.get("/person/:id", (req, res, next)=>{
    const id = req.params.id;
 
    const onePerson = people.find((person)=>person.id == id);
    if(!onePerson) return res.status(404).send({success: false, message: `User not found!`})
    res.status(200).send({success: true, result : onePerson})
});

// req.query
app.get("/people/query", (req, res, next)=>{
    const {name, limit} = req.query;

    let result = people.filter((person)=>person.name.includes(name));
    result = result.slice(0, Number(limit));

    res.status(200).send({
        success : true,
        data: result,
        total_search : result.length
    })
})

app.listen(PORT, ()=>{
    console.log(`app running on Port: ${PORT}`);
})
