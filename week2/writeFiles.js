const fs = require("fs");

// write sync

// const data = `Tested and trusted`;

// try{
//     fs.writeFileSync("./newFolder/index.txt", data)
//     console.log(`succewsfully`)

// }catch{
//     console.log(error);
// }


// Write Async

let data = `Something else`
try{
    fs.writeFile("./newFolder/text.txt", data, err=>{
    if(err){
        console.log(err);
    }
    console.log(`successful`)
})
}
catch(error){
    console.log(error)
}