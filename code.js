
var datamap = new Map([
  [document.getElementById("btnPeriCuadrado"), document.getElementById("modalPeriCuadrado")],
  [document.getElementById("btnPeriRectangulo"), document.getElementById("modalPeriRectangulo")],
  [document.getElementById("btnPeriTriangulo"), document.getElementById("modalPeriTriangulo")],
  [document.getElementById("btnPeriTrapecio"), document.getElementById("modalPeriTrapecio")],
  [document.getElementById("btnPeriCirculo"), document.getElementById("modalPeriCirculo")], 
  [document.getElementById("btnAreaCuadrado"), document.getElementById("modalAreaCuadrado")], 
  [document.getElementById("btnAreaRectangulo"), document.getElementById("modalAreaRectangulo")], 
  [document.getElementById("btnAreaTriangulo"), document.getElementById("modalAreaTriangulo")], 
  [document.getElementById("btnAreaTrapecio"), document.getElementById("modalAreaTrapecio")], 
  [document.getElementById("btnAreaCirculo"), document.getElementById("modalAreaCirculo")], 
]);

datamap.forEach((value, key) => {
  doModal(key, value);
});

function doModal(anchor, popupbox) {

  // Cierra el Modal
  var span = popupbox.getElementsByClassName("close")[0];

  anchor.addEventListener("click", function (event) {
      popupbox.style.display = "block";
  });

  span.addEventListener("click", function (event) {
      popupbox.style.display = "none";
  });

  window.addEventListener("click", function (event) {
      if (event.target == popupbox) {
          popupbox.style.display = "none";
      }
  });
}



//----------------------------------------------------------------------------------------------------------------------------//

//Lista vacia por si no se ingresan datos al arreglo
const listaObj = [];

const vacio = {
    nombre: 'No se seleccionó una figura',
    formulaPerimetro: "Vacío",
    formulaArea : "Vacío",
};

const noData = [vacio]
console.log(noData)


// botones de la tabla

let btnMakeCuadr = document.getElementById("btnMakeCuadr")
btnMakeCuadr.addEventListener("click", makeObjCuadr);

let btnMakeRect = document.getElementById("btnMakeRect")
btnMakeRect.addEventListener("click", makeObjRectangulo);

let btnMakeTria = document.getElementById("btnMakeTria")
btnMakeTria.addEventListener("click", makeObjTriangulo);

let btnMakeTrap = document.getElementById("btnMakeTrap")
btnMakeTrap.addEventListener("click", makeObjTrapecio);

let btnMakeCirc = document.getElementById("btnMakeCirc")
btnMakeCirc.addEventListener("click", makeObjCirculo);

// Botones Formulometro

let bot = document.getElementById("bot")
bot.addEventListener("click", crearFormulometro);

let bot2 = document.getElementById("bot2")
bot2.addEventListener("click", refrescar);

//objetos
const cuadradoObj = {
    nombre: 'Cuadrado',
    formulaPerimetro: "Lado + Lado + Lado + Lado",
    formulaArea : "Lado * Lado",
};

const rectanguloObj = {
    nombre: 'Rectángulo',
    formulaPerimetro: "2 * Largo + 2 * Ancho",
    formulaArea : "Largo * Ancho",
};

const trianguloObj = {
    nombre: 'Triángulo',
    formulaPerimetro: "Base + lado 1 + lado 2",
    formulaArea : "(base * altura) / 2",
};

const trapecioObj = {
    nombre: 'Trapecio',
    formulaPerimetro: "Lado 1 + Lado 2 + Lado 3 + Lado 4",
    formulaArea : "(baseMayor + baseMenor) * altura / 2",
};

const circuloObj = {
    nombre: 'Círculo',
    formulaPerimetro: "2 * Radio * π",
    formulaArea : "π * Radio²",
};

//funciones

//formulas
function perimetroCuadrado(l) {
    var resultado = l * 4;
    mostrarRes(resultado);
}

function areaCuadrado(l) { 
    var resultado = l * l;
    mostrarRes(resultado);
}

function perimetroRectangulo(l,a) {
    var resultado = (l * 2) + (a * 2);
    mostrarRes(resultado);
}

function areaRectangulo(l, a) {
    var resultado = l * a;
    mostrarRes(resultado);
}

function perimetroTriangulo(l1, l2, l3) {
    var resultado = (l1 * 1) + (l2 * 1) + (l3 * 1);
    console.log(resultado)
    mostrarRes(resultado);
}

function areaTriangulo(b, a) {
    var resultado = (b * a) / 2;
    mostrarRes(resultado);
}

function perimetroTrapecio(l1, l2, l3, l4) {
    var resultado = (l1 * 1) + (l2 * 1) + (l3 * 1) + (l4 * 1);
    mostrarRes(resultado);
}

function areaTrapecio(baseMayor, baseMenor, altura) {  
    var resultado = (((baseMayor * 1) + (baseMenor * 1)) * altura) / 2;
    mostrarRes(resultado);
}

function perimetroCirculo(r) {
    var resultado = 2 * r * 3.14;
    mostrarRes(resultado);
}

function areaCirculo(r) {
    var resultado = r * r * 3.14;
    mostrarRes(resultado);
}

//creadores
function makeObjCuadr() {
    if (listaObj.includes(cuadradoObj) == false) {
        listaObj.push(cuadradoObj);
    }
}

function makeObjRectangulo() {
    if (listaObj.includes(rectanguloObj) == false) {
        listaObj.push(rectanguloObj);
    }
}

