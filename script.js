// Simple Calculator Script

let display = document.querySelector(".display").value;
let justCalculated = false;
function updateDisplay() {
    document.querySelector(".display").value = display;
}

function appendChar(char) {
     if (justCalculated) {
        display = "";
        justCalculated = false;
    }
    display += char;
    updateDisplay();
}

function clearScreen() {
    display = "";
    updateDisplay();
}

function deleteChar() {
    display = display.slice(0, -1);
    updateDisplay();
}
function percent() {
    try {
        display = (eval(display) / 100).toString();
    } catch {
        display = "Error";
    }
    updateDisplay();
}

function appendDot() {
     if (justCalculated) {
        display = "";
        justCalculated = false;
    }
    // Prevent multiple dots in the current number
    const parts = display.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    if (!lastPart.includes('.')) {
        display += '.';
        updateDisplay();
    }
}
function calculate() {
   try {
        display = eval(display).toString();
    } catch {
        display = "Error";
    }
    updateDisplay();
    justCalculated = true;
}

function squareRoot() {
    try {
        display = Math.sqrt(eval(display)).toString();
    } catch {
        display = "Error";
    }
    updateDisplay();
}