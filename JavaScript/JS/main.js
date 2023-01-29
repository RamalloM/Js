
let valorInicial;
let tasaDeInteres;

alert('Bienvenido a la tienda virtual de Pokemon');
 
let compra = Number(prompt("Ingrese el codigo del valorInicial deseado: \n 1- Pokeball 2000$ \n 2- Ultraball 4000$ \n 3- Pocion 1500$ \n 4- Caramelo Raro 8000$ \n 5- Antiparalisis 1000$ \n 6- Despertar 800$"));
while(compra < 1 || compra > 7)
{
    alert('Ingrese valor valido');
    compra = Number(prompt("Ingrese el codigo del valorInicial deseado: \n 1- Pokeball 2000$ \n 2- Ultraball 4000$ \n 3- Pocion 1500$ \n 4- Caramelo Raro 8000$ \n 5- Antiparalisis 1000$ \n 6- Despertar 800$"));
}
switch (compra) {
    case 1:
        valorInicial = 2000;
        break;
    case 2:
        valorInicial = 4000;
        break;
    case 3:
        valorInicial = 1500;
        break;
    case 4:
        valorInicial = 8000;
        break;
    case 5:
        valorInicial = 1000;
        break;
    case 6:
        valorInicial = 800;
        break;
    }
  
let cuotas = Number(prompt("En cuantas cuotas desea realizar su pago? \n Opciones de Pagos en Cuotas: \n 1 cuota sin interes \n 3 cuotas con 22% de interes \n 6 cuotas con 30% de interes \n 9 cuotas con 45% de interes \n 12 cuotas con 55% de interes"));
while(cuotas != 1 && cuotas != 3 && cuotas !=6 && cuotas != 12)
{
    let cuotas = Number(prompt("En cuantas cuotas desea realizar su pago? \n Opciones de Pagos en Cuotas: \n 1 cuota sin interes \n 3 cuotas con 22% de interes \n 6 cuotas con 30% de interes \n 9 cuotas con 45% de interes \n 12 cuotas con 55% de interes"));
}

if (cuotas === 1) {
    tasaDeInteres = 0;
} else if (cuotas === 3) {
    tasaDeInteres = 0.22;
} else if (cuotas === 6) {
    tasaDeInteres = 0.30;
} else if ((cuotas === 9)) {
    tasaDeInteres = 0.45;
} else if (cuotas === 12) {
    tasaDeInteres = 0.55;
}

function valorTotal(x) {
    let valorFinal = x + (x * tasaDeInteres);
    return valorFinal;
}
function precioEnCuotas(x, y) {
    let cuotaMensual = (x / y);
    return Math.round(cuotaMensual);
}
let valorFinal = valorTotal(valorInicial);


if(cuotas === 1){
alert('El valor total de su compra es de ' + valorFinal + " $" + ' a pagar en ' + cuotas + ' cuota' + ' de ' + precioEnCuotas(valorFinal, cuotas) + ' $.');
}
else{
    alert('El valor total de su compra es de ' + valorFinal + " $" + ' a pagar en ' + cuotas + ' cuotas' + ' de ' + precioEnCuotas(valorFinal, cuotas) + ' $.');
}
