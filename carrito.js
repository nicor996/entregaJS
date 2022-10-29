const coso = localStorage.getItem("carro");
const listaC = JSON.parse(coso);


document.addEventListener("DOMContentLoaded", function(e){
    const borrarCarro = document.getElementById("borrarCarro")  
    borrarCarro.onclick = function() {
        localStorage.removeItem('carro');
        location.reload();
    }
  });

function crearCarroAux(lista) {
    var sum = 0;
    console.log(lista);
    for(let i = 0; i < lista.length; i++){    
        sum += Number.parseInt(lista[i].precio);
        console.log(i)
        let tabla = document.getElementById("tablaCarro").insertRow(-1);
        let col1 = tabla.insertCell(-1);
        let col2 = tabla.insertCell(-1);

        col1.innerHTML = lista[i].nombre;
        col2.innerHTML = lista[i].precio;
    }
    let tot = document.getElementById("totalCarro").innerHTML = `Total: $` + sum + ``;
    console.log("suma");
    console.log(sum);
}

window.onload = function() {
    if (coso != null) {
        crearCarroAux(listaC);
    }
}