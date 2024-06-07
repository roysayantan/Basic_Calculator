let currentInput = '';

function appendNumber(num) {
  currentInput += num;
  document.getElementById('display').value = currentInput;
}

function appendOperator(op) {
  if (currentInput !== '' && !isNaN(currentInput[currentInput.length - 1])) {
    currentInput += op;
    document.getElementById('display').value = currentInput;
  }
}

function calculate() {
  if (currentInput !== '' && !isNaN(currentInput[currentInput.length - 1])) {
    try {
      const result = eval(currentInput);
      document.getElementById('display').value = result;
      currentInput = result.toString();
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}
