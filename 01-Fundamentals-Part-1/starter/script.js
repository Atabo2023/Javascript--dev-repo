/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("victor");
console.log(23);

let firstName = "victor";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let victor_Atabo = "VA";
let $function = 27;

let person = "victor";
let PI = 3.1415;

let myFirstJob = "programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob); */

/*
true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javasriptIsFun);
console.log(typeof 23);
console.log(typeof "victor");

javascriptIsFun = "YES!";
console.log(typeof javasriptIsFun);

let year;
console.log(year);
cosole.log(typeof year);

year = 1991;
cosole.log(typeof year);

console.log(typeof null);
*/

/*let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;


const job;
var job = "programmer";
job = "teacher"

lastName = "schmedtmann";
// console .log(lastName); */

// math operators
// const now = 2037;
// const ageVictor = now - 1997;
// const ageSarah = now - 2018;
// console.log(ageVictor, ageSarah);

// console.log(ageVictor * 2, ageVictor / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "victor";
// const lastName = "Atabo";
// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10; // x = x +10= 25
// x += 4; // x = x  * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// comparison operators.
/*console.log(ageVictor > ageSalah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSalah >= 18;

console.log(now - 1991 > now - 2018);
*/
// const now = 2037;
// const agaJonas = now - 1991;
// const ageSalah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; //  x =y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas = ageSarah / 2);
// console.log(ageJonas, ageSalah, averageAge);

/* coding challenge 1*/
// mark and john are trying to compare their BMI (body mass index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters)
// your task is to write some code to help them;

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 75;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark / heightMark ** 2;
// const BMIjohn = massjohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIjohn markHigherBMI);

////////////////////////////////////////////////
// string and template literal
/*const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;

const jonas = "I'm " + firstName = ', a ' + (year - birthYear) + 'years old' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew)

console.log (`just a regular string...`);

console.log(`string with \n\
multiple \n\
lines`);

console.log (`string
multiple
lines`)
*/

///////////////////////////////
// takig decision if/else statement

/*const age = 15;

if (age >= 18) {
  console.log("sarah can start driving licenze👍");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is to young. wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 200) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/*const markMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
*/

/*
const masrkMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`
} 
 else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`
}
*/

// TYPE CONVERSION

/*
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// TYPE COERCION
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // string '11'
n = n - 1;
console.log(n); */

// 5 FALSY VALUES: 0, '', UNDEFINED, NULL, NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log("don't spend it all;)");
} else {
  console.log("You should get a job!");
}

let height = "18";
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("height is UNDEFINED");
}
*/

/*
const age = 18;
if (age === 18) console.log("You just became an adult:D(strict)");

if (age == 18) console.log("You just became an adult:D (loose)");

const favourite = Number(prompt("what's is your fovourite number?"));
console.log(typeof favourite);

if (favourite === 23) {
  // 23 === 23
  console.log("cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool numbeer");
} else if (favourite === 9) {
  console.log("9 is also a cool numbeer");
} else {
  console.log("number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("why not 23");

*/

DriversLicense = true; // A
Goodvision = false; // B

/*
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
crossOriginIsolated.log(!hasDriversLicense);
*/

// const shouldDrive = hasDriversLicense && hasGodVision;

// if (hasDriversLicense && hasGodVision) {
//   console.log("sarah is able to drive");
// } else {
//   console.log("someone else should drive...");
// }

// const isTired = false; // c
// console.log(hasDiverslicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGodVision && !isTired) {
//   console.log("sarah is able to drive");
// } else {
//   console.log("someone else should drive...");
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scorekoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scorekoalas);

// if (scoreDolphins > scorekoalas) {
//   console.log("Dolphins win the trophy 🌹");
// } else if (scorekoalas > scoreDolphins) {
//   console.log("Koalas win the trophy 🌹");
// } else if (scoreDolphins === scoreKOalas) {
//   console.log("both win the trophy ");
// }

/*
// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scorekoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scorekoalas);

if (scoreDolphins > scorekoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🌹");
} else if (scorekoalas > scoreDolphins && scorekoalas >= 100) {
  console.log("Koalas win the trophy 🌹");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("both win the trophy");
} else {
  console.log("No one wins the trophy 😉");
}
*/

const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("Record videos");
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

// CHALLENGE REPEAt 1
// CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

//1 Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

//2 Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

//3 Log the value of BMIMark and BMIJohn to the console.

//4 BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// Task 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.92;

// // Task 2

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// // TASK 3
// console.log(BMIMark, BMIJohn);

// // TASK 4
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// const myAge = 26;

// console.log(`I am ${myAge} years old`);
// console.log ("weight: 78")
// const mark ({
// fisrtaName: "Mark",
// lastName: "Victor",
// weight: 78,
// height: 1.69
// });
// const john ({
//   firstName: "John",
//   lastName: "Atabo",
//   weight: 92,
//   height: 1.95
// })

// console.log(mark.bmi, john.bmi, mark.bmi > john.bmi)

// CROSS CHECK TASK 3
// TO CALCULATE THE AVERAGE

const scoreVictor = (96 + 108 + 89) / 3;
const scoreAtabor = (88 + 91 + 110) / 3;
console.log(scoreVictor, scoreAtabor);

if (scoreVictor > scoreAtabor) {
  console.log("Victor win the trophy");
} else if (scoreAtabor > scoreVictor) {
  console.log("Atabo win the trophy");
} else if (scoreVictor === scoreAtabor) {
  console.log("both with the trophy!");
}

// const a = 1;
// const b = 2;

// const answer = a + b;

const age = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water🕳");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

// FOR IF STATEMENT
let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like ro drink ${age >= 18 ? "wine" : "water"}`);

// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// TASK 4

const bill = 275;
const trip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `the bill was ${bill}, the tip was ${trip}, and the total value ${
    bill + trip
  }`
);

const mybill = 275;
console.log(`The bill ${mybill} is much`);

const points = 50;
if (points >= 100) {
  console.log("You have earned a free drink");
} else {
  console.log("You are not qualified for a free drink");
}

// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

// TASK 1
// Task 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log("markBMI is higher than JohnBMI");
} else {
  console.log("JohnBMI is less than markBMI");
}

// TASK 2

console.log(`Mark's BMI ${BMIMark}, is higher than John's ${BMIJohn}!`);

// type conversion
const inputYear = "1995";
console.log(inputYear);
console.log(Number(inputYear));

// type coerciom

console.log("I am" + 23 + "years old");
console.log("23" > "10");

//Operators that trigger type coercion
// + (string)
// - (number)
// * (number)
// / (number)
// > (number)

/* Topic: Truthy and falsey value*/

// Falsey values
console.log(Boolean(0));
console.log(Boolean(""));

/* Topic: Equality Operator*/
console.log("Loose equality", 18 == "18");
console.log("Strict equality", 18 === 18);

// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// TASK 1

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

// TASK 2

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
}
if (scoreKoalas > scoreDolphins) {
  console.log("koalas win the trophy");
}
if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
}

console.log(`I'm ${2023 - 1997} years old)`);
