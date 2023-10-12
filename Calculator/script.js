function validateInput(inputElement) {
    inputElement.value = inputElement.value.replace(/[^0-9+\-*/.]/g, '');
    inputElement.value = inputElement.value.replace(/([+\-*/.])\1+/g, '$1');
    if (/^[+\-*/.]/.test(inputElement.value)) {
        inputElement.value = inputElement.value.substr(1);
    }
}

function app(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clea() {
    const display = document.getElementById('display');
    display.value = '';
}

function calc() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Syntax Error';
    }
}