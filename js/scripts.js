var lista = document.getElementById('mainList');
var newTarInput = document.getElementById("addTaskMainListNom");
var newTarBtn = document.getElementById('addTaskMainListBtnAcc');

function nuevoItemTarea(){
    var tarea = newTarInput.value;
    var nuevaTarea = document.createElement("li");
    var contenido = document.createTextNode(tarea);
    if (tarea === "") {
		alert("No puede ingresar una tarea vacia")
		return false;
    }
    else{
        nuevaTarea.appendChild(contenido);
        lista.appendChild(nuevaTarea);
        for (var i = 0; i <= lista.children.length -1; i++) {
            lista.children[i].addEventListener("click", eliItemTarea);
        }
        tarea.value = "";
    }
};
function eliItemTarea(){
    lista.removeChild(this);
};
newTarBtn.addEventListener("click", nuevoItemTarea);
