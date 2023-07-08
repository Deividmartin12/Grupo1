function guardardatos(){
   var nombre= document.getElementById("nombre").value;
   var celular= document.getElementById("celular").value;
   localStorage.setItem(nombre,celular);
   document.getElementById("nombre").value= "";
   document.getElementById("celular").value= "";
   actualizarDato();
}

function buscardatos(){
    var nombre= document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    document.getElementById("celular").value = localStorage.getItem(nombre);
}

function eliminar(){
    var nombre= document.getElementById("nombre").value;
    localStorage.getItem(nombre);
    localStorage.removeItem(nombre);
    actualizarDato();
}

function eliminartodos(){
    localStorage.clear();
    actualizarDato();
}

function actualizarDato(){ //mostrar todo cuando guarde
   var registro="";
    if (localStorage.length === 0) {
        registro += '<li>Vacio</li>';
    } else {
        for (let i = 0; i < localStorage.length -1; i++) {
            var key = localStorage.key(i);
            // recorriendo y el registro de toda la cadena
            registro += '<li>'+'<span class="nom">' + key + '</span>' + '<span class="nom">' + localStorage.getItem(key) + '</span> </li> <br>' 
        }
    }
    document.getElementById("contactos").innerHTML=registro;
}