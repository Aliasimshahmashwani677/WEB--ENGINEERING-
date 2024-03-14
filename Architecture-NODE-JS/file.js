//Architcture and working of NODE-JS .sync  and async requests working on server
const fs = require("fs");
console.log("1");
//Blocking request
const result = fs.readFileSync("./contacts.txt","utf-8");
console.log (result);
 console.log("2");

//NON-blocking request

 const fs = require("fs");
console.log("1");
//Blocking request
fs.readFile("contacts.txt","utf-8",(err,result) =>{
    console.log(result);
});

 console.log("2");