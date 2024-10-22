document.addEventListener('DOMContentLoaded', () => {
    let tasks = []; // Arreglo vacío para guardar las tareas.

    const taskForm = document.getElementById('taskForm'); // Se obtiene el formulario de tareas del DOM.
    const taskList = document.getElementById('taskList'); // Se obtiene la lista de tareas del DOM.

    const addTask = (e) => { // Función para añadir una tarea.
        e.preventDefault(); // Se previene el comportamiento por defecto del formulario.
        const task = document.getElementById('taskInput').value; // Se obtiene el valor del input de tarea.
        if (task) { // Si hay una tarea ingresada.
            tasks.push(task); // Se añadir tarea al arreglo
            console.log(task); // muestra la tarea en la consola
            renderTasks(); // Renderiza la lista de tareas.
            document.getElementById('taskInput').value = ''; // Se limpia el Input.
        }
    };

    const renderTasks = () => { // Renderizar las tareas en el DOM.
        console.log(tasks); // Muestra el arreglo de tareas en la consola.
    };

    taskForm.addEventListener('submit', addTask);
});
