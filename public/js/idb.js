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

request.onerror = function (event) {
  console.log(event.target.errCode); //if error console.log
};

//function for submitting new transaction while offline
var saveTransaction = function (record) {
  const transaction = db.transaction(["new_transaction"], "readwrite"); //new transaction in database allowed to READ/WRITE

  const transactionObjectStore = transaction.objectStore("new_transaction"); //access objectStore

  transactionObjectStore.add(record);
};
