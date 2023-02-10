

/*    // Menu Principal de la Heladera

   let menuInicio = prompt("Indique el numero de la lista para continuar: \n  1- Ingresar nuevo ingrediente \n 2- Stock total \n 3- Recetario \n 4- Nueva receta");
       while (menuInicio >= 1 || menuInicio <= 4){
        alert('Ingrese valor valido'); 
        menuInicio = prompt("Indique el numero de la lista para continuar: \n  1- Ingresar nuevo ingrediente \n 2- Stock total \n 3- Recetario \n 4- Nueva receta");
       }
 */
// objeto stock de ingredientes


// Reeveer clases de 5 - 8 e ir haciendo los ejercicios. 
// Reeveer la explkicacion del after y la lista de productos marolio
// volver a reescribir todo el programa.



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

function menuInicio(){
    let opcionInicial = parseInt(prompt("Indique el numero de la lista para continuar: \n  1) Ingresar nuevo ingrediente \n 2) Stock total \n 3) Eliminar ingrediente \n 4) Recetario \n 5) Salir"));
       return opcionInicial;  
}

 function ingresoDeIngredientes() {
    let producto = prompt('Ingrese el nombre del producto');
    let cantidad = parseInt(prompt('Indique cantidad del producto a ingresar'));
    let unidad = prompt("Ingrese una unidad del listado: gr, cc, u.");
    let ingrediente = new Ingredientes (producto, cantidad, unidad);
    stockDeIngredientes.push(ingrediente);
    let condicion = prompt("¿Desea ingresar otro producto? \n Ingrese S para sí \n Ingrese N para no");
    if (condicion === 'S' || condicion === "s"){
        ingresoDeIngredientes();}
    else if(condicion === 'N' || condicion === "n"){
        console.log(stockDeIngredientes);
    }
    menuInicio();
    }
    
// CODIGO EN PROGRESO

 function egresoDeIngredientes(){
    let producto = prompt('Indique el nombre del producto a eliminar');
    let ingrediente = stockDeIngredientes.find(producto => Ingredientes.producto === producto);
    let indice = stockDeIngredientes.indexOf(producto);
    stockDeIngredientes.splice(indice, 1);
    menuInicio();
 }

 function mostrarStock(){
    console.log(stockDeIngredientes);
    menuInicio();
 }

 function salir(){
    alert("Gracias por usar su Alacena Virtual");
 }

 function inProgress(){
    alert("Esta funcion aun no se encuentra disponible, lo sentimos")
 }
 //Mensaje de bienvenida
alert("Bienvenido a su Alacena Virtual");

// Declaracion de menu interactivo

let menu = menuInicio();


switch (menu) {
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
        break;
    default: alert("Ingrese una opcion valida");
    }


 



