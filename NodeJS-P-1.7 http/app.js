import http, { createServer } from "http";
import fs from "fs";

let db = fs.readFileSync("./db.json");
let data = JSON.parse(db);

console.log(data.products);
createServer((req, res) => {
  res.writeHead("200", { "Content-Type": "application/json" });

  console.log();
  if (req.url === "/") {
    res.write(db);
  } else if (req.url === "/devs") {
    res.write(JSON.stringify(data.devs));
  } else if (req.url === "/products") {
    res.write(JSON.stringify(data.products));
  } else {
    res.write(
      JSON.stringify({
        status: "Data failed",
      })
    );
  }

  // res.write(db);
  res.end();
}).listen("5050", () => {
  console.log("Our Test Server is running on port 5050");
});
