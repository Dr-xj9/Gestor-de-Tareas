
function crearTarea() {
    const tarea = document.getElementById("tarea").value.trim();
    const lista = document.getElementById("lista");
    const elemento = document.createElement("li");
    const botonEliminar = document.createElement("button");
    const vaciar = document.getElementById("tarea");

    if (tarea === "") {
        alert("Ingresa una tarea");
        return;
    }

    elemento.textContent = tarea;
    elemento.title = "Click para marcar como completado";

    elemento.addEventListener('click', function () {
        elemento.classList.toggle('completada');
    });


    botonEliminar.textContent = "borrar";

    botonEliminar.addEventListener('click', function () {
        elemento.remove()
    });

    elemento.appendChild(botonEliminar);
    lista.appendChild(elemento);

    vaciar.value = "";
}
