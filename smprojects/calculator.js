const display = document.getElementById("inp-num");
let cValue = "";

// function appendNumber(value){
//     cValue+= value;
//     display.innerHTML= cValue;
//     // console.log(cValue);
// };

function newDisplay(value) {
  display.value = value;
}

function appendNumber(value) {
  cValue += value;
  newDisplay(cValue);
  // console.log(cValue);

}

function delLast() {
  cValue = cValue.slice(0, -1);
  newDisplay(cValue);
}

function performCalc() {
  try {
    cValue = eval(cValue);
    newDisplay(cValue);
    // console.log(cValue);
  } catch (e) {
    newDisplay("Error");
    cValue = "";
  }
}
function percentageC() {

  let expression = document.getElementById('inp-num').value;
    let cValue = parseFloat(expression) / 100;

  // cValue = (parseFloat(cValue) / 100).toString();
  newDisplay(cValue);
  // console.log(cValue);
}

document.querySelector(".keys").addEventListener("click", function (event) {
  const target = event.target;
  if (target.matches("button")) {
    // let value = '0';
    const value = target.textContent;

    if (target.classList.contains("clr")) {
      cValue = "";
      newDisplay("");
    } else if (target.classList.contains("del")) {
      delLast();
    } else if (target.classList.contains("perc")) {
      percentageC();
    } else if (target.classList.contains("orange")) {
      if (value === "=") {
        performCalc();
        // console.log(cValue);
      } else {
        appendNumber(value);
      }
    } else {
      appendNumber(value);
    }
  }
});
