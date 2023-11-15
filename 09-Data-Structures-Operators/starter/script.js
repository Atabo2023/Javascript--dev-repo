"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekday = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHour = {
  [weekday[3]]: {
    open: 12,
    close: 22,
  },
  [weekday[4]]: {
    open: 11,
    close: 23,
  },
  [weekday[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // es6 enhance object literals
  openingHour,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderpasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderpizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    // console, log(otherIngredients);
  },
};

//  TUTORIAL 118 (MAPS);
const rest = new Map();
rest.set("name", "Classoco Italium");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon", "porugal"));

rest
  .set("categories", ["Italianz", "pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open: D")
  .set(false, "We are closed :(')");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
const arrr = [1, 2];
rest.set(arrr, "Test");

rest.set(document.querySelector("h1"), "Heading");

console.log(rest);
console.log(rest.size);

console.log(rest.get(arrr));

// TUTORIAL MAPS (ILITERATE)

const question = new Map([
  ["question", "what is the best programming languege in the world?"],
  [1, "C"],
  [2, "java"],
  [3, "javaScript"],
  ["correct", 3],
  [true, "correct"],
  [false, "Try again!"],
]);

console.log(question);

// convert object to map

console.log(Object.entries(openingHour));
const hoursMap = new Map(Object.entries(openingHour));
console.log(hoursMap);

// Quiz APP
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
// console.log([...question.value()]);

// TUTORIAL #113 (OPTIONAL CHAINING)
for (const [key, value] of question)
  if (restaurant.openingHour && restaurant.openingHour.mon)
    console.log(restaurant.openingHour.mon.open);

//  WITH OPTIONAL CHAINING
console.log(restaurant.openingHour.mon?.open);
console.log(restaurant.openingHour?.mon?.open);

// example

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  restaurant.openingHour[day]?.open ?? "closed";
  console.log(`on ${day}, we open at ${open}`);
}

// OPTIONAL CHAINING ON MEYHOD (EXAMPLE)
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.ordervictor?.(0, 1) ?? "Method does not exist");

// OPTIONAL CHAINING ON ARRAYS
const users = [{ hello: "victor", email: "hellovictor.at" }];
console.log(users[0]?.name ?? "User array empty");

///// WITHOUT OPTIONAL CHAINING OPERATOR
if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");

// LOOPING OBJECT

// Property Name
const properties = Object.keys(openingHour);
console.log(properties);

let openStr = `we are open on ${properties.length} days:`;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// property VALUE
const values = Object.values(openingHour);
console.log(values);

// Entire Object
const entries = Object.entries(openingHour);
// console.log(entries);

// [key,  value]
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}

// logical assignemnt operator
const rest1 = {
  name: "capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La piazza",
  ownr: "Giovanni Rossi",
};
// OR ASSIGNMENT OPERATOR
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

// nullish assignment operator

rest1.numGuests ??= 10;
rest1.numGuests ??= 10;

// rest2.numGuests = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);

// NULLISH OPERATOR tutorial 107
// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// NULLISH VALUE ARE: NULL AND UNDEFINED (NOT 0 OR "")
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

// properties of logical operator
// USE ANY DATA TYPE, RETURN ANY DATA TYPE AND SHORTCIRCUTING
console.log(3 || "Victor");
console.log("" || "vitor");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("--- AND ---");
console.log(0 && "victor");
console.log(7 && "victor");

console.log("Hello" && 23 & null && "victor");

if (restaurant.orderpizza);
// 1) destructuring

// SPREAD OPEARATOR, BECAUSE ON THE RIGHT SIDE OF =

const sp = [1, 2, ...[3, 4]];

// REST BECAUSE ON THE LEFT SIDE OF = OPERATOR

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//  2) function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[1];
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 5, 4);

const j = [25, 3, 7];
add(...j);

restaurant.orderpizza("mushrooms", "onion", "olive", "spinach");
restaurant.orderpizza("mushroomss");

restaurant.orderDelivery({
  time: "23: 30",
  address: "via del sale, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "via del sole, 21",
  starterIndex: 1,
});

// #OBJECT DESTRUCTURING  TUTORIAL 104
const { name, openingHours, caterigories } = restaurant;
console.log(name, openingHours, caterigories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurant, hours, tags);

// default values
// const { menu= [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// NESTED OBJECT
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// #SPREAD OPERATOR
const ar = [7, 8, 9];
const badNewAr = [1, 2, ar[0], ar[1], ar[2]];
console.log(badNewAr);

const newAr = [1, 2, ...ar];
console.log(newAr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// TWO IMPORTANT USE OF SPREAD OPERATOR

// 1 TO CREATE SHALLOW COPY OF AND ARRAY
const mainMenuCopy = [...restaurant.mainMenu];

// 2 TO MERGE TWO OR MORE ARRAYS TOGETHE

const menua = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menua);

