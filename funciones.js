document.addEventListener("DOMContentLoaded",function () {
    mostrarDatos();
})
//declarar variables globales
let imagenes = [
    {
        nombre:"Zoro",
        ruta:"imagenes/Jzoro.png"
    },
    {
        nombre:"Sanji",
        ruta:"imagenes/Jsanji.jpg"
    },
    {
        nombre:"Nami",
        ruta:"imagenes/Jnami.png"
    },
    {
        nombre:"Usopp",
        ruta:"imagenes/Jusopp.png"
    },
    {
        nombre:"Chopper",
        ruta:"imagenes/Jchopper.png"
    },
    {
        nombre:"Robin",
        ruta:"imagenes/Jrobin.png"
    }, 
    {
        nombre:"Zoro",
        ruta:"imagenes/Jzoro.png"
    },
    {
        nombre:"Sanji",
        ruta:"imagenes/Jsanji.jpg"
    },
    {
        nombre:"Nami",
        ruta:"imagenes/Jnami.png"
    },
    {
        nombre:"Usopp",
        ruta:"imagenes/Jusopp.png"
    },
    {
        nombre:"Chopper",
        ruta:"imagenes/Jchopper.png"
    },
    {
        nombre:"Robin",
        ruta:"imagenes/Jrobin.png"
    } 
]
let imagenes_2 = [
    {
        nombre:"Zoro",
        ruta:"imagenes/Jzoro.png"
    },
    {
        nombre:"Sanji",
        ruta:"imagenes/Jsanji.jpg"
    },
    {
        nombre:"Nami",
        ruta:"imagenes/Jnami.png"
    },
    {
        nombre:"Usopp",
        ruta:"imagenes/Jusopp.png"
    },
    {
        nombre:"Chopper",
        ruta:"imagenes/Jchopper.png"
    },
    {
        nombre:"Robin",
        ruta:"imagenes/Jrobin.png"
    }, 
    {
        nombre:"Franky",
        ruta:"imagenes/Jfranky.jpg"
    },
    {
        nombre:"Brook",
        ruta:"imagenes/Jbrook.png"
    }, 
    {
        nombre:"Zoro",
        ruta:"imagenes/Jzoro.png"
    },
    {
        nombre:"Franky",
        ruta:"imagenes/Jfranky.jpg"
    },
    {
        nombre:"Brook",
        ruta:"imagenes/Jbrook.png"
    }, 
    {
        nombre:"Robin",
        ruta:"imagenes/Jrobin.png"
    }, 
    {
        nombre:"Chopper",
        ruta:"imagenes/Jchopper.png"
    },
    {
        nombre:"Usopp",
        ruta:"imagenes/Jusopp.png"
    },
    {
        nombre:"Nami",
        ruta:"imagenes/Jnami.png"
    },
    {
        nombre:"Sanji",
        ruta:"imagenes/Jsanji.jpg"
    }
]
let imagenes_3 = [
    {
        nombre:"Zoro",
        ruta:"imagenes/Jzoro.png"
    },
    {
        nombre:"Sanji",
        ruta:"imagenes/Jsanji.jpg"
    },
    {
        nombre:"Nami",
        ruta:"imagenes/Jnami.png"
    },
    {
        nombre:"Usopp",
        ruta:"imagenes/Jusopp.png"
    },
    {
        nombre:"Chopper",
        ruta:"imagenes/Jchopper.png"
    },
    {
        nombre:"Robin",
        ruta:"imagenes/Jrobin.png"
    }, 
    {
        nombre:"Zoro",
        ruta:"imagenes/Jzoro.png"
    },
    {
        nombre:"Sanji",
        ruta:"imagenes/Jsanji.jpg"
    },
    {
        nombre:"Nami",
        ruta:"imagenes/Jnami.png"
    },
    {
        nombre:"Usopp",
        ruta:"imagenes/Jusopp.png"
    },
    {
        nombre:"Chopper",
        ruta:"imagenes/Jchopper.png"
    },
    {
        nombre:"Robin",
        ruta:"imagenes/Jrobin.png"
    } 
]
// seleccionar tablero donde iran las imagenes
let tablero = document.querySelector(".tablero");
//variables para guardar los datos de la imagen escogida
let imgEscogidaID = [];
let imgEscogidaNombre = [];
let contador = document.querySelector(".aciertos")
let fallos = document.querySelector(".fallos") 
let intentos = document.querySelector(".intentos") 
let acierto = 0;
let intentos1 = 15;
let tiempo = 60;
let nivel = 1;
let estoyjugando  = false;
let mostrarNivel = document.querySelector(".nivel")
let mostrarTiempo = document.querySelector(".tiempo")
let btnIniciar = document.querySelector(".iniciar")
let segundos ;

