let myName = prompt("My name is: "),
  myWeight = +prompt("My Weight is: "),
  myHeight = +prompt("My Height is: "),
  yourName = prompt("Your name is: "),
  yourWeight = +prompt("Your Weight is: "),
  yourHeight = +prompt("My Height is: ");

function calBMI(w, h) {
  return h / w ** 2;
}

function checkValid(w1, w2, h1, h2) {
  if (isNaN(w1) || isNaN(h1) || isNaN(w2) || isNaN(h2)) {
    alert("Your input is not valid");
    return;
  }
  return calBMI(myWeight, myHeight) > calBMI(yourWeight, yourHeight)
    ? alert(`${myName}'s BMI is more than ${yourName}`)
    : alert(`${yourName}'s BMI is more than ${myName}`);
}

checkValid(myWeight, myHeight, yourWeight, yourHeight);
