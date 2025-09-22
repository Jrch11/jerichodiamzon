function appendToDisplay(value) {
  document.getElementById('calc-display').value += value;
}

function clearDisplay() {
  document.getElementById('calc-display').value = '';
}

function calculate() {
  try {
    const result = eval(document.getElementById('calc-display').value);
    document.getElementById('calc-display').value = result;
  } catch (error) {
    document.getElementById('calc-display').value = 'Error';
  }
}

function closeCalculator() {
  document.getElementById('calculator-modal').style.display = 'none';
  document.removeEventListener('keydown', handleKeydown);
  clearDisplay();
}