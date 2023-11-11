{
    let iniciar = () => {
        // Busco el boton para añadir tarea y la entrada de texto con querySelector().
        const botonAnadirTarea = document.querySelector(`[id='botonAnadirTarea']`);
        const texto = document.querySelector(`[id='texto']`);

        // Creo la lista donde se almacenarán todas las tareas.
        const lista = document.createElement("ul");

        /* Creo un id para los checkbox, el cual usaré para
        darle funcionalidad. */
        let idCheckbox = 1;

        botonAnadirTarea.addEventListener("click", anadirTarea);

        /* Función que crea una tarea y sus elementos, luego les añade funcionalidad
        con llamadas de métodos auxiliares y finalmente los agrega a la lista. */
        function anadirTarea() {
            let tarea = document.createElement("li");

            let checkboxTarea = document.createElement("input");
            let checkboxTareaLabel = document.createElement("label");
            let botonTarea = document.createElement("button");

            // Establece el texto del botón como "Eliminar"
            botonTarea.textContent = "Eliminar";

            agregarAtributosCheckbox(checkboxTarea, checkboxTareaLabel);
            tacharTarea(checkboxTarea, checkboxTareaLabel);
            eliminarTarea(botonTarea, tarea);

            // Borra el texto de la entrada de texto cada vez que se añade una tarea
            texto.value = "";

            tarea.appendChild(checkboxTarea);
            tarea.appendChild(checkboxTareaLabel);
            tarea.appendChild(botonTarea);
            lista.appendChild(tarea);
            document.body.appendChild(lista);
        }

        // Función que recibe un botón y una tarea y elimina la tarea asociada al botón
        function eliminarTarea(boton, tarea) {
            boton.addEventListener("click", () => {
                lista.removeChild(tarea);
            });
        }

        /* Función que recibe un checkbox y un label y les agrega atributos. Agrega el
        id al checkbox y el atributo "for" al label, el cual usa el id del checkbox. El
        id aumentará en 1 conforme se vayan creando checkbox. */
        function agregarAtributosCheckbox(checkbox, checkboxLabel) {
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("id", "checkboxTarea" + idCheckbox);

            checkboxLabel.setAttribute("for", "checkboxTarea" + idCheckbox);
            // El texto del label será el texto introducido en la entrada de texto.
            checkboxLabel.textContent = texto.value;

            idCheckbox++;
        }

        /* Función que recibe un checkbox y un label. Se añade un evento al checkbox
        cuya función es que cuando se altere o cambie, si está marcado se tachará el 
        textContent del label, si no está marcado se quitará el tachado. */
        function tacharTarea(checkbox, checkboxLabel) {
            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    checkboxLabel.setAttribute("style", "text-decoration: line-through")
                } else {
                    checkboxLabel.removeAttribute("style");
                }
            });
        }
    }

    document.addEventListener("DOMContentLoaded", iniciar);
}
