let max = null;
let a;

while (a !== null) {
  a = parseInt(prompt("Enter number"));
  if (max < a) {
    max = a;
  } else if (!a) break;
}

alert(max);
