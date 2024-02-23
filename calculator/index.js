function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
  document.getElementById("display2").value = "";
}

// function calculate() {
//   try {
//     let result = eval(document.getElementById("display").value);
//     document.getElementById("display").value = result;
//   } catch (error) {
//     document.getElementById("display").value = "error";
//   }
// }

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display2").value = result;
  } catch (error) {
    document.getElementById("display2").value = "syntax error";
  }
}

function clearLast() {
  var display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
