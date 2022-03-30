let result = null
let operator = null
let firstValue = '0'
let secondValue = '0'
const screenEl = document.querySelector('.screen')

function isNumber(key) {
  return !isNaN(key)
}

function handleButtonClick(key) {
  if (isNumber(key)) {
    handleNumber(key)
  } else {
    handleOperator(key)
  }

  updatefirstValue()
}

function handleNumber(key) {
  if (firstValue === '0') {
    firstValue = key
  } else if (firstValue && operator) {
    secondValue = key
  } else {
    firstValue += key
  }
}

function handleOperator(key) {
  switch (key) {
    case 'CLEAR':
      firstValue = '0'
      secondValue = '0'
      operator = null
      result = null
      break
    case '←':
      firstValue = firstValue.slice(0, -1)
      if (firstValue === '') {
        firstValue = '0'
      }
      break
    case '÷':
    case 'x':
    case '-':
    case '+':
      operator = key
      break
    case '=':
      calculate()
  }
}

function calculate() {
  switch (operator) {
    case '÷':
      result = parseFloat(firstValue) / parseFloat(secondValue)
      break
    case 'x':
      result = parseFloat(firstValue) * parseFloat(secondValue)
      break
    case '-':
      result = parseFloat(firstValue) - parseFloat(secondValue)
      break
    case '+':
      result = parseFloat(firstValue) + parseFloat(secondValue)
      break
  }

  firstValue = result
}

function updatefirstValue() {
  if (result) {
    screenEl.innerText = result
  } else if (firstValue && operator) {
    screenEl.innerText = secondValue
  } else {
    screenEl.innerText = firstValue
  }
}

function init() {
  document.querySelector('.calculator').addEventListener('click', function (e) {
    handleButtonClick(e.target.innerText)
  })
}

document.addEventListener('DOMContentLoaded', init)
