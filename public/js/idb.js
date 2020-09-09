// Making the Database
let db;

const request = indexedDB.open("w19c-budget-tracker", 1); //connect and set version to 1

request.onupgradeneeded = function (event) {
  const db = event.target.result; // update db variable

  db.createObjectStore("new_transaction", { autoIncrement: true });
};

request.onsuccess = function (event) {
  // if successfully created with objectstore save reference to db
  db = event.target.result;
  //check if online or offline to uploadTransactions() to push local db
  if (navigator.onLine) {
    uploadTransaction();
  }
};
