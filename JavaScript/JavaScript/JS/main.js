
let saludo = alert("Bienvenido a su Heladera Virtual");
let menuInicio;
/* 
function menu() {
    do {menuInicio = prompt("Indique el numero de la lista para continuar: \n  1- Ingresar nuevo ingrediente \n 2- Stock total \n 3- Recetario \n 4- Nueva receta");
       
        // Numero 1: Ingreso de nuevos ingredientes

        if (menuInicio === "1") { */
        let nuevoIngrediente = String(prompt("Ingrese ingrediente"));
        let cantidad = Number(prompt("Ingrese cantidad"));
        let unidad = String(prompt ("ingrese unidad de medida"));
    
        nuevoIngreso(nuevoIngrediente,cantidad,unidad);
            
            function nuevoIngreso (nuevoIngrediente, cantidad, unidad){
               
                let nuevoStock = nuevoIngrediente + "\t" + cantidad + " " + unidad;
                alert(nuevoStock);
            }

        console.log(nuevoIngreso(nuevoIngrediente,cantidad,unidad));
            
           /*  let stockActual = nuevoIngreso( "cebolla", 2 , "gr" );
            alert(stockActual); */
                          /*  menu();

        // Numero 2: Imprime el total del stock

        } else if (menuInicio == "2") {
            let stockTotal = nuevoIngreso;
            alert(stockTotal);
            
            




        } else if (menuInicio === "3") {
            alert('Su recetario actual es: ' + recetarioActual);

        } else if (menuInicio === "4") {
            let nuevaReceta = prompt("Ingrese nombre de receta");

        } else {
            alert("ingrese un numero valido");
        }
    } while (menuInicio >= 5 || menuInicio == NaN);
}




menu();
 */

// let stockTotal = nuevoIngrediente + stockTotal;




/* Heladera Virtual:

1- Lugar donde almacenar los ingredientes disponibles.
(Utilizar prompt para pedir el ingreso de ingredientes)

Crear una funcion que permita almacenar el nuevoIngrediente y la cantidad en la lista del stock total.




2- Cotejar ingredientes dados con recetas ya almacenadas en el programa.
(promt con if, para ingresar ingredientes o recetas).
*/
