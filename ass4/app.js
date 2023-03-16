const fs = require("fs");

//read file
const readData = fs.readFileSync('readContent.txt');
const orgData = readData.toString();
console.log(orgData);

//write file
fs.writeFileSync('writeContent.txt', "Hello, My name is Priyanka");