// Path module
const path = require("path");

console.log(path);

const filePath = path.join('/content/','subfolder','test.txt');
console.log(filePath)

const base = path.basename(filePath);
console.log(base);


// resolve method within the path module

const absolute = path.resolve(__dirname, 'content','subfolder','test.txt')

console.log(absolute);