//crear una funcion que recibe un parametro, despues agregar el valor en pantalla
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
//Deja el campo en de texto vacio vacio
function clearDisplay(){
    document.getElementById('display').value = '';
}
//crear una funcion que limpie el ultimo elemento en el display
function deleteLast() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}
//Calcula el resultado de la oparacion que seleccionamos y lo coloca en el display
//si llega a ocurrir un error la funcion manda directamente al catch del try/catch
function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Expresion invalida');
    }
}