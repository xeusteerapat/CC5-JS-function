let max = -Infinity;
let secondMax = -Infinity;
let a;

while (a !== null) {
  a = parseInt(prompt("Enter number"));
  if (a >= max) {
    secondMax = max;
    max = a;
  } else if (a > secondMax && a !== max) {
    secondMax = a;
  } else if (a === null) break;
  console.log("Maximum number: ", max);
  console.log("Second maximum number: ", secondMax);
  console.log("Input number: ", a);
}

alert(`Max num is ${max} and secondMax is ${secondMax}`);
