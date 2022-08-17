let num = "";
let num1 = "";
let num2 = "";
let operation = "";
let destHolder ;
destHolderChange("num1");
function destHolderChange(dest) {
  destHolder = dest;
  if (destHolder == "num1") {
    document.getElementById("num1").style.border = "1px solid red";
    document.getElementById("num2").style.border = "1px solid black";
  } else {
    document.getElementById("num1").style.border = "1px solid black";
    document.getElementById("num2").style.border = "1px solid red";
  }
}
function pn1() {
  num += "1";
  document.getElementById(destHolder).innerText = num;
}
function pn2() {
  num += "2";
  document.getElementById(destHolder).innerText = num;
}
function pn3() {
  num += "3";
  document.getElementById(destHolder).innerText = num;
}
function pn4() {
  num += "4";
  document.getElementById(destHolder).innerText = num;
}
function pn5() {
  num += "5";
  document.getElementById(destHolder).innerText = num;
}
function pn6() {
  num += "6";
  document.getElementById(destHolder).innerText = num;
}
function pn7() {
  num += "7";
  document.getElementById(destHolder).innerText = num;
}
function pn8() {
  num += "8";
  document.getElementById(destHolder).innerText = num;
}
function pn9() {
  num += "9";
  document.getElementById(destHolder).innerText = num;
}

document.getElementById("plus").addEventListener("click", plusClickHAndler);
document.getElementById("minus").addEventListener("click", minusClickHandler);
document.getElementById("divide").addEventListener("click", divideClickHandler);
document
  .getElementById("multiply")
  .addEventListener("click", multiplyClickHandler);

function plusClickHAndler() {
  document.getElementById("operation").innerText = "+";
  operation = "+";
  destHolderChange("num2");
  num = num2;
}
function minusClickHandler() {
  document.getElementById("operation").innerText = "-";
  operation = "-";
  destHolderChange("num2");
  num = num2;
}
function divideClickHandler() {
  document.getElementById("operation").innerText = "/";
  operation = "/";
  destHolderChange("num2");
  num = num2;
}
function multiplyClickHandler() {
  document.getElementById("operation").innerText = "*";
  operation = "*";
  destHolderChange("num2");
  num = num2;
}

document.getElementById("n1").addEventListener("click", pn1);
document.getElementById("n2").addEventListener("click", pn2);
document.getElementById("n3").addEventListener("click", pn3);
document.getElementById("n4").addEventListener("click", pn4);
document.getElementById("n5").addEventListener("click", pn5);
document.getElementById("n6").addEventListener("click", pn6);
document.getElementById("n7").addEventListener("click", pn7);
document.getElementById("n8").addEventListener("click", pn8);
document.getElementById("n9").addEventListener("click", pn9);

document.getElementById("equal").addEventListener("click", equalClickHandler);

function equalClickHandler() {
  num1 = document.getElementById("num1").innerText;
  num2 = document.getElementById("num2").innerText;
  let result = calculate(parseInt(num1), parseInt(num2), operation);
  document.getElementById("result").innerText = result;
  destHolderChange("num1");
  num = num1;
}

function calculate(firstNumber, secondNumber, selectedOperation) {
  switch (selectedOperation) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "/":
      return firstNumber / secondNumber;
    case "*":
      return firstNumber * secondNumber;

    default:
      break;
  }
}
function num1ClickHandler() {
  destHolderChange("num1");
  num = num1;
}
function num2ClickHandler() {
  destHolderChange("num2");
  num = num2;
}
document.getElementById("num1").addEventListener("click", num1ClickHandler);
document.getElementById("num2").addEventListener("click", num2ClickHandler);

function clearClickHandler() {
  num1 = "";
  num2 = "";
  num = "";
  destHolderChange("num1");
  document.getElementById("num1").innerText = num1 + "0";
  document.getElementById("num2").innerText = num2 + "0";
  document.getElementById("result").innerText = "";
}
document.getElementById("clear").addEventListener("click", clearClickHandler);
