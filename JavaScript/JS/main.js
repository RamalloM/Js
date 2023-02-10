
//Funcion constructora
class Ingredientes {
    constructor(producto, cantidad, unidad) {
        this.producto = (producto);
        this.cantidad = (cantidad);
        this.unidad = (unidad);
    }
}

//Obetos nativos
const fideos = new Ingredientes('fideos', '2', 'paq.');
const cebolla = new Ingredientes('cebolla', '6', 'u.');

//Array de objetos
const stockDeIngredientes = [fideos, cebolla];

// Funciones 

let flag = true;

function ingresoDeIngredientes() {
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



function egresoDeIngredientes() {
    let productoAEliminar = prompt('Indique el nombre del producto a eliminar');
    let ingrediente = stockDeIngredientes.find(producto => producto.producto === productoAEliminar);
    let indice = stockDeIngredientes.indexOf(ingrediente);
    stockDeIngredientes.splice(indice, 1);
    console.log(stockDeIngredientes);
}

function mostrarStock() {
    console.log(stockDeIngredientes);
}

function salir() {
    flag = false;
    alert("Gracias por usar su Alacena Virtual");
}

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

//Ejecucion del programa

programa();


 



