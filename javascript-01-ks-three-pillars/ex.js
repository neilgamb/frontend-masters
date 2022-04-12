class Bookshelf {
  constructor() {
    this.favoriteBooks = []
  }

  printFavoriteBooks() {
    console.log(`Favorite Books: ${this.favoriteBooks.length}`)
    this.favoriteBooks.forEach((book) => console.log(book))
  }

  addFavoriteBook(book) {
    if (!book.includes('Great')) {
      this.favoriteBooks.push(String(book))
    }
  }
}

function loadBooks(bookShelf) {
  let readResponse = function (books) {
    books.forEach((book) => {
      bookShelf.addFavoriteBook(book)
    })
    bookShelf.printFavoriteBooks()
  }
  fakeAjax(BOOK_API, readResponse)
}

var BOOK_API = 'https://some.url/api'

let bookShelf = new Bookshelf()
loadBooks(bookShelf)

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      'A Song of Ice and Fire',
      'The Great Gatsby',
      'Crime & Punishment',
      'Great Expectations',
      "You Don't Know JS",
    ])
  }, 500)
}
