"use strict";

const game = {
  suspects: [
    {
      name: "John",
      color: "blue",
    },
    {
      name: "Ashley",
      color: "orange",
    },
  ],
};

// what is game.length?
// objects don't have length, only arrays, so most loops don't work

// console.log(0 < game.length) // any comparison operator with 'undefined' results in false

for (let i = 0; i < game.length; i++) {
  console.log(game[i]);
}

// for-in loops allow you to loop through objects

for (let suspectIndex in game.suspects) {
  let suspect = game.suspects[suspectIndex];
  if (suspect.name === "John") {
    suspect.isGulty = true;
  } else {
    suspect.isGuilty = false;
  }
}

console.log(game);

let people = [
  { name: "Neilson", color: "red" },
  { name: "Jim", color: "orange" },
];

const [red, orange] = people.map((person) => person.color);

let [{ color: firstColor }, { color: secondColor }] = people;

console.log(firstColor, secondColor);

console.log(red, orange);
