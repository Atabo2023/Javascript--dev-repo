"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 532;

// TUTORIA 33 FUNCTION
function logger() {
  console.log("My name is Victor");
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

// To log/store the value returned by a function
// Method 1: Store in a variable and then log the variable to the console
// // const answer = adder(1, 1);
// console.log(answer);

//Method 2: Directly log the value returned by the function to the console
// console.log(adder(5, 5));

// function adder(a, b) {
//   const sum = a + b;
//   return sum;
// }

// TUTORIA 34 FUNCTION DECLARATION VS EXPRESSION

// FUNCTION DECLARATION
function calcAge1(birthYeah) {
  return 2023 - birthYeah;
}

const Age1 = calcAge1(1997);
console.log(Age1);

// FUNCTION EXPRESSION
const calcAge2 = function (birthYeah) {
  return 2023 - birthYeah;
};

const Age2 = calcAge2(1997);
console.log(Age1, Age2);

// TUTORIAL 35 ARROW FUNCTION
let calcAge3 = (birthYeah) => 2023 - birthYeah;
const Age3 = calcAge3(1997);
console.log(Age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2023 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1997, "Victor"));
console.log(yearsUntilRetirement(1980, "David"));

// FUNCTIONS CALLING OTHER FUNCTIONS

function cutfruitpieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applepieces = cutfruitpieces(apples);
  const orangepieces = cutfruitpieces(oranges);

  const juice = `juice with ${applepieces} piece of apples and ${orangepieces} peices of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// REVIEWING FUNCTION

let calcAge = function (birthYeah) {
  return 2023 - birthYeah;
};

const yearUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearUntilRetirement(1997, "Victor"));
console.log(yearUntilRetirement(1950, "David"));

//                          CHALLENGE #1 ON FUNCTION
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// SOLUTION
// TASK #1

let calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(44, 23, 71));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphin win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins) {
    console.log(`koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(300, 120);

// TASK 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

//                          CHALLENGE #1 ON FUNCTION
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// TASK 1 PRACTICE.
const tAverage = (a, b, c) => (a + b + c) / 3;
console.log(tAverage(23, 40, 45));

const scoreVictor = tAverage(44, 23, 71);
const scoreAtabo = tAverage(65, 54, 49);
console.log(scoreVictor, scoreAtabo);

function checkVictory(avgVictor, avgAtabo) {
  if (avgVictor >= 2 * avgAtabo) {
    console.log(`Victor win... (${avgVictor} vs. ${avgAtabo})`);
  } else if (avgAtabo >= avgVictor) {
    console.log(`Atabo win.. (${avgAtabo} vs. ${avgVictor})`);
  } else {
    console.log(`No team wins...`);
  }
}

checkVictory(scoreVictor, scoreAtabo);

checkVictory(380, 110);
// GOODBYE FUNCTION

// ARRAYS

const fried1 = "Michael";
const fried2 = "Steven";
const fried3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2000, 2023);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Victor";
const Victor = ["firstName", "Atabo", 2023 - 1997, "programmer", friends];
console.log(Victor);
console.log(Victor.length);

// EXERCISE ON ARRAYs

const cacAge = function (birthYeah) {
  return 2023 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2020];

const age1 = cacAge(years[0]);
const age2 = cacAge(years[1]);
const age3 = cacAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  cacAge(years[0]),
  cacAge(years[1]),
  cacAge(years[years.length - 1]),
];
console.log(ages);

// BASIC ARRAYS OPERATIONS

// ADD ELEMENTS
const friend = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Victor");
console.log(friends);
console.log(newLength);

friends.unshift("john");
console.log(friends);

// REMOVE ELEMENTS
friends.pop(); // LAST ELEMENTS
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("bob"));

friends.push(23);
console.log(friend.includes("Steven"));
console.log(friend.includes("bob"));
console.log(friend.includes("23"));

if (friends.includes("peter")) {
  console.log("You have a friend called steven");
}

// CHALLENGE #2 ON AN ARRAY

// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// sulution

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = (bill) => (bill) =>
//   50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// TASK 2

const bills = [125, 555, 44];

// TASK 3

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// TASK 4

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

// CHALLENGE #2 ON AN ARRAY

// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// SOLUTION ON AN ARRAY

// TASK 1

const vicTip = function (bill) {
  return bill <= 50 && bill >= 300 ? bill * 0.15 : bill * 0.2;
};
// TASK 2

const costs = [125, 555, 444];

// TASK 3

const vics = [vicTip(costs[0]), vicTip(costs[1]), vicTip(costs[2])];
const sums = [costs[0] + vics[0], costs[1] + vics[1], costs[2] + vics[2]];

console.log(costs, vics, sums);

// TUTORIAL 42 INTRODUCTION TO OBJECT;

const victorarray = [
  "victor",
  "Atabo",
  2023 - 1997,
  "programmer"[("michael", "peter", "steven")],
];
console.log(victorarray);

const victor = {
  firstName: "Victor",
  lastName: "Atabo",
  age: 2023 - 1997,
  job: "programmer",
  friends: ["Isa", "Success", "Victor"],
};
console.log(Victor);

// PART 2
const V = {
  firstName: "Victor",
  lastName: "Atabo",
  age: 2023 - 1997,
  job: "programmer",
  friends: ["Isa", "Success", "Victor"],
};
console.log(V);

console.log(V.lastName);
console.log(V["lastName"]);

const namekey = "Name";
console.log(V["first" + namekey]);
console.log(V["last" + namekey]);

