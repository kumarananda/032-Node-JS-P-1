// commonJs
// const fs = require("fs");
//asynchronies
// fs.writeFile("note.txt", "File System Created text", (err, data) => {
//   console.log(err);
// });
// const fs = require("fs");
//synchronies
// fs.writeFileSync("note.txt", "File System Created text");

// module type
// import { writeFile, writeFileSync } from "fs";
// // generally it's a asynchronies modous
// writeFile("note.txt", "File System Created text", (err, data) => {
//   console.log(err);
// });

// module type
import { appendFileSync, writeFileSync } from "fs";
// but we can chanhe to synchronies
// writeFileSync will replace the file
// writeFileSync("note.pdf", "File System(writeFileSync) Created text,");

appendFileSync("note.txt", " appendFileSync will add new text");
