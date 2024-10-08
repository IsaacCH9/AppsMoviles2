function appendToDisplay(value) {
    document.getElementaryById('display').value += value;
}

function clearDisplay(){
    document.getElementaryById('display').value = '';
}

function deleteLast() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('diplay').value = displayValue.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(document.getElementaryById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Expresion invalida');
    }
}