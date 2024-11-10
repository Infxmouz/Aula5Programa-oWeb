function appendToDisplay(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = '';
}
function calculate() {
    try {
        let expression = document.getElementById("display").value;
        let result = eval(expression);
        document.getElementById("display").value = result;
    } catch (e) {
        document.getElementById("display").value = 'Erro';
    }
}

function calculatePower() {

    let base = prompt("Digite a base:");
    let exponent = prompt("Digite o expoente:");

    base = parseFloat(base);
    exponent = parseFloat(exponent);

    if (!isNaN(base) && !isNaN(exponent)) {
        let result = Math.pow(base, exponent);
        document.getElementById("display").value = result;
    } else {
        alert("Valores inválidos!");
    }
}

function roundNumber() {
    let number = prompt("Digite o número para arredondar:");
    number = parseFloat(number);

    if (!isNaN(number)) {
        let result = Math.round(number);
        document.getElementById("display").value = result;
    } else {
        alert("Valor inválido!");
    }
}

function squareRoot() {
    let number = prompt("Digite o número para calcular a raiz quadrada:");
    number = parseFloat(number);

    if (!isNaN(number) && number >= 0) {
        let result = Math.sqrt(number);
        document.getElementById("display").value = result;
    } else {
        alert("Valor inválido ou número negativo!");
    }
}