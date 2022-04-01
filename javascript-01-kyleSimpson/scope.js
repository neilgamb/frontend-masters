function newSection(title) {
  console.log('')
  console.log(`------------ ${title} ------------`)
}

newSection('Intro')

// scope: where to look for things? where in memory are variables stored?
var teacher = 'kyle'

function otherClass() {
  // 'use strict'
  teacher = 'suzy' // rules of scope will find the variable in the outer scope even though 'teacher' is undeclared in lexical scope
  topic = 'react' // when in 'strict' mode, this will throw a ReferenceError because it is undeclared in the global scope
  console.log('welcome')
}

otherClass()
console.log(teacher)
console.log(topic)

// ---------------------------------------------------
newSection('Function Expressions')

// function expressions (first-class functions)
// foo()
// handler()
// bar()

// normal function declaration
function foo() {
  console.log('foo')
}

// anonymous function expression // same as let foo = () => {}
let handler = function () {
  console.log('handled')
}

// named function expression
let bar = function foo() {
  console.log('named bar')
}

foo()
handler()
bar()

// key differences:
// - fn declarations are hoisted, or stored in memory, before any code is executed
// - fn expressions are loaded only when the program reaches that line of code
// - if you try to invoke a function expression prior to the assignment, it wil throw an error
// - fn expressions are useful when you need an fn argument for another fn, for closures, and for IIFE

// named v anonymous
let people = ['neilson', 'gamble']
var ids = people.map((person) => person.id)
// the above statement includes an arrow function, which is always an anonymous fn expression

//same as writing
var ids = people.map(function getId(person) {
  return person.id
})

// which is more readable?

// ---------------------------------------------------
newSection('IIFE')

// IIFE — aka "iffy" = immediately invoked function expression

var apples = 0
// anonymous IIFE via arrow fn
;(() => {
  console.log('first')
  var apples = 1
})()

apples++

console.log(apples)

// named IIFE
;(function iife() {
  console.log('second')
})()

// IIFEs can take params (with defaults)
// named IIFEs allow for recursion
;(function incrementToFive() {
  console.log(num)
  num++
  return num <= 5 ? incrementToFive(num) : console.log('finished')
})((num = 1))

// wrapping perens make it a fn expression rather than a declaration
// allows you to create a new scope and immediately invoke it without polluting the surrounding or global scope
// used often with js libraries that need to be executed in isolation from the main application
// IIFEs not really useful anymore based on what I can tell
// OK! becomes clear to me now that global scope pollution is more common when loading or stacking multiple .js files rather than loading a single
// script with ES6 modules

// console.log(iife) // Reference error

// ---------------------------------------------------
newSection('BLOCK SCOPING + "let"')

// Block Scoping with 'let'
var fruit = 'apple'

{
  // block creates new 'lexical' scope
  let fruit = 'banana' // does not change global scope
  // var fruit = 'banana' // would change the global scope
  console.log(fruit)
}

console.log(fruit)

for (var i = 0; i < 5; i++) {
  // console.log(i)
}

console.log(i)

for (let j = 0; j < 5; j++) {
  // console.log(i)
}

// console.log(j) // Reference Error, because j is blocked within for loop scope

// ---------------------------------------------------
newSection('CLOSURE')

// closure is when a function 'remembers' the variables outside of its lexical scope,
// even when you pass that function elsewhere

function askDelayedQuestion(question) {
  setTimeout(function waitASecond() {
    console.log(question)
  }, 1000)
}

askDelayedQuestion('What is a closure?')

// when ask is invoked, it runs the setTimeout, whose callback has outer lexical scope access to the
// variable 'question'.

// however, by the time the callback is invoked, the ask function has already been fully executed,
// with all of its lexical scope variables (including question) dumped from memory.

// so how is the callback still able to access the question variable a second later?

// because of CLOSURE... 'waitASecond()' function has closure over the question variable

function ask(question) {
  return function anotherQuestion() {
    console.log(question)
  }
}

const myQuestion = ask('what is a closure?')

myQuestion()
