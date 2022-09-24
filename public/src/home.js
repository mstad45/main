const getTotalBooksCount = books => books.length; //returns the number of books in the array

function getTotalAccountsCount(accounts) {
   const list = accounts.reduce((account) => {
    account = accounts.map((account) => account);
    return accounts.length;
    }, 0);
    return list; // returns the number of accounts in the array
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = 0;
    books.forEach(book => {
    if (!book.borrows[0].returned) borrowedBooks++;
  });
  return borrowedBooks; // returns the number of borrowed books in the array
}

function getMostCommonGenres(books) {
  const genresOfBooks = books.map((book) => book.genre);
  const fiveCommonGenres = [];
  genresOfBooks.map((genre) => {
    const location = fiveCommonGenres.findIndex((element) => element.name === genre);
    if (location >= 0){
      fiveCommonGenres[location].count = fiveCommonGenres[location].count + 1;
    } else {
      fiveCommonGenres.push({ name: genre, count: 1 });
    }
  });
  fiveCommonGenres.sort((a, b) => b.count - a.count);
  if (fiveCommonGenres.length > 5) {
    return fiveCommonGenres.slice(0, 5);
  }
  return fiveCommonGenres;
}

function getMostPopularBooks(books) {
  return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
 authors.forEach((author) => {
  let newAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    newAuthor.count += book.borrows.length;
   }
  });
  result.push(newAuthor);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
