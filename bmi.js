let myName = prompt("My name is: "),
  myBMI = +prompt("My BMI is: "),
  yourName = prompt("Your name is: "),
  yourBMI = +prompt("Your BMI is: ");

function showBMI(firstBMI, secondBMI) {
  if (isNaN(firstBMI) || isNaN(secondBMI)) {
    alert("Your input is not valid");
    return;
  }
  return myBMI > yourBMI
    ? alert(`${myName}'s BMI is more than ${yourName}`)
    : alert(`${yourName}'s BMI is more than ${myName}`);
}

showBMI(myBMI, yourBMI);
