const fs = require("fs");


fs.rename("newFolder", "./rename", err=>{
    if(err){
        console.log(err);
    }

    console.log(" folder updated successfully")
})