function makeObjTriangulo() {
    if (listaObj.includes(trianguloObj) == false) {
        listaObj.push(trianguloObj);
    }
}

function makeObjTrapecio() {
    if (listaObj.includes(trapecioObj) == false) {
        listaObj.push(trapecioObj);
    }
}

function makeObjCirculo() {
    if (listaObj.includes(circuloObj) == false) {
        listaObj.push(circuloObj);
    }
}

const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor)
};


function crearFormAux (lista) {
    for(let i = 0; i < lista.length; i++){
        console.log(i)
        let tabla = document.getElementById("tabla").insertRow(-1);
        let col1 = tabla.insertCell(-1);
        let col2 = tabla.insertCell(-1);
        let col3 = tabla.insertCell(-1);

        col1.innerHTML = lista[i].nombre;
        col2.innerHTML = lista[i].formulaPerimetro;
        col3.innerHTML = lista[i].formulaArea;
    }
    let show = document.getElementById("tabla").style.display = "contents";
    bot.style.display = "none";
    bot2.style.display = "block";
}


function nullify(arr) {
    console.log(arr.length)
    if (arr.length == 0) {
        arr =null;
    }
    console.log(arr)
    return arr
}

//alerta dependiendo del exito del formulometro
function alertFormu(text) {

    if(text != 'No se seleccionó una figura'){
        Swal.fire(
            'Felicitaciones',
            'Has creado tu Formulometro exitosamente',
            'success'
          )
    }
    
    else {
        Swal.fire(
            'Oh no',
            'No has seleccionado ninguna Figura geométrica, tu formulometro se creo vacío',
            'error'
          )
    }
}

function crearFormulometro() {
    guardarLocal("listaDeFormulas",JSON.stringify(nullify(listaObj) || noData));
    const formuList = JSON.parse(localStorage.getItem("listaDeFormulas"));
    crearFormAux(formuList);
    //llama a la alerta
    alertFormu(formuList[0].nombre);
}

//auxiliares


function mostrarRes (resultado){
    document.getElementById("resultado").innerHTML = "El resultado es: " + Math.round(resultado);
    document.getElementById("sepR").style.display = "block";
}

function refrescar() {
    localStorage.removeItem("listaDeFormulas");
    location.reload()
}

//Checkea si hay una tabla guardada

document.addEventListener("DOMContentLoaded", function(e){
    const formuList = JSON.parse(localStorage.getItem("listaDeFormulas"));
    console.log(formuList)
    if (formuList != null) {
        crearFormAux(formuList);
    }
  });



//-------------------------------------------------------------------------------------------------------------



// botones de perimetro en Modal

let formPeriCuadrado = document.getElementById("formPeriCuadrado");
formPeriCuadrado.onsubmit = function(e) {
  e.preventDefault();
  perimetroCuadrado(formPeriCuadrado.ladoPeriCuadr.value)
}

let formPeriRectangulo = document.getElementById("formPeriRectangulo")
formPeriRectangulo.onsubmit = function(e) {
    e.preventDefault();
    perimetroRectangulo(formPeriRectangulo.largoPeriRec.value, formPeriRectangulo.anchoPeriRec.value)
}


let formPeriTriangulo = document.getElementById("formPeriTriangulo")
formPeriTriangulo.onsubmit = function(e) {
    e.preventDefault();
    perimetroTriangulo(formPeriTriangulo.lado1periTri.value, formPeriTriangulo.lado2periTri.value, formPeriTriangulo.lado3periTri.value)
}


let formPeriTrapecio = document.getElementById("formPeriTrapecio")
formPeriTrapecio.onsubmit = function(e) {
    e.preventDefault();
    perimetroTrapecio(formPeriTrapecio.ladoPeriTrap1.value, formPeriTrapecio.ladoPeriTrap2.value, formPeriTrapecio.ladoPeriTrap3.value, formPeriTrapecio.ladoPeriTrap4.value)
}

let formPeriCirculo = document.getElementById("formPeriCirculo")
formPeriCirculo.onsubmit = function(e) {
    e.preventDefault();
    perimetroCirculo(formPeriCirculo.radioPeri.value)
}

// --------------------------------------------botones de area----------------------------------------------

let formAreaCuadrado = document.getElementById("formAreaCuadrado")
formAreaCuadrado.onsubmit = function(e) {
    e.preventDefault();
    areaCuadrado(formAreaCuadrado.ladoAreaCuadr.value)
}

let formAreaRectangulo = document.getElementById("formAreaRectangulo")
formAreaRectangulo.onsubmit = function(e) {
    e.preventDefault();
    areaRectangulo(formAreaRectangulo.largoAreaRect.value, formAreaRectangulo.anchoAreaRect.value)
}

let formAreaTriangulo = document.getElementById("formAreaTriangulo")
formAreaTriangulo.onsubmit = function(e) {
    e.preventDefault();
    areaTriangulo(formAreaTriangulo.baseAreaTri.value, formAreaTriangulo.alturaAreaTri.value)
}

let formAreaTrapecio = document.getElementById("formAreaTrapecio")
formAreaTrapecio.onsubmit = function(e) {
    e.preventDefault();
    areaTrapecio(formAreaTrapecio.baseMayorArea.value, formAreaTrapecio.baseMenorArea.value, formAreaTrapecio.alturaAreaTrap.value)
}

let formAreaCirculo = document.getElementById("formAreaCirculo")
formAreaCirculo.onsubmit = function(e) {
    e.preventDefault();
    areaCirculo(formAreaCirculo.radioArea.value)
}