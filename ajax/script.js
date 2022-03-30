const RANDOM_DOG = 'https://dog.ceo/api/breeds/image/random'
const BREEDS = 'https://dog.ceo/api/breeds/list/all'

const breedsArr = []
let selectedBreed = null

function handleChangeBreed(breed) {
  selectedBreed = breed.value
}

async function getBreeds() {
  try {
    const response = await fetch(BREEDS)
    const json = await response.json()
    for (breed in json.message) {
      breedsArr.push(breed)
    }
    const breedSelector = document.querySelector('.breedSelector')
    breedsArr.forEach((breed) => {
      const breedOption = document.createElement('option')
      breedOption.value = breed
      breedOption.innerHTML = breed.toUpperCase()
      breedSelector.appendChild(breedOption)
    })
    selectedBreed = breedsArr[0]
  } catch (error) {
    console.log(error)
  }
}

async function getRandomDogByBreed() {
  const RANDOM_DOG_BY_BREED = `https://dog.ceo/api/breed/${selectedBreed}/images/random`
  try {
    const response = await fetch(RANDOM_DOG_BY_BREED)
    const json = await response.json()
    const img = document.createElement('img')
    img.src = json.message
    document.querySelector('.dogs').appendChild(img)
  } catch (error) {
    console.log(error)
  }
}

async function getRandomDog() {
  try {
    const response = await fetch(RANDOM_DOG)
    const json = await response.json()
    const img = document.createElement('img')
    img.src = json.message
    document.querySelector('.dogs').appendChild(img)
  } catch (error) {
    console.log(error)
  }
}

getBreeds()

// AJAX = asynchronous javascript + xml
// API = application program interface
