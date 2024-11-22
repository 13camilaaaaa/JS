/**  Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo, comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
• Usando setInterval.
• Usando setTimeout anidado.*/

// definicion de la funcion
function imprimirNumeros(desde, hasta) {

    //condicion que verifica que desde sea menor que hasta
    if (desde < hasta) { //si desde es menor que hasta, se ejecuta el bloque de codigo

        //
        let interval = setInterval(() => {

            // imprimir el numero actual en la consola
            console.log(desde);

            // incrementa a desde en 1, preparandolo para la siguiente iteracion
            desde++;

            // verificacion de que desde es mayor que hasta
            if (desde > hasta) { 
                // si es asi, se llama a clearInterval para detener la repeticion de la funcion
                clearInterval(interval);
            }
            // fin de la condicion y se ejecuta cada 1000 milisegundos
        }, 1000)
    }
    // de lo contratio, que desde sea mayor que hasta se muestra una alerta
    else {
        alert("El número inicial debe ser menor que el número final");
    }
}

// llama la funcion y se le dan los valores de los parametros
imprimirNumeros(1, 5);

