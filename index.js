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



// file create 

const fs = require('fs')

const input = process.argv;
fs.writeFileSync(input[2], input[3]);
