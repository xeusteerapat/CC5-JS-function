let myName = prompt("My name is: "),
  myWeight = +prompt("My Weight is: "),
  myHeight = +prompt("My Height is: "),
  yourName = prompt("Your name is: "),
  yourWeight = +prompt("Your Weight is: "),
  yourHeight = +prompt("Your Height is: ");

function calBMI(w, h) {
  return w / (h / 100) ** 2;
}

function printName(name, BMI) {
  alert(`${name} BMI: ${BMI}`);
}

function checkValid(w1, w2, h1, h2) {
  if (isNaN(w1) || isNaN(h1) || isNaN(w2) || isNaN(h2)) {
    alert("Your input is not valid");
    return;
  }
  return calBMI(myWeight, myHeight) > calBMI(yourWeight, yourHeight)
    ? printName(myName, calBMI(myWeight, myHeight))
    : printName(yourName, calBMI(yourWeight, yourHeight));
}

checkValid(myWeight, myHeight, yourWeight, yourHeight);
