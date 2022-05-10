const express = require("express");
const router = express.Router();
const people = require("../week3/data");

router.get("/", (req, res, next)=>{
    res.status(200).send("Welcome");
});

// Get all data(READ) 
router.get("/all", (req, res, next)=>{
    res.status(200).json({
        success : true,
        message : "successfully retrived data",
        data : people
    })
})

// Get one user from the param
router.get("/one/:id", (req, res, next)=>{
    const id = req.params.id;
    const onePerson = people.find((person)=> person.id == id );

    res.status(200).json({
        success : true,
        message : "successfully retrived data",
        data : onePerson
    });
});

// Create Record (CREATE)
router.post("/add", (req, res, next)=>{
    
    const id = Math.random();
    const name =  req.body.name;

    people.push({id, name});

    res.status(201).json({
        success : true,
        message : "Data created!",
        data : people
    });
});

// update an existing record
router.put("/edit/:id", (req, res, next)=>{
    const id = req.params.id;
    let {name} = req.body;
    let onePerson = people.find((person)=> person.id == id );
    const updatedPerson = onePerson.name = name;

    res.status(201).json({
        success : true,
        message : "Data updated successfully",
        data : updatedPerson
    });
})

// Reomve record
router.delete("/remove/:id", (req, res, next)=>{
    const id = req.params.id;
    const newPeople = people.filter((person)=>person.id !== Number(id));
    console.log(newPeople);

    res.status(201).json({
        success : true,
        message : "Data Deleted successfully",
        data :newPeople 
    });

})


module.exports = router;