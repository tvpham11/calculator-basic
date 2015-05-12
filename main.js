var numOne = document.getElementById("num_one");
var numTwo = document.getElementById("num_two");
var submit = document.getElementById("calculateBtn");
// var answer = document.getElementById("answer");

function add() {
  var numberOne = Number(numOne.value);
  var numberTwo = Number(numTwo.value);
  var result = numberOne + numberTwo;
  answer.innerHTML = result.toString();
}


submit.addEventListener("click", add);
