import http, { createServer } from "http";
// http.createServer().listen("5050", () => {
//     console.log("Our Test Server is running on port 5050");
// });
createServer((req, res) => {
  res.write("Our NodeJs Test Server on 5050");
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
