//Crea los elementos de los productos
window.onload = function() {
    let add1 = document.getElementById("add1")
    add1.addEventListener("click", f1);

    let add2 = document.getElementById("add2")
    add2.addEventListener("click", f2);

    let add3 = document.getElementById("add3")
    add3.addEventListener("click", f3);

    let add4 = document.getElementById("add4")
    add4.addEventListener("click", f4);

}


const listaCarro = []

fetch("./data/elementos.json")
.then(response => response.json())
.then(data => {
    console.log(data);
    let htmlContentToAppend = ""
    data.forEach(element => {
        console.log(element.nombre);
        htmlContentToAppend += `
        <div class="item">
                    <div class="item-img">
                        <img src="` + element.foto + `">
                    </div>
                    <div class="item-detail">
                        <h3 class="item-name">` + element.nombre + `</h3>
                        <div class="item-price">
                            <span class="new-price">$` + element.precio + `</span>
                        </div>
                        <p>` + element.descripcion + `</p>
                        <button type="button" class="add-btn" id="add` + element.id + `">add to cart</button>
                    </div>
        </div>
        `
    });
    document.getElementById("prueba").innerHTML = htmlContentToAppend;
});


function guardarCarro(lista) {
    localStorage.setItem('carro', JSON.stringify(lista));
}

const libroRojo = {
    nombre: 'Libro de Matematica',
    precio : "150",
};

const libroVerde = {
    nombre: 'Libro de Ciencia Física',
    precio : "180",
};

const libroAzul = {
    nombre: 'Libro de Quimica',
    precio : "210",
};

const libroAmarillo = {
    nombre: 'Libro de Matematica 2',
    precio : "190",
};

function f1() {
    listaCarro.push(libroRojo);
    console.log(libroRojo)
    guardarCarro(listaCarro);
    console.log(listaCarro);
}

function f2() {
    listaCarro.push(libroVerde);
    guardarCarro(listaCarro);
}
function f3() {
    listaCarro.push(libroAzul);
    guardarCarro(listaCarro);
}
function f4() {
    listaCarro.push(libroAmarillo);
    console.log(listaCarro);
    guardarCarro(listaCarro);
}
