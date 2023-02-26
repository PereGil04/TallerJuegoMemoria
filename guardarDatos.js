let intentosJugador = document.querySelector(".intentos");
let nombreJugador = document.querySelector(".Player");
let tiempoJugador = document.querySelector(".tiempo");

//tomar los datos
function tomarDatos() {
    let estadisticas = {
        "nombre":nombreJugador.textContent,
        "intentos":intentosJugador.textContent,
        "tiempo":tiempoJugador.textContent,
        
    }
    //console.log(estadisticas)
    guardarDatos(estadisticas );
}
//guardar datos
function guardarDatos(objeto) {
    let jugadores =[];
    let clave = "ranking";
    //pasar los datos de texto a objeto
    let datosDelNavegador = JSON.parse(localStorage.getItem(clave));
    if (datosDelNavegador !== null) {
        jugadores.push(datosDelNavegador);
    }
    jugadores.push(objeto);
    //pasar los datos a texto
    localStorage.setItem(clave, JSON.stringify(jugadores));
    //alert("Datos Guardados Exitosamente...")

}

//mostrar el ranking de jugador
function mostrarDatos() {
        let tabla = document.querySelector(".listado-tabla tbody")
        let jugadores = [];
        let clave = "ranking";
        //pasar los datos de texto a objeto
        let datosDelNavegador = JSON.parse(localStorage.getItem(clave));
        if (datosDelNavegador !== null) {
            jugadores.push(datosDelNavegador);
        }
    
    jugadores.forEach( (dato, i)=>{
        let fila = document.createElement("tr");
        let tPosicion = document.createElement("td");
        let tNombre = document.createElement("td");
        let tIntentos = document.createElement("td");
        let tTiempo = document.createElement("td");
        //tPosicion.appendChild(i)
        tNombre.textContent= dato.nombre;
        tTiempo.textContent= dato.tiempo;
        tIntentos.textContent= dato.intentos;
        fila.appendChild(tPosicion);
        fila.appendChild(tTiempo);
        fila.appendChild(tIntentos);
        fila.appendChild(tNombre);
        tabla.appendChild(fila);
        



    });







}