// bracket notation

const insterestedIn = prompt(
  "what do you wants to know about V? choose between firstName, lastName, age, job, and friends"
);
if (V[insterestedIn]) {
  console.log(V[insterestedIn]);
} else {
  console.log(
    "wrong request! what do you wants to know about V? choose between firstName, lastName, age, job, and friends"
  );
}

V.location = "UK";
V["whatsapp"] = "Atabo Onuche";
console.log(V);

// CHALLENGE
// Victor has 3 friends, and his best friend is called Isa

console.log(
  `${V.firstName} has ${V.friends.length} friends, and his best friend is called ${V.friends[0]}`
);

// OBJECT METHODs

const Vic = {
  firstName: "Victor",
  lastName: "Atabo",
  birthYeah: 1997,
  job: "programmer", // STRING VALUE
  friends: ["Isa", "Success", "Victor"], // ARRAY VALUE
  hasDriversLicense: true, // BOOLEAN VALUE

  // calcAge: function (birthYeah) {
  //   // FUNCTION VALUE
  //   return 2023 - birthYeah;
  // },
  // calcAge: function () {
  //   console.log(this);
  //   return 2023 - this.birthYeah;
  // },

  calcAge: function () {
    this.age = 2023 - this.birthYeah;
    return this.age;
  },
};

console.log(Vic.calcAge());

console.log(Vic.age);
console.log(Vic.age);
console.log(Vic.age);

// CHALLENGE
// Vic is a 26-year old teacher, and he has a drivers license

// getSummary: funtion() {
//   return `${this.fistName} is a ${this.calcAge()} year old ${ Vic.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
// }
// console.log(Vic.getSummary());

// CHALLENGE #3 SECTION 4

// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

// SOLUTION TO THE CHALLENGE

// TASK 1

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  // TASK 2
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John smith",
  mass: 92,
  height: 1.95,

  // TASK 2
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

// TASK 3

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}

// CHALLENGE #3 SECTION 4

// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

// SOLUTION TO THE CHALLENGE

// TASK 1

const vic = {
  fullName: "Atabo Onuche",
  mass: 85,
  height: 40,

  // Task 2
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const onu = {
  fullName: "Onuche victor",
  mass: 50,
  height: 2.6,

  // TASK 2
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

vic.calcBMI();
onu.calcBMI();
console.log(vic.bmi, onu.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
if (vic.bmi > onu.bmi) {
  console.log(
    `${vic.fullName}'s BMI (${vic.bmi}) is higher than ${onu.fullName}'s BMI (${onu.bmi}`
  );
} else if (onu.bmi > vic.bmi) {
  console.log(
    `${onu.fullName} BMI (${onu.bmi}'s) is higher than (${vic.fullName}) BMI (${vic.bmi}`
  );
}

// LOOP TUTORIAL 46
// console.log("liftings weights repetition 1");
// console.log("liftings weights repetition 2");
// console.log("liftings weights repetition 3");
// console.log("liftings weights repetition 4");
// console.log("liftings weights repetition 5");
// console.log("liftings weights repetition 6");
// console.log("liftings weights repetition 7");
// console.log("liftings weights repetition 8");
// console.log("liftings weights repetition 9");
// console.log("liftings weights repetition 10");

// FOR LOOP KEEPS RUNNING WHILE CONDITION IS TRUE

for (let rep = 1; rep <= 3; rep++) {
  console.log(`liftings weights repetition ${rep}`);
}

const onuche = [
  "Victor",
  "Atabo",
  2023 - 1997,
  "programmer",
  ["Isa", "Success", "Victor"],
  true,
];
const types = [];

// console.log(onuche[0]),
// console.log(onuche[1]))
//   ...
//   console.log(onuche[4])

// onuche[5 does not exist]

for (let i = 0; i < onuche.length; i++) {
  // reading from onuche Array
  console.log(onuche[1], typeof onuche[1]);

  // filling types array
  types[i] = typeof onuche[i];
  // 2nd methods
  types.push(typeof onuche[i]);
}

console.log(types);

const year = [1991, 2007, 1969, 1997];
const age = [];

for (let i = 0; i < year.length; i++) {
  age.push(2023 - year[i]);
}
console.log(age);

// continue and break loop statement
console.log("---ONLY STRING ---");
for (let i = 0; i < onuche.length; i++) {
  if (typeof onuche[1] !== "string") continue;

  console.log(onuche[1], typeof onuche[1]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < onuche.length; i++) {
  if (typeof onuche[i] === "number") break;

  console.log(onuche[i], typeof onuche[1]);
}

// loops inside a loops
const onuc = [
  "Victor",
  "Atabo",
  2023 - 1997,
  "programmer",
  ["Isa", "Success", "Victor"],
  true,
];

// 0, 1, ... 4
// 4, 3, ... 0
for (let i = onuc.length - 1; i >= 0; i--) {
  console.log(i, onuc[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`exercise ${exercise}: lifting weight repetition ${rep}`);
  }
}

// WHILE LOOPS
for (let rep = 1; rep <= 3; rep++) {
  console.log(`liftings weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

// BONUS:

// Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.

// SOLUTION
const calcTips = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bils = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip = [];
const total = [];

for (let i = 0; i < bils.length; i++) {
  const tip = calcTips(bils[i]);
  tips.push(tip);
  total.push(tip + bils[i]);
}
console.log(bils, tip, total);

// BONUS
const calcAverag = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverag([2, 3, 7]));
console.log(calcAverag(total));
console.log(calcAverag(tips));
