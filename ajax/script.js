const DOGS_URL = 'https://dog.ceo/api/breeds/image/random'

async function getDogs() {
  try {
    const response = await fetch(DOGS_URL)
    console.log('got response')
    const json = await response.json()
    const img = document.createElement('img')
    img.src = json.message
    document.querySelector('.dogs').appendChild(img)
  } catch (error) {
    console.log(error)
  }
}

// AJAX = asynchronous javascript + xml
// API = application program interface
