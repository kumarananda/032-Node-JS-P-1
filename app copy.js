import http, { createServer } from "http";
import fs from "fs";

// let page = fs.readFileSync("./index.html");
let db = fs.readFileSync("./db.json");
let data = JSON.parse(db);
// http.createServer().listen("5050", () => {
//     console.log("Our Test Server is running on port 5050");
// });
createServer((req, res) => {
  // console.log(req); //all data
  // console.log(req.method); //type of requast
  // console.log(req.url); //requast url

  // res.write("Our NodeJs Test Server on 5050");
  // res.writeHead("200", { "Content-Type": "text/html" });
  res.writeHead("200", { "Content-Type": "application/json" });

  if (req.url === "/") {
    res.write(db);
  } else if (req.url === "/devs") {
    req.write(JSON.stringify(data.devs));
  } else if (req.url === "/products") {
    req.write(JSON.stringify(data.products));
  } else {
    res.write(JSON.stringify("No response found"));
  }

  res.write(db);
  res.end();
}).listen("5050", () => {
  console.log("Our Test Server is running on port 5050");
});

// please install nodemon
// "npm i -g nodemon"
// for contune watching server
// and run server with nodemon
// problem with cmd >> nodemon app
//but running with script on package.json
/**"scripts": {
    "jss" : "nodemon app"
  } */
//  cmd >> npm run jss
// problem messege
/**nodemon : File C:\Users\sahaa\AppData\Roaming\npm\nodemon.ps1 
cannot be loaded because running scripts is disabled on this     
system. For more information, see about_Execution_Policies at    
https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ nodemon app
+ ~~~~~~~
*/
