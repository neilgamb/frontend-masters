let displayValue = '0'
let total = null
let operation = null

const displayEl = document.querySelector('.display')
const CLEAR = document.querySelector('.clearBtn').innerHTML
const BACKSPACE = document.querySelector('.backspaceBtn').innerHTML
const DIVIDE = document.querySelector('.divideBtn').innerHTML
const MULTIPLY = document.querySelector('.multiplyBtn').innerHTML
const SUBTRACT = document.querySelector('.subtractBtn').innerHTML
const ADD = document.querySelector('.addBtn').innerHTML
const EQUALS = document.querySelector('.equalsBtn').innerHTML

function isNumber(value) {
  return !isNaN(value)
}

function handleButtonClick(key) {
  if (isNumber(key)) {
    handleNumberClick(key)
  } else {
    handleOperationClick(key)
  }

  updateDisplay()
}

function handleNumberClick(key) {
  if (total && operation) {
    displayValue = '0'
  }
  // console.log(`number clicked: ${key}`)
  if (displayValue === '0') {
    displayValue = key
  } else {
    displayValue += key
  }
}

function handleOperationClick(key) {
  // console.log(`operation clicked: ${key}`)
  switch (key) {
    case CLEAR:
      clear()
      break
    case BACKSPACE:
      backspace()
      break
    case DIVIDE:
    case MULTIPLY:
    case SUBTRACT:
    case ADD:
      onOperationClick(key)
      break
    case EQUALS:
      compute()
  }
}

function compute() {
  switch (operation) {
    case ADD:
      displayValue = (total + displayValue).toString()
      total = parseInt(displayValue)
      break
    case SUBTRACT:
      displayValue = (total - displayValue).toString()
      total = parseInt(displayValue)
      break
    case MULTIPLY:
      displayValue = (total * displayValue).toString()
      total = parseInt(displayValue)
      break
    case DIVIDE:
      displayValue = (total / displayValue).toString()
      total = parseInt(displayValue)
      break
  }
}

function onOperationClick(operationClicked) {
  operation = operationClicked
  total = parseInt(displayValue)
}

function clear() {
  displayValue = '0'
  total = null
  operation = null
}

function backspace() {
  displayValue = displayValue.slice(0, -1)
  if (!displayValue) {
    displayValue = 0
  }
}

function updateDisplay() {
  displayEl.innerHTML = displayValue
  console.log(displayValue, total)
}

function init() {
  document
    .querySelector('.buttons')
    .addEventListener('click', (e) => handleButtonClick(e.target.innerText))
}

init()
