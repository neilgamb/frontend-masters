const names = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];
let suspects = [];

const _ = {};

_.each = function (list, cb) {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      cb(list[i], i, list);
    }
  } else {
    for (let key in list) {
      cb(list[key], key, list);
    }
  }
};

function createSuspect(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log(`My name is ${name}`);
    },
  };
}

// use to populate an array
_.each(names, (name) => {
  let suspect = createSuspect(name);
  suspects.push(suspect);
});

console.log(suspects);

function sayHey(name) {
  console.log("hey from " + name);
}

const namesObj = {
  one: "Mrs. Scarlet",
  two: "Mrs. White",
};

// use to log an array
_.each(namesObj, sayHey);
