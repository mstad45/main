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

function getBooksPossessedByAccount(account, books, authors) {
  const inPossesion = [];
  books.map((book) => {
    book.borrows.map((borrow) => {
      authors.map((author) => {
        if (author.id === book.authorId) book["author"] = author;
      });
      if (borrow.returned === false && borrow.id === account.id) {
        inPossesion.push(book);
      }
    });
  });
  return inPossesion;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
