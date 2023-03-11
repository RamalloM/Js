
//Funcion constructora
class Producto {
    constructor(nombre, cantidad, unidad) {
        this.nombre = nombre.toLowerCase();
        this.cantidad = parseFloat(cantidad);
        this.unidad = unidad;
    }
}

//Array de objetos
let Stock = JSON.parse(localStorage.getItem("stock")) || [];


//DOM

const primalContainer = document.getElementById("primalContainer");
const div = document.createElement("div");

div.innerHTML = `
    <div id="ingresoDeIngredientes">
    <hr>
    <form id="formulario">
    <fieldset   class="form-group">
        <label for="nombre">Producto</label>
        <input type="text" id="nombre" class="form-control" placeholder="Ingrese el nombre del producto"></input>
            <br>
        <label for="cantidad">Cantidad</label>
        <input type="number" min="0" id="cantidad" class="form-control" placeholder="Ingrese un numero "></input>
            <br>
        <label for="unidad">Unidad</label>
        <input type="text" id="unidad" class="form-control" placeholder="Ingrese una unidad de medida"></input> 
            <br>
        <button class="btn btn-block btn-primary m-3"> Guardar ingrediente </button> 
    </fieldset>
    </form>
    </div>      
    <hr>          
    <div id="carrito"></div>
                    `;

primalContainer.appendChild(div);

//formulario
const formulario = document.getElementById("formulario");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const cantidad = document.getElementById("cantidad");
    const unidad = document.getElementById("unidad");

    if (!nombre.value || !cantidad.value || !unidad.value) {
        toast("Complete todos los datos del formulario");
        return;
    }

    const index = Stock.findIndex((producto) => producto.nombre === nombre.value.toLowerCase());

    if (index === -1) {
        agregarProducto(nombre.value, cantidad.value, unidad.value);
        toast("Tu producto fue agregado con exito");
    } else {
        Stock[index].cantidad = parseInt(Stock[index].cantidad) + parseInt(cantidad.value);
        toast("La cantidad de tu producto ha sido actualizada");
    }

    formulario.reset();
    guardarStock();
    mostrarStock();
}
);

//Carrito

const carrito = document.getElementById("carrito");


const crearProducto = (producto, index) => {
    const lista = document.createElement("div");
    lista.className = "lista";
    lista.innerHTML = `
      <ul>
        <li>${producto.nombre}</li>
        <li>${producto.cantidad}</li>
        <li>${producto.unidad}</li>
        <button id="btnAdd${index}">+</button>
        <button id="btnSubstract${index}">-</button>
      </ul>
      <button id="btnDelete${index}" class="btn btn-block btn-secondary m-3">Eliminar producto</button>
    `;

    // Agregar eventos a los botones
    const btnDelete = lista.querySelector(`#btnDelete${index}`);
    btnDelete.addEventListener("click", () => eliminarProducto(index));

    const btnAdd = lista.querySelector(`#btnAdd${index}`);
    btnAdd.addEventListener("click", () => agregarCantidad(index, 1));

    const btnSubstract = lista.querySelector(`#btnSubstract${index}`);
    btnSubstract.addEventListener("click", () => restarCantidad(index, -1));

    return lista;
};

// Función para eliminar un producto del stock
const eliminarProducto = (index) => {
    Stock.splice(index, 1);
    toast("Tu producto ha sido eliminado");

    localStorage.setItem("stock", JSON.stringify(Stock));
    mostrarStock();
};

// Función para agregar cantidad a un producto del stock
const agregarCantidad = (index, cantidad) => {
    const producto = Stock[index];
    !isNaN(cantidad) && (producto.cantidad++, localStorage.setItem("stock", JSON.stringify(Stock)), mostrarStock());
}

//Función para restar cantidad a un producto del stock
const restarCantidad = (index, cantidad) => {
    const producto = Stock[index];
    const cantidadActual = parseInt(producto.cantidad);
    (!isNaN(cantidad) && cantidadActual >= 1) &&
        (producto.cantidad--,
        localStorage.setItem("stock", JSON.stringify(Stock)),
        mostrarStock())
};
//Funcion para vaciar el carrito
const deleteChart = () => {
    Swal.fire({
        title: 'Alert',
        text: 'Desea eliminar todo su inventario?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true,
    }).then((result) => {
        result.isConfirmed ? (Stock = [], localStorage.clear(), mostrarStock()) : result.dismiss;
    }
    )
}

// Función principal para mostrar la lista de productos
const mostrarStock = () => {
    carrito.innerHTML = `<h2 id="secondaryTitle">Lista de Ingredientes</h2>
                            <button id="btnEmptyChart"> Eliminar Stock </button>`;
    Stock.forEach((producto, index) => {
        const lista = crearProducto(producto, index);
        carrito.appendChild(lista);
        //Boton vaciar carrito
        const btnEmptyChart = carrito.querySelector(`#btnEmptyChart`);
        btnEmptyChart.addEventListener("click", () => {
            deleteChart();
        })
    });
};






//Funcion alerta con Toastify
function toast(mensaje){
Toastify({
    text: mensaje,
    duration: 3000,
    gravity: "top",
    position: "right",
}).showToast();
}


//funcion para agregar un producto a la lista
function agregarProducto(nombre, cantidad, unidad){
    const productoIngresado = new Producto (nombre, cantidad, unidad);
    Stock.push(productoIngresado);
}

//funcion para actualizar el stock
function guardarStock(){
localStorage.setItem("stock", JSON.stringify(Stock));
}
//Ejecucion del programa
mostrarStock();