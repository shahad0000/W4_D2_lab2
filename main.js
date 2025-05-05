characters = [
  ["Luke Skywalker", 177, "male", 77, "brown"],
  ["Leia Organa", 160, "female", 56, "blue"],
  ["Han Solo", 180, "male", 80, "brown"],
  ["Chewie", 222, "male", 190, "black"],
  ["kevien", 106, "male", 32.2, "red"],
];

// Map
let names = characters.map((character) => {
  return character[0];
});
let heights = characters.map((character) => {
  return character[1];
});
console.log(names);
console.log(heights);

let masses = characters.map((character) => {
  return character[3];
});

let eyeColors = characters.map((character) => {
  return character[4];
});

// Reduce
let totalHeights = heights.reduce((acc, curr) => acc + curr, 0);
console.log(totalHeights);

// filter
let heightsLess200 = heights.filter((height) => height < 200);
console.log(heightsLess200);

let males = characters.filter((character) => character[2] === "male");
console.log(males);

// Sort
let sortedMasses = masses.sort((a, b) => b - a);
console.log(sortedMasses);

let sortedHeights = heights.sort().reverse();
console.log(sortedHeights);

// Every
console.log(masses.every((mass) => mass > 40));
console.log(heights.every((height) => height < 200));

// Some
console.log(eyeColors.some((eye) => eye === "blue"));
console.log(heights.some((height) => height > 210));
