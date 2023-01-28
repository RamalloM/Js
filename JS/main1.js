
let valorInicial = Number(prompt("Ingrese el valor de su item"));
let tasaDeInteres;
/* let menu = prompt('Desea agregar otro item al carrito de compras? \n Presione \'si\' para agregar. \n Presione \'no\' para ir al carrito.');

if (menu == "si"){ 
        ingreso();}

 */


alert("CUOTAS \n 1 cuota sin interes \n 3 cuotas con 22% de interes \n 6 cuotas con 30% de interes \n 9 cuotas con 45% de interes \n 12 cuotas con 55% de interes")
let cuotas = Number(prompt("En cuantas cuotas desea realizar su pago?"));


if (cuotas === 1) {
    tasaDeInteres = 0;
} else if (cuotas <= 3) {
    tasaDeInteres = 0.22;
} else if (cuotas === 6) {
    tasaDeInteres = 0.30;
} else if ((cuotas === 9)) {
    tasaDeInteres = 0.45;
} else if (cuotas === 12) {
    tasaDeInteres = 0.55;
} else {
    tasaDeInteres = 0;
}

function total(valorInicial, cuotas) {
    let valorFinal = valorInicial + (valorInicial * tasaDeInteres);
    return valorFinal;
}

let valorFinal = total(valorInicial, cuotas);

function precioEnCuotas(valorFinal, cuotas) {
    let cuotaMensual = (valorFinal / cuotas);
    return Math.round(cuotaMensual);
}

alert('El valor total de su compra es de ' + total(valorInicial, cuotas) + " $" + ' a pagar en ' + cuotas + ' cuotas' + ' de' + precioEnCuotas(valorFinal, cuotas) + ' $.');

