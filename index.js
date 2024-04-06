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

// const { error } = require('console');
// const fs = require('fs');
// const path = require('path');

// const dirpath = path.join(__dirname, 'crud');
// const filepath = path.join(dirpath, 'apple.text');

// if (!fs.existsSync(dirpath)) {
//   fs.mkdirSync(dirpath, { recursive: true });
// }
// fs.writeFileSync(filepath, 'hello i am pravesh meena');

// fs.readFile(filepath , 'utf8', (err, item)=>{
// console.log(item)
// })

// fs.appendFile(filepath, "this is apple.text file" , (error)=>{
//     if(!error)console.log("file is updated");
// })

// fs.unlinkSync(filepath);





//   asynchronous

// let a = 10;
// let b = 0;

// setTimeout(()=>{
// b=20;
// }, 200)

// console.log(a+b);  // output is 10 beacuse setTimeout function ne baad me update kiya or hamara print pahale hi chal gaya 

// how to resolve the asycnronous  drowback problem 

// let a = 10;
// let b = 0;
// let waitingData = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//     resolve(20)
//     }, 300);
// })

// waitingData.then((data)=>{
//     b = data
//     console.log(a+b)
// })







//   -----------------Express-------------------

// const express = require('express');
// const app = express();

// app.get('', (req, res)=>{
//   res.send('hello this is home page')
// })


// app.get('/about', (req, res)=>{
//     res.send('hello this is about page')
//   })

//   app.get('/welcome', (req, res)=>{
//     res.send('hello this is welcome page')
//   })

//   app.listen(4500)
  





// render HTML and JSON data

// const express = require('express');
// const app = express();

// app.get('', (req, res)=>{
//   res.send(`
//   <h1>hello this is home page</h1>
//   <a href= "/welcome" > Go to Welcome page </a>
//   `)
// })


// app.get('/about', (req, res)=>{
//     res.send('hello this is about page')
//   })

//   app.get('/welcome', (req, res)=>{
//     res.send(`
//     <input  type="text"/>
//     <button>Submit</button>
//     `);
//   })

//   app.listen(4500)




// remove extension from url

//  const express = require('express');
//  const path = require("path");
//  const app = express();
//  const publicpath = path.join(__dirname, 'public');
//  app.get('', (_, resp)=>{
//   resp.sendFile(`${publicpath}/index.html`)
//  });
//  app.get('*', (_, resp)=>{
//     resp.sendFile(`${publicpath}/pageNotFound.html`)
//    });


//  app.listen(4500);






 // ejs 

//  const { profile } = require('console');
// const express = require('express');
//  const path = require("path");
//  const app = express();

//  app.set('view engine' , 'ejs');
//  const publicpath = path.join(__dirname, 'public');
//  app.get('', (_, resp)=>{
//   resp.sendFile(`${publicpath}/index.html`)
//  });


//    app.get('/profile', (_, resp)=>{
//     const user ={
//         name: "pravesh meena",
//         email: "pravesh.meena2892@gmail.com",
//         city: "Bhopal"
//     }
//     resp.render('profile', {user});
//    });

//    app.get('*', (_, resp)=>{
//     resp.sendFile(`${publicpath}/pageNotFound.html`)
//    });
//  app.listen(4500);





// =======middleware===========
// const express = require('express');

//  const app = express();

//  const reqtfilter= (req, resp, next)=>{
//  if(!req.query.age){
//     resp.send('please provide your age')
//  }else if(req.query.age<18){
//     resp.send('you can not access this site')
//  }
//  else{
//     next();
//  }
//  }
// app.use(reqtfilter)

// app.get('/',(req, resp)=>{
// resp.send('welcome to home page')
// });

// app.get('/about',(req, resp)=>{
//     resp.send('welcome to about page')
//     });
    


// app.listen(4500);






// Route level middleware 
// const express = require('express');

//  const app = express();

//  const reqtfilter= (req, resp, next)=>{
//  if(!req.query.age){
//     resp.send('please provide your age')
//  }else if(req.query.age<18){
//     resp.send('you can not access this site')
//  }
//  else{
//     next();
//  }
//  }
// // app.use(reqtfilter)

// app.get('/',(req, resp)=>{
// resp.send('welcome to home page')
// });

// app.get('/about',reqtfilter,(req, resp)=>{
//     resp.send('welcome to about page')
//     });
    


// app.listen(4500);





// -----------------mongoDB------------------


