let max = -Infinity;
let a;

while (a !== null) {
  a = parseInt(prompt("Enter number"));
  if (max < a) {
    max = a;
    console.log(max);
    console.log(a);
  } else if (a === null) break;
}

alert(max);
