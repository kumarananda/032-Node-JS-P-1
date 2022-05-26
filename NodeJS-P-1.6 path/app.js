import { basename, dirname, extname, parse } from "path";

const lastpath = basename("https://developerananda.com/box/gold/");
const lastpath2 = basename("https://developerananda.com/box/gold.html");
const extn = extname("https://developerananda.com/box/gold.html");
const dir = dirname("https://developerananda.com/box/gold/");
const parsetest = parse("https://developerananda.com/box/gold.html");

console.log(lastpath);
// // result >> gold

console.log(lastpath2);
// result >> gold.html

console.log(dir);
// result >> https://developerananda.com/box

console.log(extn);
// result >> .html

console.log(parsetest);
// result >>
// {
//     root: '',
//     dir: 'https://developerananda.com/box',
//     base: 'gold.html',
//     ext: '.html',
//     name: 'gold'
//   }
