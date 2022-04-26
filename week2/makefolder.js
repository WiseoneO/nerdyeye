const fs = require("fs");


try{
    if(!fs.existsSync("Deleteme")){
        fs.mkdirSync("Deleteme");
        console.log(`created successfully`);
    }else{
        console.log("Folder exists")
    }
}
catch{
    console.log(error)
}
