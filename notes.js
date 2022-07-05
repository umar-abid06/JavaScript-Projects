//THE VALUE OF THIS:

// Q1- Did you define the function with arrow function ?
// If yes then:
// console.log(this) on the first valid line above the arrow function. Value of 'this' in
// the arrow function will be equal to the console.log()

// example:
console.log(this);
const printThis = () => {
  console.log(this);
};
printThis();

// Q2- Did you call 'bind', 'call' or 'apply' on the function when you invoked it?
// if yes then:
// 'this' is equal to the first argument of bind call or apply

// example:
const printThis = function () {
  console.log(this);
};
printThis.call({ color: "red" });

// output: argument of call (the color object)

// Q3- Else In all other cases:
// 'this' is equal to whatever is to the left of the '.' in the method call

// example:
const colors = {
  printColors() {
    console.log(this);
  },
};
colors.printColors();

// output: the colors object