// ITERABLE IN JAVASCRIPT
// iterable are:  arrays, string, maps, sets. not objects

const str = "jonas";
const letters = [...str, "", "s."];
console.log(letters);
console.log(...str);

// call of ingredient
// real-world examples
// const ingredients = [
//   prompt("let's make pasta! Ingredient 1?"),
//   prompt("let's make pasta! ingredient 2?"),
//   prompt("let's make pasta! ingredient 3?"),
// ];

// // console.log(ingredients);

// restaurant.orderpasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderpasta(...ingredients);

// objective

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "guiseppe" };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Rona";
console.log(restaurantCopy.name);
console.log(restaurant.name);

// ARRAY DESTRUCTURING TUTORIAL 103
const arr = [2, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// NOW DESTRUCTURING
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// destructuring methods
[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a fnction
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, (4)[(5, 6)]];
// const [i, ,[j, k] = nested;

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// default value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// TUTORIAL 109

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);

////////////////////////////////////////////////////////////////////////
// 1) CHALLEGE  #1

/* Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored */

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// SOLUTION;

//  TASK #1
// Create one player array for each team (variables 'players1' and
// 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);

//  TASK #2
// The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players

const [gk, fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//  TASK #3

// Create an array 'allPlayers' containing all players of both teams (22
//   players)

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//  TASK #4

// During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, "Thiago", "Coutinho", "periscic"];
console.log(players1Final);

//  TASK #5

// Based on the game.odds object, create one variable for each odd (called
//   'team1', 'draw' and 'team2')

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//  TASK #6

// Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// printGoals("Davies", "Mulller");

printGoals(...game.score);

//  TASK #7

// The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 1 is more likely to win");

// CODING CHALLENGE #2

/* Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �

4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 
 */

//  SOLUTION
// TASK 1

// 1.Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// TASK 2

// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// TASK 3

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory $ {game [team]}`;
  console.log(`odd of ${teamStr} ${odd} `);
}

// TUTORIAL 116 (SETS)

// a set is the collection of unique value

const ordersSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "risotto",
  "pasta",
  "pizza",
]);
console.log(ordersSet);

console.log(new Set("victor"));

console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
// const staffUnique = [...new set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set[("waiter", "chef", "waiter", "manager", "chef", "waiter")]()
// ).size;

// console.log(new Set("victoronucheatabo"));

// TUTORIAL 117 (Map)

const airline = "ABUJA Air Nigeria";
const plane = "A300";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf("")));
console.log(airline.slice(airline.lastIndexOf("") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat");
};

checkMiddleSeat("11B");
checkMiddleSeat("23c");
checkMiddleSeat("3E");

console.log(new String("victor"));
console.log(typeof new String("victor"));
console.log(typeof new String("Victor").slice);

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "vIcToR"; // Victor

const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// COMPARISM EMAIL
const email = "hello@victor.io";
const loginEmail = " Hello@Victor.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing part of string
const priceGB = "288,50N";
const priceUS = priceGB.replace("N", "$").replace(",", ".");
console.log(priceUS);

const announcement = "All passenger come to barding door 23. boarding door 23!";
console.log(announcement.replaceAll("door", "gate"));

// console.log(announcement.replace(/door/g, "gate"));
// Booleans
const plan = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("boeing"));
console.log(plane.startsWith("air"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("part of the NEW Airbus family");
}

// practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("Knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage(" I have a laptop, some Foood and a pocket knife");
checkBaggage("socks and camera");
checkBaggage("Got some snacks and a gun for protection");

// TUTORIAL 123
// split and join method
console.log("a+very+nice+string".split("+"));
console.log("victor onuche".split(" "));

const [firstName, lastName] = "victor onuche".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }

  // ANOTHER WAY OF CAPITALIZE NAME
  // namesUpper.push(n.replace(n[0], n[0].toupperCase()));

  console.log(namesUpper.join(" "));
};
capitalizeName("jessica ann smith davis");
capitalizeName("victor onuche");

// padding a string.. just as in credit car that we usually see .... before number

const message = "Go to gate 23!";
console.log(message.padStart(20, "+")); // .padEnd(30, "+")

console.log("jonas".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "+");
};

console.log(maskCreditCard(28933397));
console.log(maskCreditCard(2333977393888649));
console.log(maskCreditCard("33443434889884774899"));

// repeat method.. that's,  repeating the same string the same time.
const message2 = "bad weather... All Departues Delayed...";
console.log(message2.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${"3x".repeat(n)}`);
};

planeInLine(5);
planeInLine(3);
planeInLine(12);
