const fs = require("fs");


    fs.rm("./Deleteme", {recursive:true}, (err)=>{
        if(err){
            console.log(err)
        }
        console.log(`deleted successfully`)

    });