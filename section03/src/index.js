// -------------- common js 모듈 시스템
// const moduleData = require("./math");
// console.log(moduleData.add(1, 2));

// const { add, sub } = require("./math");

// --------------------  ES 모듈 시스템
// import mul, { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(1, 2));

import randomColor from "randomcolor";
const color = randomColor();
console.log(color);

// ----- Mission -----

import { getRandomName, getRandomEmail } from "./random.js";

const name1 = getRandomName();
const name2 = getRandomName();
const name3 = getRandomName();
console.log(name1, name2, name3);

const email1 = getRandomEmail();
const email2 = getRandomEmail();
const email3 = getRandomEmail();
console.log(email1, email2, email3);