//evento para iniciar el juego
btnIniciar.addEventListener("click",function () {
 if (estoyjugando == false && nivel == 1) {
    imagenes.sort(()=>Math.random= - 0.5);
    estoyjugando = true;
    nivel_1();
 }else if (estoyjugando == false && nivel == 2){
    imagenes_2.sort(()=>Math.random= - 0.5);
    estoyjugando = true;
    nivel_2();
 }else if (estoyjugando == false && nivel == 3){
    imagenes_3.sort(()=>Math.random= - 0.5);
    estoyjugando = true;
    nivel_3();
 }
})

// funcion papra agregar las imagenes al tablero
function agregarImagenes() {
    if (nivel == 1) {
        for (let i = 0; i < imagenes.length; i++) {
        let img = document.createElement("img");
        let div = document.createElement("div");
        div.setAttribute("class","col-3 border");
        img.setAttribute("class","img-fluid");
        img.setAttribute("src","imagenes/ocultar.gif");
        img.setAttribute("id",i);
        img.addEventListener("click",descubrirImagen);
        div.appendChild(img);
        tablero.appendChild(div);

       } 
    }else if( nivel == 2){
        for (let i = 0; i < imagenes_2.length; i++) {
            let img = document.createElement("img");
            let div = document.createElement("div");
            div.classList.add("class","col-3", "border");
            img.setAttribute("class","img-fluid");
            img.setAttribute("src","imagenes/ocultar.gif");
            img.setAttribute("id",i);
            img.setAttribute("width","200px");
            img.addEventListener("click", descubrirImagen);
            div.appendChild(img);
            tablero.appendChild(div);
        }
    }else if( nivel == 3){
        for (let i = 0; i < imagenes_3.length; i++) {
            let img = document.createElement("img");
            let div = document.createElement("div");
            div.classList.add("class","col-3", "border");
            img.setAttribute("class","img-fluid");
            img.setAttribute("src","imagenes/ocultar.gif");
            img.setAttribute("id",i);
            img.setAttribute("width","200px");
            img.addEventListener("click", descubrirImagen);
            div.appendChild(img);
            tablero.appendChild(div);
        }
    }
     
}

function quitarImagenes() {
    let ImagenesTablero = document.querySelectorAll(".tablero > div")
    for (let i = 0; i < ImagenesTablero.length; i++) {
        ImagenesTablero[i].remove();

    }
}


//funcion para descubrir imagenes
function descubrirImagen() {
    if (nivel == 1) {
        let imgID = this.getAttribute("id")
    //alert("imagen #"+imgID)
        this.setAttribute("src",imagenes[imgID].ruta)
        //guardar ID
        imgEscogidaID.push(imgID);
        //guardar nombre
        imgEscogidaNombre.push(imagenes[imgID].nombre);
        //alert(imgEscogidaID[0] +" "+ imgEscogidaNombre[0])
        if ( imgEscogidaNombre.length == 2 ) {
            setTimeout(compararImagenes,300)   
        }
    }else if (nivel == 2) {
        let imgID = this.getAttribute("id")
    //alert("imagen #"+imgID)
        this.setAttribute("src",imagenes_2[imgID].ruta)
        //guardar ID
        imgEscogidaID.push(imgID);
        //guardar nombre
        imgEscogidaNombre.push(imagenes_2[imgID].nombre);
        if ( imgEscogidaNombre.length === 2 ) {
            setTimeout(compararImagenes,300);       
        }
    }else if (nivel == 3) {
        let imgID = this.getAttribute("id")
    //alert("imagen #"+imgID)
        this.setAttribute("src",imagenes_3[imgID].ruta)
        //guardar ID
        imgEscogidaID.push(imgID);
        //guardar nombre
        imgEscogidaNombre.push(imagenes_3[imgID].nombre);
        if ( imgEscogidaNombre.length === 2 ) {
            setTimeout(compararImagenes,300);       
        }
    } 
}

