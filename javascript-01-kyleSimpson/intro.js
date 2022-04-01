// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName) {
  if (!bookName.includes('Great')) {
    favoriteBooks.push(bookName)
  }
}

// TODO: define printFavoriteBooks() function
function printFavoriteBooks() {
  console.log(`Favorite books: ${favoriteBooks.length}`)
  // for (let i in favoriteBooks) {
  //   console.log(favoriteBooks[i])
  // }

  for (let bookName of favoriteBooks) {
    console.log(bookName)
  }

  // while (favoriteBooks.length > 0) {
  //   console.log(favoriteBooks)
  //   let book = favoriteBooks.pop()
  //   console.log(book)
  // }
}

var favoriteBooks = []

addFavoriteBook('A Song of Ice and Fire')
addFavoriteBook('The Great Gatsby')
addFavoriteBook('Crime & Punishment')
addFavoriteBook('Great Expectations')
addFavoriteBook("You Don't Know JS")

// TODO: print out favorite books
// console.log(favoriteBooks)
printFavoriteBooks()
