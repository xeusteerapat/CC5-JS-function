let max = null;
let min = null;
let a;

while (a !== null) {
  a = parseInt(prompt("Enter number"));
  if (a > max) {
    min = max;
    max = a;
  } else if (a > min && a !== max) {
    min = a;
  } else if (!a) break;
}

alert(`Max num is ${max} and min is ${min}`);
