// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const num1 = 1;
const adder = function() {
  const num2 = 2;
  return (`${num1} + ${num2}`)
};
console.log(adder());


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  
  const plus = function () {
    return count++;
  }
  return plus;
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
    increment: function () {
      return (counter = counter + 1);
    },
    decrement: function () {
      return (counter = counter -1);
    }
  };
};

console.log(counterFactory());
console.log(counterFactory());
const superCounter = counterFactory();

console.log(superCounter.increment());
console.log(superCounter.increment());
console.log(superCounter.increment());
console.log(superCounter.increment());

