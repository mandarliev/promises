//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise resolved");
  }, 6000);
});

let secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second promise resolved");
  }, 3000);
});

//Console log before calling the promise
console.log("Before calling promise");

//Call the promise and wait for it to be resolved and then print a message.
firstPromise.then((successMessage) => {
  console.log("From Callback " + successMessage);
});
secondPromise.then((successMessage) => {
  console.log("From Callback " + successMessage);
});

//Console log after calling the promise
console.log("After calling promise");