//funcion para comparar imagenes
function compararImagenes() {
    //seleccionar todas las imagenes del tablero
    let TodasImagenes = document.querySelectorAll(".tablero > div > img");
    //comparar las imagenes escogidas

    if ( imgEscogidaNombre[0] == imgEscogidaNombre[1]) { 

        if (imgEscogidaID[0] == imgEscogidaID[1]) {
            alert("Escoja otra casilla diferente")
            TodasImagenes[imgEscogidaID[0]].setAttribute("src","imagenes/ocultar.gif");
            TodasImagenes[imgEscogidaID[1]].setAttribute("src","imagenes/ocultar.gif");
        }else{
            //alert("Son iguales");
            TodasImagenes[imgEscogidaID[0]].setAttribute("src","imagenes/ok.png");
            TodasImagenes[imgEscogidaID[1]].setAttribute("src","imagenes/ok.png");
            TodasImagenes[imgEscogidaID[0]].removeEventListener("click",descubrirImagen,false);
            TodasImagenes[imgEscogidaID[1]].removeEventListener("click",descubrirImagen,false);
            acierto++
            contador.textContent = acierto;
            
        }
        
      
    }else{
        //alert("No son Iguales");
        TodasImagenes[imgEscogidaID[0]].setAttribute("src","imagenes/ocultar.gif");
        TodasImagenes[imgEscogidaID[1]].setAttribute("src","imagenes/ocultar.gif")
        intentos1--
        intentos.textContent = intentos1;
       
        if (intentos1 == 0) {
            let div_perdiste = document.querySelector('#perdiste');           
            div_perdiste.classList.add('loader2') 
            div_perdiste.style.display = "block"
            setTimeout(function () {
                div_perdiste.style.display = "none"
                
            },3000)
            
        }
    }
  
    //reiniciar la variable
    imgEscogidaNombre = [];
    imgEscogidaID = [];
    
    if ( acierto == 6 && nivel == 1  ) {
        tomarDatos();
        let div_ganaste = document.querySelector('#ganaste');
        div_ganaste.classList.add('loader') 
        div_ganaste.style.display = "block"
        clearInterval(segundos)
        acierto = 0;
        intentos1 = 15;
        tiempo = 45;
        nivel++;
        estoyjugando = false;
        contador.textContent = acierto;
        intentos.textContent = intentos1;
        tiempo.textContent = tiempo;
        mostrarNivel.textContent = nivel;
        quitarImagenes(); 
        setTimeout(function () {
            div_ganaste.style.display = "none"
     },3000)
 }else if (acierto == 8 && nivel == 2){
    let div_ganaste = document.querySelector('#ganaste');
        div_ganaste.classList.add('loader') 
        div_ganaste.style.display = "block"
        clearInterval(segundos)
        acierto = 0;
        intentos1 = 12;
        tiempo = 30;
        nivel++;
        estoyjugando = false;
        contador.textContent = acierto;
        intentos.textContent = intentos1;
        tiempo.textContent = tiempo;
        mostrarNivel.textContent = nivel;
        quitarImagenes(); 
        setTimeout(function () {
            div_ganaste.style.display = "none"
     },3000)
 }
 else if (acierto == 10 && nivel == 3){
   
    let div_ganaste = document.querySelector('#ganaste');
        div_ganaste.classList.add('loader') 
        div_ganaste.style.display = "block"
        clearInterval(segundos)
        acierto = 0;
        intentos1 = 10;
        tiempo = 20;
        nivel++;
        estoyjugando = false;
        contador.textContent = acierto;
        intentos.textContent = intentos1;
        tiempo.textContent = tiempo;
        mostrarNivel.textContent = nivel;
        quitarImagenes(); 
        setTimeout(function () {
            div_ganaste.style.display = "none"
            location.reload();
     },3000)
 }
   
}
//Niveles
function nivel_1() {
    agregarImagenes();
    mostrarNivel.textContent = nivel;
    segundos = setInterval(function () {
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if (tiempo == 10) {
           mostrarTiempo.style.color ="red"
           mostrarTiempo.style.fontSize ="30px"
        }
        if (tiempo == 0 || intentos1 == 0) {
            clearInterval(segundos);
            let div_perdiste = document.querySelector('#perdiste');           
            div_perdiste.classList.add('loader2') 
            div_perdiste.style.display = "block"
            setTimeout(function () {
                div_perdiste.style.display = "none"
            },3000)
           
        }

    },1000)
}
function nivel_2() {
    agregarImagenes();
    mostrarNivel.textContent = nivel;
    segundos = setInterval(function () {
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if (tiempo == 10) {
           mostrarTiempo.style.color ="red"
           mostrarTiempo.style.fontSize ="30px"
        }
        if (tiempo == 0 || intentos1 == 0) {
            clearInterval(segundos);
            let div_perdiste = document.querySelector('#perdiste');           
            div_perdiste.classList.add('loader2') 
            div_perdiste.style.display = "block"
            setTimeout(function () {
                div_perdiste.style.display = "none"
            },3000)
           
        }

    },1000)
}
function nivel_3() {
    agregarImagenes();
    mostrarNivel.textContent = nivel;
    segundos = setInterval(function () {
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if (tiempo == 10) {
           mostrarTiempo.style.color ="red"
           mostrarTiempo.style.fontSize ="30px"
        }
        if (tiempo == 0 || intentos1 == 0) {
            clearInterval(segundos);
            let div_perdiste = document.querySelector('#perdiste');           
            div_perdiste.classList.add('loader2') 
            div_perdiste.style.display = "block"
            setTimeout(function () {
                div_perdiste.style.display = "none"
            },3000)
           
        }

    },1000)
}