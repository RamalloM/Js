/* IDEA COMPLETA:

Base de datos en la que uno pueda almacenar, sumar y sustraer objetos.
Base de datos en la que se puedan poner recetas, sumarlas, sutraer objetos.
functiones que alerten de la falta de ingredientes.

FALTA:
eliminar carga de elementos vacios al carro
funcion para eliminar objetos del carrito
funcion para vaciar el carrito
todo lo relacionado al "recetario" y sus funciones
*/


//Funcion constructora
class Producto {
    constructor(nombre, cantidad, unidad) {
        this.nombre = nombre.toLowerCase();
        this.cantidad = cantidad;
        this.unidad = unidad;
    }
}

//Array de objetos
const Stock = JSON.parse(localStorage.getItem("stock")) || [];

//DOM

const primalContainer = document.getElementById("primalContainer");
const div = document.createElement("div");

div.innerHTML = `
    <div id="ingresoDeIngredientes">
    <hr>
    <form id="formulario">
    <fieldset   class="form-group">
        <label for="nombre">Ingrese su producto aqui</label>
        <input type="text" id="nombre" class="form-control"></input>
            <br>
        <label for="cantidad">Ingrese cantidad aqui</label>
        <input type="text" id="cantidad" class="form-control"></input>
            <br>
        <label for="unidad">Ingrese la unidad de medida deseada</label>
        <input type="text" id="unidad" class="form-control"></input> 
            <br>
        <button id="btnAdd" class="btn btn-block btn-primary m-3"> Guardar ingrediente </button> 
    </fieldset>
    </form>
    </div>      
    <hr>          
    <div id="carrito"></div>
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
    mostrarStock();
}
);


//carrito
const carrito = document.getElementById("carrito");

const mostrarStock = () => {
    carrito.innerHTML = `<h2 id:"secondaryTitle">Lista de Ingredientes</h2>`;
    Stock.forEach(producto => {
        const lista = document.createElement("div");
        lista.className = "lista";
        lista.innerHTML = `
            <div>
                <p>${producto.nombre}</p>
                <p>${producto.cantidad}</p>
                <p>${producto.unidad}</p>
            </div>
            <button id="${producto.nombre}" class="btn btn-block btn-secondary m-3">Eliminar producto</button>
                `;
        carrito.appendChild(lista);

    }
    )
}

const btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", () => {
    Toastify({
        text: "Tu producto ha sido agregado",
        duration: 3000,
        gravity: "top",
        position: "right",
    }).showToast();
})





mostrarStock();