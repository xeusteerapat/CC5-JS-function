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
  } else if (!a) break;
}

alert(`Max num is ${max} and secondMax is ${secondMax}`);
