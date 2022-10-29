//Crea los elementos de los productos

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