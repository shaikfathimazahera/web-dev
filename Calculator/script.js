function appendCharacter(character) {
    const display = document.getElementById('display');
    display.value += character;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteDigit() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);

        if (result === Infinity || isNaN(result)) {
            display.value = 'Undefined';
        } else {
            display.value = result;
        }
    } 
    catch (error) {
        display.value = 'Error';
    }
}
