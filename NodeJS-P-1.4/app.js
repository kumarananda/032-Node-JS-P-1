// import { readFileSync, readFile } from "fs";
// import { rename, renameSync } from "fs";
import { writeFileSync, unlink, unlinkSync } from "fs";

//1
// let data = readFileSync("./db.json");
// console.log(data);
// console.log(data.toString());

//2
// readFile("./db.json", (err, data) => {
//   console.log(err);
//   console.log(data.toString());
// });

//3
// asyncronus
// rename("./db.json", "data.json", () => {});
//
// renameSync("./data.json", "db.json");

//4 unlink & unlinkSync
writeFileSync("test.txt", "wealcome text");
// unlink("test.txt", (err) => {
//   console.log(err);
// });
// unlinkSync("./test.txt");
