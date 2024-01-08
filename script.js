var displayElement = document.getElementById('display');

function appendToDisplay(value) {
    displayElement.value += value;
}

function calculate() {
    try {
        var result = eval(displayElement.value);
        displayElement.value = result;
    } catch (error) {
        displayElement.value = 'Error';
    }
}

function deductNDFL() {
    try {
        var result = (eval(displayElement.value) - (eval(displayElement.value) * 0.13)).toFixed(2);
        displayElement.value = result;
    } catch (error) {
        displayElement.value = 'Error';
    }
}

function clearDisplay() {
    displayElement.value = '';
}
