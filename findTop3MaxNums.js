let max = -Infinity;
let secondMax = -Infinity;
let thirdMax = -Infinity;
let a;

while (a !== null) {
  a = parseInt(prompt("Enter number"));
  if (a >= max) {
    thirdMax = secondMax;
    secondMax = max;
    max = a;
  } else if (a > secondMax && a !== max && a > thirdMax) {
    thirdMax = secondMax;
    secondMax = a;
  } else if (a > thirdMax && a < secondMax) {
    thirdMax = a;
  } else if (!a) break;
  console.log("Input number: ", a);
  console.log("1st number: ", max);
  console.log("2nd maximum number: ", secondMax);
  console.log("3rd number: ", thirdMax);
}

alert(
  `First max is ${max}.\nSecond max is ${secondMax}.\nThird max is ${thirdMax}`
);
