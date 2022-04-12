const names = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];
const namesObj = {
  person1: "Mrs. Scarlet",
  person2: "Mrs. White",
};

let suspects = [];

const _ = {};

_.map = function (list, cb) {
  let result = [];
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      result.push(cb(list[i]));
    }
  } else {
    for (let key in list) {
      result.push(cb(list[key]));
    }
  }

  return result;
};

// key diff: each does not return anything... map always returns an array

// cb needs to have a return
// anonymous inline callback
const foo = _.map(names, function (name) {
  return name + "___";
});

// es6 arrow function
const addPlusSign = (name) => `${name}+`;

// use a named callback function expression
const bar = _.map(namesObj, addPlusSign);

console.log(bar);
