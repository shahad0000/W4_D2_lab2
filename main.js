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

("=========LAB 3========");
let students = ["Ali", "Sara", "Ahmed", "Lana", "Omar", "Noor"];

let startsWithA = students.filter((name) => name.startsWith("A"));
console.log(startsWithA);

let moreThanFour = students.filter((name) => name.length > 4);
console.log(moreThanFour);

let capNames = students.map((name) => name.toUpperCase());
console.log(capNames);

let includesR = students.find((name) => name.toLowerCase().includes("r"));
console.log(includesR);

let sortedNames = students.sort();
console.log(sortedNames);

let findName = students.includes("Omar");
console.log(findName);

let strLen = students.reduce((acc, curr) => acc + curr.length, 0);

let evenNameLen = students.filter((name) => name.length % 2 === 0);
console.log(evenNameLen);

let reversedNames = students.map((name) => name.split("").reverse().join(""));
console.log(reversedNames);

let withoutO = students.filter((name) => !name.toLowerCase().includes("o"));
console.log(withoutO);

let studentsGrades = [
  ["Ali", [85, 90, 78]],
  ["Sara", [88, 55, 33]],
  ["Ahmed", [22, 11, 58]],
  ["Lana", [25, 66, 35]],
  ["Omar", [45, 94, 98]],
  ["Noor", [15, 92, 73]],
];

let studentsAvg = studentsGrades.map((std) => {
  return [std[0], std[1].reduce((acc, curr) => acc + curr, 0) / std[1].length];
});
console.log(studentsAvg);

let greaterThan80 = studentsAvg.filter((std) => std[1] > 80);
console.log(greaterThan80);
