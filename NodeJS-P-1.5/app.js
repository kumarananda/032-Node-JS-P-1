import { parse } from "url";

const url = parse("https://developerananda.com?name=ananda");

console.log(url);

// Url {
//     protocol: 'https:',
//     slashes: true,
//     auth: null,
//     host: 'developerananda.com',
//     port: null,
//     hostname: 'developerananda.com',
//     hash: null,// hash: '#my',
//     search: null,
//     query: null, //query: 'name=ananda',
//     pathname: '/',
//     path: '/',
//     href: 'https://developerananda.com/'
//   }
