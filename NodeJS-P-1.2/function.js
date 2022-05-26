// const ageCal = (name, year) => {
//   const age = new Date().getFullYear() - year;
//   return `Hi ${name} you are ${age} years old`;
// };

// const info = (name, skill) => {
//   return `Hi ${name} you are a ${skill} developer`;
// };
// const devs = [
//   {
//     id: 1,
//     name: "Asraf",
//     skill: "IOS devs",
//   },
//   {
//     id: 2,
//     name: "Ananda",
//     skill: "MERN devs",
//   },
//   {
//     id: 3,
//     name: "Achem",
//     skill: "Android devs",
//   },
// ];

// module.exports = ageCal;
// module.exports = info;
// module.exports = devs;

// 2
const func = {};
const ageCal = (name, year) => {
  const age = new Date().getFullYear() - year;
  return `Hi ${name} you are ${age} years old`;
};

const info = (name, skill) => {
  return `Hi ${name} you are a ${skill} developer`;
};
const devs = [
  {
    id: 1,
    name: "Asraf",
    skill: "IOS devs",
  },
  {
    id: 2,
    name: "Ananda",
    skill: "MERN devs",
  },
  {
    id: 3,
    name: "Achem",
    skill: "Android devs",
  },
];

func.ageCal = ageCal;
func.info = info;
func.devs = devs;

module.exports = func;
