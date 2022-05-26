export const ageCal = (name, year) => {
  const age = new Date().getFullYear() - year;
  return `Hi ${name} you are ${age} years old`;
};

export const info = (name, skill) => {
  return `Hi ${name} you are a ${skill} developer`;
};
