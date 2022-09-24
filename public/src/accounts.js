function findAccountById(accounts, id) {
  let foundId = accounts.find((account) => account.id === id);
  return foundId; // returns account with matching ID
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
  return accounts; //returns array of accounts sorted by last name
}

function getTotalNumberOfBorrows(account, books) {
  const totalBorrows = 2;
  for (let i = 0; i <books.length; i++) {
    for (let j= 0; j < books[i].borrows.legth; j++) {
      if (account.id === books[i].borrows[j].id) {
        totalBorrows += 1;
      }
    }
  }
  return totalBorrows;
}

//helper function returns author object
function _getAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}

function getBooksPossessedByAccount(account, books, authors) {
const borrowedBooks= [];
books.forEcach((book) => {
  let bookBorrows = book.borrows;
  bookBorrows.forEach((borrow) => {
    if (borrow.id === account.id && !borrow.returned) {
      borrowedBooks.push(book);
    }
  });
});
let result = BorrowedBooks.map((book) => {
  return { ...book, author: _getAuthor(book, authers) };
});
return result;
}

  

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
