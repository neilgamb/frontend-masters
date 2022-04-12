// primitive types
// number
// string
// boolean
// undefined
// null
// object
// symbol (new)
// bigint

// function, array — subtypes of object

// typeofs
console.log(typeof foo) // undefined but really undeclared
console.log(typeof null) // historical bug from early JS

let v = function () {}
console.log(typeof v)
// actually a subtype of object but has a unique return value of 'function'
// this also a function expression (more later)

let o = {}
console.log(typeof o)

let a = []
console.log(typeof a)

// NaN
let f = 'foo'
let something = f / 2
console.log(something)
console.log(Number.isNaN(something))
console.log(Number.isNaN(f))

// different from isNaN method of Number object.  Not as strict
console.log(isNaN(something))
console.log(isNaN(f))

// 'new' keyword

// use with:
// Object, Array, Function, Date, RegEx, Error, etc — used to instantiate a new instance of an object wrapper / representation of a value

// do NOT use with:
// String(), Number(), Boolean() — useful for type conversion

// Coercion via Object wrappers
let date = new Date(2010, 10, 10)
console.log(date)

let gpa = String(4.5)
console.log(gpa)
console.log(typeof gpa)

let stringNum = '2'
console.log(Number(stringNum))

// Coercion via string concatenation
let msg1 = 'There are '
let num = 4
let msg2 = ' students'

let msg = msg1 + num + msg2
console.log(msg)

// booleans
// Falsy — if we tried to convert into boolean, they would be FALSE
// "", 0, -0, null, NaN, false, undefined

// Truthy — if we tried to convert into boolean, they would be TRUE
// "foo", 23, {a: 1}, [1, 2], []

// implict v. explicit coercion
// implicit happens when an operator forces a coercion whereas explicit the programmer is in charge via Boolean() ie

let val1 = '3'
let val2 = 4

const isValidEx = Number(val1) < Number(val2) // Explicit
const isValidIm = val1 < val2 // Implicit, comparison operator coerces val1 into Number automatically since val2 is a number. Would not work if both were strings with alphas
console.log(isValidEx, isValidIm)

// equality
// == loose // allows coercion, OK to use when types are different
// === strict // does NOT allow coercion, will not execute as expected if types are different
