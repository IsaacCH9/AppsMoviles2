//Obtener el boton del DOM
const botonColor = document.getElementById('CambiarColor');

//Añadir un listener al boton para manejar el evento click
botonColor.addEventListener('click', () =>{
        //Generar color aleatorio
        const colorAleatorio = '#${Math.floor(Math.random() * 16777215).toString(16)}';
    }
)