// Function to clear the display
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Function to append a value to the display
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

// Function to set the operation
function setOperation(operation) {
  document.getElementById('display').value += operation;
}

// Function to calculate the result
function calculate() {
  var expression = document.getElementById('display').value;
  var result = eval(expression);
  document.getElementById('display').value = result;
}