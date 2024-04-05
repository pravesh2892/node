// const app = require("./app.")
// console.log(app);



// how to create file 
// const fs = require("fs");
// fs.writeFileSync("hello.text", "hello pravesh");



// how to make basic server

//   const http = require("http");
// http.createServer((req, resp)=>{
//   resp.write("hell pravesh meena");
//   resp.end();
// }).listen(4500);




// colorful console
// const color = require("colors");
// console.log("pravesh".red)


// task - chalk module 
// const chalk = require("chalk");
// console.log(chalk.blue('Hello world!'));



// how to make API

// const http = require("http");
// const data = require('./data')
// http.createServer((res, respo)=>{
// respo.writeHead(200, {'content-type':'applicaiton\json'});
// respo.write(JSON.stringify(data));
// respo.end();
// }).listen(4600);




// input from command line

// console.log(process.argv);



// file create  and delete

// const fs = require('fs')
// const input = process.argv;
// if(input[2]==='add'){
// fs.writeFileSync(input[3], input[4]);
// }else if(input[2]==='remove'){
//  fs.unlinkSync(input[3]);
// }else{
//     console.log("invalid input");
// }




// CRUD with file system

const { error } = require('console');
const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname, 'crud');
const filepath = path.join(dirpath, 'apple.text');

if (!fs.existsSync(dirpath)) {
  fs.mkdirSync(dirpath, { recursive: true });
}
// fs.writeFileSync(filepath, 'hello i am pravesh meena');

// fs.readFile(filepath , 'utf8', (err, item)=>{
// console.log(item)
// })

// fs.appendFile(filepath, "this is apple.text file" , (error)=>{
//     if(!error)console.log("file is updated");
// })

fs.unlinkSync(filepath);