"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movement: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Isa Muhamad",
  movement: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Onuche Victor Atabo",
  movement: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movement: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
          <div class="movements__type 
          movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}£</div>
        </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// TUTORIAL #151 (COMPUTING USERNAMES)

const calcDisplayBalance = function (movement) {
  const balance = movement.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}£`;
};

// TUTORIAL #155  (THE IN, OUT AND THE SORT)
const calcDisplaySummary = function (movement) {
  const incomes = movement
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}£`;

  const out = movement
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}£`;

  const interest = movement
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}£`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("");
  });
};
createUsernames(accounts);

// TUTORIAL #158 (IMPLIMENTING THE LOGIN FUNCTIONALITY)

// EVENT HANDLER

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // PREVENT FORM FROM SUBMITTING
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // DISPLAY UI AND MESSAGE

    labelWelcome.textContent = `welcome back  ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // CLEAR THE INPUT FIELD
    inputLoginUsername.value = inputLoginPin.value = " ";

    // DISPLAY MOVEMENT
    displayMovements(currentAccount.movement);

    // DISLAY BALANCE
    calcDisplayBalance(currentAccount.movement);

    // DISPLAY SUMMARY
    calcDisplaySummary(currentAccount.movement);
  }
});

// CODING CHALLENGE #154
/*
Coding Challenge #1

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

Hints: Use tools from all lectures in this section so far �
*/

// #SOLUTION
// TASK #1
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrectted = dogsJulia.slice();
  dogsJuliaCorrectted.splice(0, 1);
  dogsJuliaCorrectted.splice(-2);

  // TASK #2
  const dogs = dogsJuliaCorrectted.concat(dogsKate);
  console.log(dogs);

  // TASK #3
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// // checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// SIMPLE ARRAYs METHOD
// 1. TUTORIAL $142 (SIMPLE ARRAY METHOD)

let arr = ["a", "b", "c", "d", "e"];

// SLICE METHOD
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// 2. SPLICE METHOD
console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// 3. REVERSE METHOD

arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

//  EXAMPLE #2 REVERSE ARRAY METHOD
// the first arrays element becoming the last and the last arrays element becoming the the first
// vic = ["1", "2", "3", "4", "5", "6"];
const vic = ["3", "6", "4", "1", "2", "5"];
console.log(vic.reverse());
console.log(vic);

// 4. CONCAT ARRAYS METHOD
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// 5. JOIN ARRAY METHOD
console.log(letters.join("-"));

// TUTORIAL #143 ADD (ARRAY METHOD)
const arr3 = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// TO GET THE LAST ELEMENT OF AN ARRAYS 🎉🌂
// two traditional ways of solving the problom of getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log("victor".at(0));
console.log("victor".at(-1));

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// TUTORIAL #145 FOREEACH ARRY METHOD WITH MAPS AND SET

// FOR MAP
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// WITH SET
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// TUTORIAL 148

// const eurToUsd = 1.1;

//  FUNCTION EXPRESSION
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// REPLACING/ REPEAT THE ABOVE WITH ARROW FUNCTION

// const movement = [];
// const movementUSD = movement.map(mov => mov * eurToUsd);

// console.log(movement);
// console.log(movementUSD);

const movementUSDfor = [];
for (const mov of movement) movementUSDfor.push((mov = eurToUsd));
console.log(movementUSDfor);

const movementDescriptions = movement.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);
console.log(movementDescriptions);

// TUTORIAL #152 (THE FILTER METHOD)

const deposits = movement.filter(function (mov) {
  return mov > 0;
});
console.log(movement);
console.log(deposits);

const depositsFor = [];
for (const mov of movement) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movement.filter(mov => mov < 0);
console.log(withdrawals);

// TUTORIAL #153 (THE REDUCE METHOD)
// reduce method is used to boilled down all the element in an arrays

console.log(movement);

// ACCUMULATOR IS LIKE SNOWBALL
const balance = movement.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
let balance2 = 0;
for (const mov of movement) balance2 += mov;
console.log(balance2);

// MAXIMUM VALUE OF THE MOVEMENT ARRAYS

const max = movement.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movement[0]);
console.log(max);

// CHALLENGE 2
/*
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)
4. Run the function for both test datasets

Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);

  // TASK #2
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // TASK #3
  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // HOW TO CALCULATE AN AVERAGE
  // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

// TUTORIAL #155 (THE MAGIC OF CHAINING METHOD)

const eurToUsd = 1.1;
console.log(movement);

// PIPELINE
const totalDepositsUSD = movement
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })

  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

// CHALLENGE #3

/*

Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time 
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

*/

// SOLUTION

const calcAverageHumanAge2 = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  return average;
};
// TASK CHALLENGE #3
const calcAverageHumanAge3 = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg3 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const avg4 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg3, avg4);

// TUTORIAL #157

const firstWithdrawal = movement.find(mov => mov < 0);
console.log(movement);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === "jesica Davis");
console.log(account);
