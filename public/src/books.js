function findAuthorById(authors, id) {
  return authors.find((author) => author.id ===id); // returns an array of authors with given id
}

function findBookById(books, id) {
  return books.find((book) => book.id ===id); //returns an array of books with given id
}

function partitionBooksByBorrowedStatus(books) {
  const returned = books.filter((book) => book.borrows[0].returned);
  const unreturned = books.filter((book) => !book.borrows[0].returned);
  return [unreturned, returned]; //returns two arrays of books available and books currently borrowed
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
