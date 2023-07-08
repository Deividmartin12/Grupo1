function guardarDatos() {
    var nombre = document.getElementById("nombre").value;
    var celular = document.getElementById("celular").value;
    var email = document.getElementById("email").value;
  
    const datos = {
      celular: celular,
      email: email,
    };
  
    localStorage.setItem(nombre, JSON.stringify(datos));
  
    document.getElementById("nombre").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("email").value = "";
  
    actualizarDato();
  }
  
  function buscarDatos() {
    var nombre = document.getElementById("nombre").value;
    var datos = localStorage.getItem(nombre);
  
    if (datos) {
      var parsedDatos = JSON.parse(datos);
      document.getElementById("celular").value = parsedDatos.celular;
      document.getElementById("email").value = parsedDatos.email;
    } else {
      document.getElementById("celular").value = "";
      document.getElementById("email").value = "";
    }
  }
  
  function eliminar() {
    var nombre = document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDato();
  }
  
  function eliminartodos() {
    localStorage.clear();
    actualizarDato();
  }
  
  function actualizarDato() {
    var tablaHTML = '<table><tr><th>Nombre</th><th>Teléfono</th><th>Correo</th></tr>';
  
    if (localStorage.length === 0) {
      tablaHTML += '<tr><td colspan="3">Vacio</td></tr>';
    } else {
      for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var datos = JSON.parse(localStorage.getItem(key));
  
        tablaHTML += '<tr>';
        tablaHTML += '<td>' + key + '</td>';
        tablaHTML += '<td>' + datos.celular + '</td>';
        tablaHTML += '<td>' + datos.email + '</td>';
        tablaHTML += '</tr>';
      }
    }
  
    tablaHTML += '</table>';
  
    document.getElementById("contactos").innerHTML = tablaHTML;
  }
  