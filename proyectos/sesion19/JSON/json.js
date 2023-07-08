
window.onload = function () {
    var objJSON = {
        "personas": [
            {
                "nombre": "Jorge", "edad": 23
            },
            {
                "nombre": "Maria", "edad": 45
            },
            {
                "nombre": "Juan", "edad": 64
            },
            {
                "nombre": "Juanita", "edad": 69
            }
        ]
    };

    for (let i = 0; i < 5; i++) {
        texto = objJSON.personas[i].nombre + " " + objJSON.personas[i].edad + '<br>';

        document.getElementById("contenido").innerHTML += texto;
    }
}
