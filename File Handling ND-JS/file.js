//FILE-HANDLING PRACTICE NODE-JS(comment // code for the sake of running every line individually):
//sync
const fs = require("fs");
fs.writeFileSync("./test.txt","hey there!");

//async
fs.writeFile("./test.txt", "hello world async" , (err) => {});

 const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);
fs.readFile("./contacts.txt","utf-8" , (err , result) =>{
 if(err){
    console.log("Error",err);
   
 } else {
    console.log(result);
    }
 });
//

fs.appendFileSync("./test.txt",`${Date.now()} Hey there!\n`);

//

fs.cpSync("./test.txt" ,"./copy.txt",);

//
fs.unlinkSync("./copy.txt");
console.log(fs.statSync("./test.txt"));

//
fs.mkdirSync("my-docs/a/b",{recursive:true});
 