//Funcion constructora
class Producto {
    constructor(nombre, cantidad, unidad) {
        this.nombre = nombre.toLowerCase();
        this.cantidad = cantidad;
        this.unidad = unidad;
    }
}

//Array de objetos
const Stock = [];



if(localStorage.getItem("Stock")){
    Stock = JSON.parse(localStorage.getItem("Stock"));
} 
//DOM

const primalContainer = document.getElementById("primalContainer");
const div = document.createElement("div");

div.innerHTML = `
    <div id="ingresoDeIngredientes">
    <hr>
    <form id="formulario">
        <fieldset>
        <label for="nombre">Ingrese su producto aqui</label>
        <input type="text" id="nombre"></input>
            <br>
        <label for="cantidad">Ingrese cantidad aqui</label>
        <input type="text" id="cantidad"></input>
            <br>
        <label for="unidad">Ingrese la unidad de medida deseada</label>
        <input type="text" id="unidad"></input> 
            <br>
        <button id="btnAdd" class="btn btn-block btn-primary m-3"> Guardar ingrediente </button> 
    </fieldset>
    </form>
    </div>      
    <hr>          
    <div id="carrito">Lista de productos</div>
                    `;

primalContainer.appendChild(div);



//formulario
const formulario = document.getElementById("formulario");

//modificar funcionIngresoDeIngredientes para que al hacer cick guarde el producto en carrito.
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const cantidad = document.getElementById("cantidad");
    const unidad = document.getElementById("unidad");
    const productoIngresado = new Producto(nombre.value, cantidad.value, unidad.value);
    Stock.push(productoIngresado);
    formulario.reset();
    console.log(Stock);
    localStorage.setItem("stock", JSON.stringify(Stock));
}
);
//HASTA ACA FUNCIONA TODO BIEN 

//carrito
const carrito = document.getElementById("carrito");

const mostrarStock = () => {
    Stock.forEach(producto => {
        const lista = document.createElement("div");
        lista.innerHTML = `
            <div>
            <p>${producto.nombre}</p>
            <p>${producto.cantidad}</p>
            <p>${producto.unidad}</p>
            <button id="trashBtn">Eliminar producto</button>
            </div>
                `;
        carrito.appendChild(div);
    }
    )
}

//falta crear funcion
const eliminarProducto = () =>{}




const btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", () => {
    Toastify({
        text: "Tu producto ha sido agregado",
        duration: 3000,
        gravity: "top",
        position: "rigth",

    })
})















//Ejecucion del programa

//programa();







/* function decrementoDeIngredientes() {
    let productoAEliminar = prompt('Indique el nombre del producto a eliminar');
    // Anuncio: ustede posee x elementos, cuantos desea eliminar?
    let cantidadAElimnar = parseInt(prompt("Ingrese cantidad a eliminar"));
    let ingrediente = stockDeIngredientes.find(producto => producto.producto === productoAEliminar);
    let indice = stockDeIngredientes.indexOf(ingrediente);

    stockDeIngredientes.splice(indice, 1);
    console.log(stockDeIngredientes);
}
 */






// Funciones

/* let flag = true; */


// Ingresar ingredientes CHECK!!
/* function ingresoDeIngredientes() {
    let producto = prompt('Ingrese el nombre del producto');
    let cantidad = parseInt(prompt('Indique cantidad del producto a ingresar'));
    let unidad = prompt("Ingrese una unidad del listado: gr, cc, u.");
    let ingrediente = new Ingredientes(producto, cantidad, unidad);
    stockDeIngredientes.push(ingrediente);
    let condicion = prompt("¿Desea ingresar otro producto? \n Ingrese S para sí \n Ingrese N para no");
    if (condicion === 'S' || condicion === "s") {
        ingresoDeIngredientes();
    }
    else if (condicion === 'N' || condicion === "n") {
        console.log(stockDeIngredientes);


    }
}


// Egreso de ingredientes (Solo se puede eliminar un objeto.)
function egresoDeIngredientes() {
    let productoAEliminar = prompt('Indique el nombre del producto a eliminar');
    let ingrediente = stockDeIngredientes.find(producto => producto.producto === productoAEliminar);
    let indice = stockDeIngredientes.indexOf(ingrediente);
    stockDeIngredientes.splice(indice, 1);
    console.log(stockDeIngredientes);
}



// Falta funcion para decremetnear cantidad de objetos!!!!

// Mostrar stock y terminar el programa CHECK
function mostrarStock() {
    console.log(stockDeIngredientes);
}

function salir() {
    flag = false;
    alert("Gracias por usar su Alacena Virtual");
}


//Funcion auxiliar para actualizar elementos.

function inProgress() {
    alert("Esta funcion aun no se encuentra disponible, lo sentimos")
}


// Declaracion de menu interactivo

function programa() {
    alert("Bienvenido a su Alacena Virtual");

    while (flag) {
        let opcionInicial = parseInt(prompt("Indique el numero de la lista para continuar: \n  1) Ingresar nuevo ingrediente \n 2) Stock total \n 3) Eliminar ingrediente \n 4) Recetario \n 5) Salir"));
        switch (opcionInicial) {
            case 1:
                ingresoDeIngredientes();
                break;
            case 2:
                mostrarStock();
                break;
            case 3:
                egresoDeIngredientes();
                break;
            case 4:
                inProgress();
                break;
            case 5:
                salir();
        }
    }
}
 */














